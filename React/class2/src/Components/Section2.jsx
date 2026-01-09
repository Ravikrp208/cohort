import React from 'react'
import AllCourses from './AllCourses'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section2 = () => {
  const data =useContext(ThemeDataContext)
  return (
    <div>
      <div className="bg-amber-600 justify-center items-center flex flex-col text-4xl font-bold underline">
         Section2 
         <h1>{data}</h1>
      </div>
       <AllCourses />
    
    </div>
  );
}

export default Section2