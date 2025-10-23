import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/login/',
      { username, password },
      { headers: { 'Content-Type': 'application/json' } }
    );

    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    setMessage('Login successful!');
    navigate('/home');
    // Optional: redirect to dashboard
    // navigate('/dashboard');
  } catch (error) {
    if (error.response) {
      setMessage(`Login failed! ${error.response.data.detail || ''}`);
    } else {
      setMessage('Login failed! Network error.');
    }
  }
};



//   const fetchUserData = async () => {
//   const token = localStorage.getItem('access_token');

//   try {
//     const response = await axios.get('http://127.0.0.1:8000/api/users/', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(response.data);
//   } catch (err) {
//     console.error(err);
//   }
// };
// const refreshToken = async () => {
//   const refresh = localStorage.getItem('refresh_token');
//   try {
//     const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
//       refresh,
//     });
//     localStorage.setItem('access_token', response.data.access);
//   } catch (err) {
//     console.error('Token refresh failed', err);
//   }
// };

  return (
    <>
    <div className=' '>
    <form method='post' onSubmit={handleSubmit}>
      <div className="flex  items-center justify-center px-6 py-0  mx-auto md:h-[80vh] lg:py-0">
        <div className="w-full bg-gray-50 rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  {/* <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div> */}
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to='/signup'
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign up
                </Link>
              </p>
      
              <p className="text-sm font-light text-red-500">{message}</p>
          </div>
        </div>
      </div>
    </form>
    </div>
    </>
  )
}

export default Login        