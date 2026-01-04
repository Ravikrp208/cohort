import React from 'react'

const Myport = () => {
  return (
    <>
 
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-gray-100">
      <div className="text-center px-6 max-w-2xl">
        
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-sky-400">Ravi kumar pandit</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Frontend Developer • React Enthusiast
        </p>

        <p className="mt-6 text-gray-300 leading-relaxed">
          I build modern, responsive, and user-friendly web applications using
          React and Tailwind CSS.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-sky-400 text-slate-900 font-medium rounded-lg hover:bg-sky-300 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-slate-900 transition">
            Contact Me
          </button>
        </div>

      </div>
    </section>
    </>
  );
};



 
export default Myport