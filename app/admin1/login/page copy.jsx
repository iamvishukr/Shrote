"use client";
import { useState } from "react";
import Image from "next/image";
import MouseCursor from "@/app/components/MouseCursor";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

      if (userDoc.exists() && userDoc.data().userType === "admin" && userDoc.data().status === true) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("uId", uId);

        router.push("/admin/dashboard");
      }else if(userDoc.exists() && userDoc.data().userType === "admin" && userDoc.data().status === false){
        setError("Your account is disabled!!!");
      }
       else {
        setError("Authentication not present or not an admin");
      }
    } catch (err) {
      setError("Invalid email or password");
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
          <h1 className="text-xl font-semibold text-gray-700">
            Shrote Technology
          </h1>
        </div>

        
        <div className="relative">
          <Image
            src="/auth.png" 
            alt="Character"
            width={300}
            height={300}
          />
         
        
        </div>
      </div>

     
       <div className="w-1/2 flex items-center bg-white justify-center">
      <form onSubmit={handleLogin} className="w-[350px]">
        <h2 className="text-2xl text-gray-800 mb-2">
          Welcome to Shrote Technology  <span>👋</span>
        </h2>
        <p className="text-gray-700 mb-6">
          Please sign-in to your account and start the adventure
        </p>

        {/* Email Input */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email or Username
        </label>
        <input
          type="text"
          placeholder="Enter your email or username"
          className="w-full border border-purple-400 text-gray-700 rounded-md px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Input */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
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
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-gray-600 text-sm">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
        >
          Sign in
        </button>

        {/* Error Message */}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
    </div>
  );
}
