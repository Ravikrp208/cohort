import React, { useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className="w-20 h-20 m-2 p-2 border-black text-fuchsia-600 font-bold text-5xl">
        {counter}
      </h1>

      <button
        onClick={() => setCounter(counter +1)}
        className="text-4xl font-bold m-2 p-2 bg-blue-700 rounded-2xl"
      >
        Increase
      </button>
    </div>
  );
};

export default UseEffect;
