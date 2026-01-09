import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>This is a home page</h1>
        <button onClick={()=>{
            navigate('./Products')

        }}>explore courses</button>
    </div>
  )
}

export default Home