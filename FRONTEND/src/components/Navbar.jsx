import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from "react-router"
import Help from '../pages/Help'

function Navbar() {
  return (
    <div className="bg-gray-100 p-1">      
    <div className="container mx-auto max-w-6xl">
     <nav className="navbar flex justify-between items-center p-2">
      <div className="font-Cormorant font-semibold">PENTA</div>
      <div className="text-sm">  
        <ul className="flex gap-6 font-Nunito">
          <Link to={'/'} className='hover:cursor-pointer hover:underline focus:outline-none'>HOME</Link>
          <li className='hover:cursor-pointer hover:underline'>SHOP</li>
          <li className='hover:cursor-pointer hover:underline'>BEST SELLERS</li>
          <Link to={'/contact'} className='hover:cursor-pointer hover:underline'>CONTACT</Link>
          <Link to={'/help'}> <li className='hover:cursor-pointer hover:underline'>HELP</li> </Link>
        </ul>
      </div>
      <div className="flex gap-6 font-Nunito">
        <div className='hover:cursor-pointer hover:underline'>Login</div>
        <div className='hover:cursor-pointer hover:underline'>Signup</div>
      </div>
     </nav>
    </div>
    </div>
  )
}

export default Navbar
