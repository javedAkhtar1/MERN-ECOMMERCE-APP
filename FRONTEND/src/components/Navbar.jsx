import React from 'react'

function Navbar() {
  return (
    <div className="bg-gray-100 p-1">      
    <div className="container mx-auto max-w-6xl">
     <nav className="navbar flex justify-between items-center p-2">
      <div className="font-Cormorant font-semibold">PENTA</div>
      <div className="text-sm">
        <ul className="flex gap-6 font-Nunito">
          <li className='hover:cursor-pointer hover:underline focus:outline-none'>HOME</li>
          <li className='hover:cursor-pointer hover:underline'>SHOP</li>
          <li className='hover:cursor-pointer hover:underline'>BEST SELLERS</li>
          <li className='hover:cursor-pointer hover:underline'>CONTACT</li>
          <li className='hover:cursor-pointer hover:underline'>HELP</li>
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
