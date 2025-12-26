import React, { useState } from 'react'

const Input = () => {
    const submitted =()=>{
        e.preventDefault()
        console.log('submitted')

        const [title ,settitle] =useState('')
        const [allUser ,setallUser] =useState(['Ravi'])

       const oldUsers = setallUser[...allUsers]
       oldUsers.push(title)
       setallUser(oldUsers)
    }
  return (
    <div>
        <form >  <input type="text" placeholder='Enter name'
        value={title}
        required
        onChange={(e)=> {
            settitle(e.target.value)
        }}
    />
    <button>submit</button>
{allUser.map()function (){}}
    </form>
  
    </div>
  )
}

export default Input