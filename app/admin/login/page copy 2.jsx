"use client";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import MouseCursor from "@/app/components/MouseCursor";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // ✅ Redirect if already logged in
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
    <div className="min-h-screen  flex justify-center items-center">
      <MouseCursor />
      <form
        onSubmit={handleLogin}
        className="p-6 border rounded-[25px] bg-slate-400 w-full max-w-md"
      >
        <img
          src="https://www.marswebsolution.com/images/logo.png"
          alt="Company Logo"
          className="mx-auto mb-4 w-18 h-42 object-contain"
        />

        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border text-black p-2 mb-2 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border text-black p-2 mb-2 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-gray-600 text-white px-4 py-2 w-full rounded mt-2"
          type="submit"
        >
          Login
        </button>
        <p>Go to <a href="/" className="text-slate-700">Home</a></p>
        {error && <p className="text-red-900 mt-2">{error}</p>}
      </form>
    </div>
  );
}
