import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
  const data = useContext(ThemeDataContext)
  
  return (
    <div className='text-4xl bg-blue-700 flex flex-col gap-4 my-5 p-10'> Footer
      <h1> {data} </h1>
    </div>
  )
}

export default Footer