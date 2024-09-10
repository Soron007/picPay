import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoLogOut, IoListSharp } from "react-icons/io5";
import { IoMdPhotos, IoIosHeart } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SiGoogleanalytics } from 'react-icons/si';
import { AiFillHome } from "react-icons/ai";
import { setTab } from '../../store/slices/navSlice';
import { logout } from '../../store/slices/authSlice'

const DashboardSidebar = () => {

    const { pathname } = useLocation();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const author = useSelector((state) => state.auth.author);

    const sidebar = useSelector((state) => state.nav.sidebar);
    const tab = useSelector((state) => state.nav.tab);



    return (
        <nav className={`fixed z-10 ${!sidebar ? "-translate-x-[500px] sm:translate-x-0" : "translate-x-0"} flex sm:static text-lg font-semibold bg-white shadow-lg flex-col w-fit min-h-screen p-3 list-none justify-between items-center ease-in-out duration-300`}>
            <div>
                {/* Circle with author's first letter */}
                <div className='bg-black my-5 w-fit rounded-full py-4 px-6 mx-auto text-white'>
                    {author.charAt(0).toUpperCase()}
                </div>
                {/* list items */}

                <div className='flex flex-col gap-2 '>

                    {pathname === "/seller/profile" ? (<li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start ${tab === 'photos-management' && 'bg-black text-white'}`}
                        onClick={() => dispatch(setTab('photos-management'))}><IoMdPhotos /> Photo Manager
                    </li>)

                        :

                        (<li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start ${tab === 'photos-purchased' && 'bg-black text-white'}`}
                            onClick={() => dispatch(setTab('photos-purchased'))}   ><IoMdPhotos /> Photos Purchased</li>)}

                </div>


                <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start ${tab === 'photo-analytics' && 'bg-black text-white'}`}
                    onClick={() => dispatch(setTab('photo-analytics'))}
                ><SiGoogleanalytics /> Analytics</li>

                <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start ${tab === 'orders' && 'bg-black text-white'}`}
                    onClick={() => dispatch(setTab('orders'))}><IoListSharp /> Orders</li>


                <li className={`w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start ${tab === 'favorites' && 'bg-black text-white'}`}
                    onClick={() => dispatch(setTab('favorites'))}><IoIosHeart /> Favorites</li>

                <Link to={'/'} className='w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start'> <AiFillHome /> Home</Link>


            </div>
            {/* logout Button */}
            <li className='w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear cursor-pointer duration-300 hover:scale-105 flex items-center sm:text-[15px] text-lg gap-2 justify-start' onClick={() => {
                dispatch(logout())
                navigate("/");
            }}>
                <IoLogOut />
                Logout
            </li>
        </nav>
    )
}

export default DashboardSidebar
