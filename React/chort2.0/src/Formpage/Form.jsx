import React from "react";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted");
  };
  return (
    <div className="text-4xl bg-blue-600 m-4 p-50 rounded-2xl font-semibold">
      <form
        onSubmit
        submit={(e) => {
          submitHandler(e);
        }}>
        <input className="bg-emerald-900" type="text" placeholder="Enter your name" />
        <button>sumbit</button>
      </form>
    </div>
  );
};

export default Form;
