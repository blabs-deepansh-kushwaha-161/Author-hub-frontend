import React from 'react'
import Card from '../../components/Card'

function Dashboard() {
  return (
    <>
       <div className='p-20 flex flex-col justify-center w-full'>
        <h1 className='text-3xl font-bold'>MY BOOKS</h1>
        <div className='flex flex-wrap items-center mx-auto'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
       </div>
    </>
  )
}

export default Dashboard