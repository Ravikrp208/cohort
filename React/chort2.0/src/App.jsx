import React from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Count from "./Components/count";
import Change from "./Components/Change";
import Form from "./Formpage/Form";
import Loginpage from "./Work Page/Login";
import Studentlog from "./assets/Cohort2.0/Studentlog";

const App = () => {
  const age = 24;
  var name = "Ravi kumar pandit";
  const user = "React.js";
  const arr = ["Ravi kumar ", "shivam", "manish"];

  function btnClicked() {
    console.log("button is clicled !!!");
  }

  return (
    // <>
    //   <div className="flex justify-center items-center">
    //     <button
    //       onClick={btnClicked}
    //       className="bg-emerald-900 text-white text-4xl px-6 py-3 rounded-2xl">
    //       Download the file
    //     </button>
    //   </div>

    //    <div>
    //     <Navbar
    //       title="I am a Photo Designer"
    //       url="https://images.pexels.com/photos/3131809/pexels-photo-3131809.jpeg"
    //       color="red"
    //       link={["Home", "About", "Account", "Contact"]}
    //     />
    //     <Navbar
    //       title=" I love of Nature"
    //       url="https://images.pexels.com/photos/33689814/pexels-photo-33689814.jpeg"
    //       color="yellow"
    //       link={["Home", "About", "Account", "Contact"]}
    //     />
    //     <Navbar
    //       title="I love Beauty"
    //       url="https://images.pexels.com/photos/35158977/pexels-photo-35158977.jpeg"
    //       color="blue"
    //       link={["Home", "About", "Account", "Contact"]}
    //     />
       
    //   </div> 

    //   <div>
    //     <h1 className="text-6xl  font-bold text-red-700">{age}</h1>
    //     <h1 className="text-6xl  font-bold text-red-700">{name}</h1>
    //     <h1 className="text-6xl  font-bold text-red-700">{user}</h1>

    //     <h1 className="text-4xl">
    //       {arr.map(function (elem) {
    //         return <h1> {elem} </h1>;
    //       })}
    //     </h1>

    //     <div className="bg-amber-500">
    //       {Card("Ravi kumar ", 24)}
    //       {Card("shivsm kumar ", 24)}
        
    //       <Card user="Ravi kumar pandit " age={24} />
    //       <Card user="shivam kumar  " age={23} />
    //       <Card user="manish kumar  " age={24} />
    //     </div>
    //   </div>
   
    
    // </>

    <div>
      {/* <Count/> */}
      {/* <Change/> */}
      {/* <Form/> */}
      {/* <Loginpage/> */}
      <Studentlog/>
      
      

    </div>
  );
};

export default App;
