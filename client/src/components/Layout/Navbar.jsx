import React from 'react'
import { FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="flex flex-1  sm:items-stretch sm:justify-start">

                <div className="flex justify-between w-full  ">
                    <div className="flex justify-between w-full space-x-4 px-1 bg-gray-200">
                        <h2>
                            <a href="#" className="rounded-md  text-3xl font-bold text-black">Welcome User</a>
                        </h2>

                        <div className='flex justify-end ml-auto'>

                            <Link to="/home" className="nav-link rounded-md px-3 py-2 text-sm font-medium text-black">Home</Link>

                            <Link to="/todolist" href="#" className="
                            nav-link rounded-md px-3 py-2 text-sm font-medium text-black"> My Todo </Link>

                            <Link href="#" className=" nav-link text-red-400 text-3xl rounded-md px-3 py-2  font-medium" title="logout"><FaPowerOff /></Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar