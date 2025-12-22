import React from 'react'

const Card = (props) => {
    console.log(props.user);

 
  
  return (
    <div className='bg-amber-500 h-40 w- 40 border-2 gap-1 text-5xl font-bold'>
      
        <h1 className=''> {props.user}

        </h1>
         </div>
  )
}

export default Card