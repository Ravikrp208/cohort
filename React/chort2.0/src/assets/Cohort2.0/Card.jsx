import React from "react";

const Card = (props) => {
  return (
    <div
      key={idx}
      className="lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl flex items-center justify-center flex-col bg-white text-black"
    >
      <img
        className=" p-3 h-24 w-24 rounded-full object-center object-cover  "
        src={props.elem.userURL}
        alt=""
      />
      <h1 className="text-xl font-bold">{props.elem.userName}</h1>
      <h5 className="text-base text-blue-600 font-semibold m-2 ">
        {" "}
        {props.elem.userRole}{" "}
      </h5>
      <p className="text-sm font-medium leading-light">{props.elem.userDesc}</p>
      <button
        onClick={() => deleteHandler(props.idx)}
        className=" cursor-pointer active:scale-95 px-10 text-sm rounded bg-red-700 text-white font-semibold m-10 "
      >
        remove
      </button>
    </div>
  );
};

export default Card;
