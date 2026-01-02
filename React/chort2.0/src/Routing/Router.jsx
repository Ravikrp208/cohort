import React from 'react'

const router = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Product">Product</Link>
      <Link to="/Login">Login</Link>
    </div>
  );
}

export default router