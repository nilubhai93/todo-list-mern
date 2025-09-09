import React from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[400px] bg-white border border-gray-300 shadow-lg rounded-xl p-6">
        
        {/* Profile Icon */}
        <div className="mb-6 flex justify-center text-gray-600">
          <CgProfile size={60} />
        </div>

        {/* Email input */}
        <div className="mb-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter email"
            className="w-[80%] py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password input */}
        <div className="mb-6 flex justify-center">
          <input
            type="password"
            placeholder="Enter password"
            className="w-[80%] py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[80%] bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Log in
          </button>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-sm mt-4">
          Not a user? 
          <Link to="/register" className="text-blue-600 hover:underline ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
