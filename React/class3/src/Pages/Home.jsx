import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png" // agar public folder me hai
            alt="Logo"
            className="h-10 w-10"
          />
          <h2 className="text-white text-2xl font-bold">MyCourses</h2>
        </div>

        <button
          onClick={() => navigate("/Login")}
          className="text-white font-semibold hover:underline"
        >
          Login
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-3xl md:text-8xl font-extrabold text-white mb-8">
          This is a Home Page
        </h1>

        <button
          onClick={() => navigate("/products")}
          className="px-8 py-3 text-xl md:text-5xl font-semibold text-white
                     bg-gradient-to-r from-yellow-400 to-orange-500
                     rounded-full shadow-lg
                     hover:from-orange-500 hover:to-yellow-400
                     hover:scale-105 transition-transform duration-300"
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default Home;
