import React from 'react'

const Loginpage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br f-100 to-purple-500 ">
      <div className="w-full max-w-md rounded-2xl  p-10 shadow-xl ">
        {/* Title */}
        <h1 className="mb-2 text-center text-3xl font-bold ">Welcome Back</h1>
        <p className="mb-8 text-center text-gray-500 ">
          Please sign in to your account
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium  ">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400
                         focus:border-bluew-500 focus:outline-none "
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400
                         focus:border-blue-500 "
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-30" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white
                       hover:bg-blue-700 transition
                       dark:bg-blue-500 "
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500 ">
          Don’t have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline ">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Loginpage