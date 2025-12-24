import React, { use, useState } from "react";

const Change = () => {
  const [gender, setGender] = useState("Male");
  const [num, setnum] = useState(0);

  function ChangeGender() {
    if (gender == "Male") {
      setGender("Female");
    } else {
      setGender("Male");
    }
  }

  return (
    <div className="m-10 p-10 ">
      <h1 className="  text-4xl font-bold">{gender}</h1>
      <button
        className="border-2 h-15 w-60 bg-blue-700 rounded-2xl cursor-pointer  text-2xl font-bold"
        onClick={ChangeGender}
      >
        ChangeGender
      </button>
      <div className=" flex  m-5 gap-4">
        <div className="h-10 w-10 text-4xl font-semibold border-2 ">{num}</div>
        <button className="text-4xl font-bold" onClick={() => setnum(num + 1)}>+</button>
        <button className="text-4xl font-bold" onClick={() => setnum(num - 1)}>-</button>
      </div>
    </div>
  );
};

export default Change;
