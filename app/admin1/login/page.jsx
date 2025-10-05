"use client";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import MouseCursor from "@/app/components/MouseCursor";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    const uId = localStorage.getItem("uId");
    if (userEmail && uId) {
      router.push("/admin/dashboard");
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const uId = userCred.user.uid;

      
      const userDoc = await getDoc(doc(db, "users", uId));
      if (userDoc.exists()) {
        const userData = userDoc.data();

        if (userData.userType === "admin" && userData.status === true) {
          
          localStorage.setItem("userEmail", email);
          localStorage.setItem("uId", uId);
          router.push("/admin/dashboard");
        } else if (userData.userType !== "admin") {
          
          setError("Authentication not present or not an admin");
        } else if (userData.status === false) {
          
          setError("Your account is disabled!!!");
        }
      } else {
        setError("No user data found.");
      }
    } catch (err) {
      console.error("Firebase Sign-In Error:", err.message);
      setError("Invalid email or password");
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setResetError(""); 
    setResetSuccess("");

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetSuccess("Password reset email sent! Please check your inbox.");
      setIsForgotPassword(false); 
    } catch (err) {
      setResetError("Error sending password reset email. Please try again.");
      console.error("Password Reset Error:", err.message);
    }
  };

  return (
    <div className="flex h-screen">
      <MouseCursor />
      <div className="w-[85%] flex flex-col items-center justify-center bg-[#F8F7FA] relative">
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
            M
          </div>
          <h1 className="text-xl font-semibold text-gray-700">Shrote Technology</h1>
        </div>

        <div className="relative">
          <Image src="/auth.png" alt="Character" width={300} height={300} />
        </div>
      </div>

      <div className="w-1/2 flex items-center bg-white justify-center">
        <form onSubmit={isForgotPassword ? handleForgotPassword : handleLogin} className="w-[350px]">
          <h2 className="text-2xl text-gray-700 mb-2">
            {isForgotPassword ? "Reset Your Password" : "Welcome to Shrote Technology.! 👋"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isForgotPassword
              ? "Please enter your email to receive a password reset link."
              : "Please sign-in to your account and start the adventure"}
          </p>

          
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {isForgotPassword ? "Email" : "Email or Username"}
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border border-purple-400 text-gray-700 rounded-md px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-purple-500"
            value={isForgotPassword ? resetEmail : email}
            onChange={(e) => (isForgotPassword ? setResetEmail(e.target.value) : setEmail(e.target.value))}
            required
          />

          {!isForgotPassword && (
            <>
              
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full border text-gray-600 border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="absolute right-3 top-2 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
            </>
          )}

          
          {resetError && <p className="text-red-600 mt-2">{resetError}</p>}
          {resetSuccess && <p className="text-green-600 mt-2">{resetSuccess}</p>}
          {error && <p className="text-red-600 mt-2">{error}</p>}

          <div className="flex items-center justify-between mb-4">
            {!isForgotPassword && (
              <>
                <label className="flex items-center text-gray-600 text-sm">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsForgotPassword(true);
                  }}
                  className="text-sm text-gray-600 hover:text-gray-800 transition"
                >
                  Forgot Password?
                </a>
              </>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
            {isForgotPassword ? "Send Reset Link" : "Sign in"}
          </button>

          
          {isForgotPassword && (
            <button
              type="button"
              onClick={() => setIsForgotPassword(false)}
              className="w-full mt-4 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Back to Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
