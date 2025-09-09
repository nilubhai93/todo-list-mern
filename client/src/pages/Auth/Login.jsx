import React from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <div className='form-container flex justify-center items-center min-h-screen bg-gray-200'>
      <div className='form w-[400px]  p-4 bg-gray-100 rounded-md shadow-2xl flex flex-col justify-center'>


        {/* profile icon */}
        <div className='mb-3 flex justify-center'>
          <CgProfile size={50} />
        </div>


        <div className="mb-3 flex justify-center">
          <input
            type="email"
            placeholder="Enter email"
            className="w-[80%] py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3 flex justify-center">
          <input
            type="password"
            placeholder="Enter password"
            className="w-[80%] py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-3 flex justify-center">
          <button type="submit" className='login-btn bg-blue-500 w-20 p-2 text-white rounded-xl items-center' > Log in</button>
        </div>


        <div className='form-bottom'>
          <p className='text-center'>
            not a user? please
            <Link to="/register" className='login-btn text-orange-600'> Register </Link>
          </p>
        </div>

      </div>

    </div>
  )
}

export default Login