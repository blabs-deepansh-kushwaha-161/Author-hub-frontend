import React from 'react'
import { Link } from 'react-router'
function Nav() {
  return (
    <>
        <nav className='sticky top-10 flex justify-around items-center  border border-gray-100 bg-gray-50 w-[50%] mx-auto rounded-2xl py-3 shadow-lg'>
          <div>
           <img className='h-10 w-full' src="https://cdn.myportfolio.com/ee1814b84d84b63e7b863bd8e354f670/e179811f-ed62-4952-afa5-7b9afa491a94_rw_1200.png?h=c5770a9b7043ea50374c50f0cf1b0911" alt="" />
          </div>
            <div className='flex gap-8  justify-center align-center '>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/converter">Converter</Link>
            </div>
            <div className='flex gap-4 align-middle justify-center'>
            <Link to="/login">Login</Link>
                {/* <img className='h-10 rounded-full' src="/logo.png" alt="" /> */}
            </div>
        </nav>
    </>
  )
}

export default Nav