import React from 'react'

function Card() {
  return (
    <>
      <div className="card p-10 w-[300px] flex flex-col  justify-center ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPtpQpAmdVzhuBFadUeYe8NtSztOVBFkh_A&s"
          alt=""
        />

        <h3 className="text-xl font-semibold">Book 1</h3>
        <p className="des">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
          enim.
        </p>
        <div className="buttongrp mt-4 w-full">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Edit
          </button>
          <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
        </div>
      </div>
    </>
  )
}

export default Card