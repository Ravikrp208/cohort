import React from "react";

const Navbar = ({ title, url, link }) => {
  return (
    <div className="p-5 m-5 text-2xl bg-pink-800 text-white rounded-xl">
      <h2 className="border-2 h-auto w-100 rounded-2xl font-bold bg-blue-700 m-3 p-3 text-3xl">{title}</h2>

      {/* Image */}
      <img src={url} alt={title} className="w-full max-w-md rounded-lg my-4" />

      {/* Links */}
      <ul className="flex gap-6">
        {link.map((item, index) => (
          <li key={index} className="cursor-pointer hover:underline">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
