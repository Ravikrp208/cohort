import React from 'react'
import Card from './Components/Card';

const App = () => {
  const age =24;
  var name ="Ravi kumar pandit"
  const user = "React.js"
  const arr =['Ravi kumar ','shivam','manish']
  return (
    <>
      {/* <h1 className="text-6xl  font-bold text-red-700">{age}</h1>
      <h1 className="text-6xl  font-bold text-red-700">{name}</h1>
      <h1 className="text-6xl  font-bold text-red-700">{user}</h1>

      <h1 className="text-6xl  font-bold text-yellow-500">
        {arr.map(function(elem){
        return  <h1> {elem} </h1>
      })}
      </h1> */}

      <div className="  p-3 h-screen  rounded-full ">
        {Card("Ravi kumar ", 24)}
        {Card("shivsm kumar ", 24)}

        {/* object  */}

        <Card user="Ravi kumar pandit " age={24} />
        <Card user="shivam kumar  " age={23} />
        <Card user="manish kumar  " age={24} />


        
      </div>
    </>
  );
}

export default App