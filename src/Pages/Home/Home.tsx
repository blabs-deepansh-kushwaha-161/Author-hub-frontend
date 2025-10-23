import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Button from '../../components/Button'
import { isLoggedIn } from "../../utils/auth";
import axios from 'axios';
import Api from '../../utils/Api';

function Home() {
  const [username, seTusername] = useState()
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login"); // redirect if not logged in
    } else {
      setLoggedIn(true);
    }
  }, [navigate]);

  if (!loggedIn) return null; // prevent flashing before redirect



const fetchUserData = async () => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await Api.get("http://127.0.0.1:8000/api/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    seTusername(response.data.username)
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

fetchUserData();
  return (
    <div className='bg-[url(/src/assets/standing-book-corner.jpg)] bg-bottom-left bg-cover h-[100vh] bg-no-repeat '>
      {/* <div className='relative backdrop-blur-sm blur-sm  z-[-1]' > 
        <img className='h-[100vh] absolute top-0 left-0 z-[-1] w-full object-fill' src="/src/assets/standing-book-corner.jpg" alt="" />
      </div> */}
      <div className='flex flex-col justify-center items-center gap-8 pt-[15vw] '>
        {username &&
        <h1 className='text-3xl font-medium text-gray-700'> Welcome Back {username} <span className='text-amber-200'>👋</span></h1>}
      <h1 className='text-8xl font-bold  text-shadow-outline text-shadow-amber-200 text-shadow-2xs'>Craft Your Story, Your Way</h1>
      <p className=' text-2xl text-gray-700 bg-blue-100'> All in one writing platform designed to help authoring bring their story to lilfe. from outlining to publishing</p>
      <Link to="/editor">
        <Button  name="Create new book"/>
      </Link>
      </div>
    </div>
  )
}

export default Home     