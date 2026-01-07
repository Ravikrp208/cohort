import React, { createContext } from 'react'
export const ThemeComtext = createContext

const Theme = (props) => {
  return (
    <div>Theme
        {props.children}
    </div>
  ) 
}

export default Theme