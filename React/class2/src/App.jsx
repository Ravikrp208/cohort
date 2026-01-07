import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Components/Nav'
import AllSection from './Components/AllSection'
import Footer from './Components/Footer'


const App = () => {
  const [newTheme , setnewTheme] =useState('')
    const getData= async ()=>{
    const response = await axios.get('http://localhost:8000/data')
    console.log(response)
    }
  return (
    <div className="h-screen bg-blue-600">
      {/* <button onClick={getData} className='text-5xl rounded-xl bg-red-600 p-2 m-2'>Get data</button> */}

      <div className="bg-red-400 h-screen p-10 m-1">
        <Nav />
        <form
          className=" h-100  bg-red-100"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(newTheme);
            setnewTheme("");
          }}
        >
          <div className="p-20 justify-center flex gap-5">
            <input
              className=" border rounded-2xl border-cyan-500 p-2"
              value={newTheme}
              onChange={(e) => {
                setnewTheme(e.target.value);
              }}
              type="text"
              placeholder="Enter theme"
            />
            <button className="bg-blue-800 hover:bg-pink-900 transition duration-300 border-cyan-400  border rounded-3xl p-2  ">
              submit
            </button>
          </div>
        </form>
      </div>
      <AllSection />
      <Footer />
    </div>
  );
}

export default App