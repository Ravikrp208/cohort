import React from 'react'
import PropTypes, { element } from 'prop-types'
import Product from '../Pages/Product';

const page = props => {
    const allRoutes = creatBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/courses", element: <Courses /> },
      { path: "/Product", element: <Product/> },
    ]);
  return (
    <div>

    </div>
  )
}



export default page