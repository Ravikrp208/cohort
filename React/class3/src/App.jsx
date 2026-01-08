import React, { use } from "react";
import axios from "axios";
import Home from "./components/Home";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  // gsap.registerPlugin(useGSAP)
  // useGSAP (()=>{
  //   gsap.to('html',{
  //     backgroundColor:"red",
  //     scrollTrigger:{
  //       trigger:"#section-1",
  //     }
  //   })
  // },[])

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
      <main>
        <section id ="section 1">2</section>
        <section id ="section 2" >1</section>
        <section id ="section 3">3</section>
        <section id ="section 4">4</section>
      </main>
      {/* <Home/> */}
    </div>
  );
};

export default App;
