import React from 'react';
import { useSelector } from 'react-redux';
import { IoLogOut } from "react-icons/io5";

const DashboardSidebar = () => {

    const author = useSelector((state) => state.auth.author);


    return (
        <nav className='flex text-lg font-semibold bg-white shadow-lg flex-col w-fit min-h-screen p-3 list-none justify-between items-center'>
            <div>
                {/* Circle with author's first letter */}
                <div className='bg-black my-5 w-fit rounded-full py-4 px-6 text-white'>
                    {author.charAt(0).toUpperCase()}
                </div>
                {/* list items */}

                <div>

                </div>
            </div>
            {/* logout Button */}
            <li className='w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start'>
                <IoLogOut />
                Logout
            </li>
        </nav>
    )
}

export default DashboardSidebar
