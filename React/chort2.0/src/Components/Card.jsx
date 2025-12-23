import React from 'react'

const Card = (props) => {
    console.log(props.user);

 
  
  return (
    <div className="bg-red-800 border text-3xl font-bold m-5 p-5 w-100 h-100">
      
        <h1 className=''> {props.user}

        </h1>
         </div>
  )
}

export default Card