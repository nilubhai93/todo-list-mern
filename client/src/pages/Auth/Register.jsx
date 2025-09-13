import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { Link ,useNavigate} from 'react-router-dom'
import AuthServices from '../../Services/AuthServices';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../Utils/ErrorMessage';

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  // register function
  const registerHandlar = async (e) => {
     try {
      e.preventDefault();
      const data = { email, password, username };
      const res = await AuthServices.registerUser(data);
      toast.success(res.data.message);
      navigate("/login");
      console.log(res.data);
     
    } catch (err) {
      toast.error(getErrorMessage(err))
      console.error(err);
    }
  }


  return (
    <div className='form-container flex justify-center items-center min-h-screen bg-gray-200'>
      <div className='form w-[400px]  p-4 bg-gray-100 rounded-md shadow-2xl flex flex-col justify-center'>


        {/* profile icon */}
        <div className='mb-3 flex justify-center'>
          <CgProfile size={50} />
        </div>


        <div className="mb-3 flex justify-center">
          <input
            type="text"
            placeholder="Enter Username"
            required
            className="w-[80%] py-3 px-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3 flex justify-center">
          <input
            type="email"
            placeholder="Enter email"
            required
            className="w-[80%] py-3 px-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 flex justify-center">
          <input
            type="password"
            placeholder="Enter password"
            required
            className="w-[80%] py-3 px-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
 
        <div className="mb-3 flex justify-center">
          <button type="submit" onClick={registerHandlar} className='login-btn bg-blue-500  hover:bg-blue-400 w p-2 text-white rounded-xl items-center' > Register Now </button>
        </div>

  
        <div className='form-bottom'>
          <p className='text-center'>
            already user? please
            <Link to="/login" className='login-btn text-orange-600'> log in </Link>
          </p>
        </div>

      </div>

    </div>
  )
}

export default Register