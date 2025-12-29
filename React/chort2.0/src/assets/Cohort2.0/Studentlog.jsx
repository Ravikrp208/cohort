import React, { useState } from "react";

const Studentlog = () => {
  const [userName, setName] = useState("");
  const [userRole, setuserRole] = useState("");
  const [userURL, setuserURL] = useState("");
  const [userDesc, setuserDesc] = useState("");

  const [allUser, setallUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(userName ,userRole, userURL,userDesc);

    const oldUsers = [...allUser];
    oldUsers.push({ userName, userRole, userURL, userDesc });
    console.log(oldUsers);
    setallUser(oldUsers);

    setName("");
    setuserURL("");
    setuserRole("");
    setuserDesc("");
  };

  return (
    <div className=" bg-black h-screen   text-white">
      <form
        onChange={() => {
          submitHandler();
        }}
        className="flex flex-col"
      >
        <input
          value={userName}
          onChange={(e) => {
            setName(e.target.value);
            console.log(userName);
          }}
          className="border-2 p-5 text-4xl font-semibold  rounded-2xl m-2 w-[45%]"
          type="text"
          placeholder="Enter Your name"
        ></input>

        <input
          value={userURL}
          onChange={(e) => {
            setuserURL(e.target.value);
          }}
          className="border-2 p-5 text-4xl font-semibold  rounded-2xl m-2 w-[45%]"
          type="text"
          placeholder="Image Url"
        ></input>
        <input
          value={userRole}
          onChange={(e) => {
            setuserRole(e.target.value);
          }}
          className="border-2 p-5  text-4xl font-semibold rounded-2xl m-2 w-[45%]"
          type="text"
          placeholder="Enter role"
        ></input>
        <input
          value={userDesc}
          onChange={(e) => {
            setuserDesc(e.target.value);
          }}
          className="border-2 p-5 text-4xl font-semibold  rounded-2xl m-2 w-[45%]"
          type="text"
          placeholder="Enter DEscription"
        ></input>
        <button className="text-4xl bg-blue-700 rounded-full text-center h-15 w-50">
          Create User
        </button>
      </form>
    </div>
  );
};

export default Studentlog;
