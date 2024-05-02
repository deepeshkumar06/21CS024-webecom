import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='header'>
        Hello
    <div className='Navbar'>
        <NavLink to={'/'}>Home</NavLink>
       <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
    </div>
    </div>
  )
}
