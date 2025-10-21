import React from 'react'
import { Link } from 'react-router'
import Button from '../../components/Button'

function Home() {
  return (
    <div>
      <div className='relative backdrop-blur-sm blur-sm  z-[-1]' > 
        <img className='h-[90vh] absolute top-0 left-0 z-[-1] w-full object-contain' src="/src/assets/7408.jpg" alt="" />
      </div>
      <div className='flex flex-col justify-center items-center gap-8 pt-[15vw] z-10'>
      <h1 className='text-8xl font-bold  text-shadow-outline text-shadow-amber-200 text-shadow-2xs'>Craft Your Story, Your Way</h1>
      <p className='text-2xl text-gray-700'> All in one writing platform designed to help authoring bring their story to lilfe. from outlining to publishing</p>
      <Link to="/editor">
        <Button  name="Create new book"/>
      </Link>
      </div>
    </div>
  )
}

export default Home     