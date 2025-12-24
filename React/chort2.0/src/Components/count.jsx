import React, { useState } from "react";

const Count = () => {
  const [marks, setMarks] = useState([20, 52, 85, 65, 86]);

  function graceStudent() {
    const newMarks = marks.map(function (elem) {
      return elem + 5;
    });
    setMarks(newMarks);
  }

  return (
    <div>
      {marks.map(function (elem, idx) {
        return (
          <h1 key={idx}>
            Student {idx + 1} = {elem} ({elem > 33 ? "Pass" : "FAIL"})
          </h1>
        );
      })}

      <button className="border-2 bg-emerald-800 text-4xl font-mono  rounded-2xl" onClick={graceStudent}>Give Grace</button>
    </div>
  );
};

export default Count;
