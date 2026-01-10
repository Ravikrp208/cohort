import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <h1 className="text-3xl md:text-8xl font-extrabold  md:font-bold text-white mb-8">
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
  );
};

export default Home;
