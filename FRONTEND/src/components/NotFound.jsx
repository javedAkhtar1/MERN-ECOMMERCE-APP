import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from "./Footer.jsx"
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
        <Navbar />
        <div className='h-[90vh] max-w-5xl mx-auto text-center flex flex-col gap-1 mt-10'>
            <h1 className='text-[9rem] font-Nunito'>404</h1>
            <p className='text-3xl'>Page not found!</p>
            <p className='text-2xl mt-5 font-Nunito'>Take me <Link to={"/"} className='underline text-gray-700'>home</Link></p>
        </div>
        <Footer />
    </>
  )
}

export default NotFound
