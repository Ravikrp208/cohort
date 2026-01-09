import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav = () => {
  const [theme, settheme] =useContext (ThemeDataContext)
  return (
    <div>
      <div className="text-2xl font-extrabold  flex justify-around gap-100 m-3 p-10">
        <h1>Navbar - {theme}</h1>
        <button 
        onClick={()=>{
          if(theme =='light'){
            settheme('dark')
          }
          else{
            settheme('light')
          }
        }}
        className="bg-blue-600 rounded-4xl p-2 ">change theme</button>
      </div>
    </div>
  );
}

export default Nav