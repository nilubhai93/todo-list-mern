import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="flex flex-1  sm:items-stretch sm:justify-start">

                <div className="flex justify-between w-full sm:ml-6 ">
                    <div className="flex justify-between w-full space-x-4">
                        <h2>
                            <a href="#" className="rounded-md  text-3xl font-bold text-black">Welcome User</a>
                        </h2>

                        <div className='flex justify-end ml-auto'>
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black">Team</a>
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black">Projects</a>
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-black">Calendar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar