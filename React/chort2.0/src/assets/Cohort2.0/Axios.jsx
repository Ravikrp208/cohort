import React, { useState } from "react";
import axios from "axios";

const Axios = () => {

    const [user,setuser] =useState([])
  const getdata = async () => {
    try {
      const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
   
      setuser(resp.data)
         console.log(resp.data);

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="text-4xl font-bold">
    
    <button onClick={getdata}>hello</button>
    {user.map(function(elem,idx){
        return<h1 key={idx}>{elem.name} {idx+1}</h1>
    })}

    </div>
  );
};

export default Axios;
