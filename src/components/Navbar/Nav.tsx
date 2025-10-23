import React from 'react'
import { Link, useNavigate } from 'react-router'
import { isLoggedIn, logout } from '../../utils/auth'
function Nav() {
  const navigate = useNavigate();
  const handleLogout =()=>{
    logout()
    navigate('/login')
  }

  return (
    <>
    <div className='relative w-full'> 
      
        <nav className='top-10  absolute left-1/2 transform -translate-x-1/2 flex justify-around items-center  border border-gray-100 bg-gray-50 w-[50%] mx-auto rounded-2xl py-3 shadow-lg'>
          <div><Link className='hover:scale-110 active:' to='/home'>
           <img className='h-10 w-full' src="https://cdn.myportfolio.com/ee1814b84d84b63e7b863bd8e354f670/e179811f-ed62-4952-afa5-7b9afa491a94_rw_1200.png?h=c5770a9b7043ea50374c50f0cf1b0911" alt="" />
          </Link>
          </div>
            <div className='flex gap-8  justify-center align-center '>
            <Link className='hover:scale-110 active:' to="/home">Home</Link>
            
            {isLoggedIn()? 
            <>
            <Link className='hover:scale-110 active:' to="/dashboard">Dashboard</Link>
            <Link className='hover:scale-110 active:' to="/converter">Converter</Link>
            </>
            :
            <Link className='hover:scale-110 active:' to="/about">About</Link>
          }
            </div>
            <div className='flex gap-4 align-middle justify-center'>
            {isLoggedIn()?<button onClick={handleLogout}>Logout</button>: <Link className='hover:scale-110 active:' to="/login">Login</Link> }
            
                {/* <img className='h-10 rounded-full' src="/logo.png" alt="" /> */}
            </div>
        </nav>
          </div>
    </>
  )
}

export default Nav