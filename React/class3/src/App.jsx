import React from "react";
import axios from "axios";

const App = () => {
  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={getData}>Data</button>
    </div>
  );
};

export default App;
