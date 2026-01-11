import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Dummy login
    if (email === "user@example.com" && password === "123456") {
      alert("Login Successful ✅");
      setError("");
      navigate("/"); // Redirect to Home page
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="w-full max-w-md rounded-3xl p-12 shadow-2xl bg-white">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-purple-500 p-4 rounded-full mb-4 shadow-lg">
            <span className="text-white text-4xl font-bold">🌟</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2 text-lg text-center">
            Sign in to your account
          </p>
        </div>

        {error && (
          <p className="mb-4 text-center text-red-500 font-semibold">{error}</p>
        )}

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-6 py-4 text-lg text-gray-900 placeholder-gray-400
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-6 py-4 text-lg text-gray-900 placeholder-gray-400
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 py-4 text-lg font-semibold text-white
                       shadow-lg hover:scale-105 hover:from-indigo-500 hover:to-purple-500 transition-transform duration-300"
          >
            Sign In
          </button>
        </div>

        <p className="mt-8 text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="font-semibold text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
