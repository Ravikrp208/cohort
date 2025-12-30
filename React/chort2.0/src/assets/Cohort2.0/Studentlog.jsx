import React, { useState } from "react";
import Card from "./Card";

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
  const deleteHandler = (idx) => {
    const copyUsers = [...allUser];
    copyUsers.splice(idx, 1);
    setallUser(copyUsers);
  };

  return (
    <div className=" bg-black h-screen   text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col "
      >
        <input
          value={userName}
          onChange={(e) => {
            setName(e.target.value);
            // console.log(userName);
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

      <div className="p-4  py-10 lg: gap-2 flex flex-wrap  ">
        {allUser.map(function (elem, idx) {
          return (
            
            <div
              key={idx}
              className="lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl flex items-center justify-center flex-col bg-white text-black"
            >
              <img
                className=" p-3 h-24 w-24 rounded-full object-center object-cover  "
                src={elem.userURL}
                alt=""
              />
              <h1 className="text-xl font-bold">{elem.userName}</h1>
              <h5 className="text-base text-blue-600 font-semibold m-2 ">
                {" "}
                {elem.userRole}{" "}
              </h5>
              <p className="text-sm font-medium leading-light">
                {elem.userDesc}
              </p>
              <button onClick={() =>
                deleteHandler(idx)
              } className=" cursor-pointer active:scale-95 px-10 text-sm rounded bg-red-700 text-white font-semibold m-10 ">
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Studentlog;
