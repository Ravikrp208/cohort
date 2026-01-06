import React from 'react'
import axios from 'axios'
import Nav from './Components/Nav'
import AllSection from './Components/AllSection'
import Footer from './Components/Footer'


const App = () => {
    const getData= async ()=>{
    const response = await axios.get('http://localhost:8000/data')
    console.log(response)
    }
  return (
    <div>
  {/* <button onClick={getData} className='text-5xl rounded-xl bg-red-600 p-2 m-2'>Get data</button> */}
    <Nav/>
    <AllSection/>
    <Footer/>
    </div>
  )
}

export default App