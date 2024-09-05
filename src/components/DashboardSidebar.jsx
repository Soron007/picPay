import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoLogOut, IoListSharp } from "react-icons/io5";
import { IoMdPhotos, IoIosHeart } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { SiGoogleanalytics } from 'react-icons/si';
import { AiFillHome } from "react-icons/ai";
import {setTab} from '../../store/slices/navSlice';


const DashboardSidebar = () => {

    const { pathname } = useLocation();

    const dispatch = useDispatch();

    const author = useSelector((state) => state.auth.author);

    const sidebar = useSelector((state) => state.nav.sidebar);
    const tab = useSelector((state) => state.nav.tab);

    

    return (
        <nav className={`fixed z-10 ${!sidebar == true ? "-translate-x-[500px] sm:translate-x-0" : "translate-x-0"} flex text-lg font-semibold bg-white shadow-lg flex-col w-fit min-h-screen p-3 list-none justify-between items-center`}>
            <div>
                {/* Circle with author's first letter */}
                <div className='bg-black my-5 w-fit rounded-full py-4 px-6 mx-auto text-white'>
                    {author.charAt(0).toUpperCase()}
                </div>
                {/* list items */}

                <div className='flex flex-col gap-2 '>

                    {pathname === "/seller/profile" ? (<li className='w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start'><IoMdPhotos /> Photo Manager</li>)

                        :

                        (<li className='w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start'><IoMdPhotos /> Photos Purchased</li>)}

                </div>


                <li className='w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start'><SiGoogleanalytics /> Analytics</li>

                <li className='w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start'><IoListSharp /> Orders</li>


                <li className='w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start'><IoIosHeart /> Favorites</li>

                <Link to={'/'} className='w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start'> <AiFillHome /> Home</Link>


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
