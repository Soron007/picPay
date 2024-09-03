import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
    return (
        <div className="sm:w-full h-[400px] overflow-clip mx-auto flex justify-center items-center">

            <div className="w-full h-full">
                <img src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic" className="w-full h-full overflow-hidden object-fill" />
            </div>

            <form className="absolute flex justify-center items-center">
                <input type="search" id="search" name="search" className="sm:rounded-3xl py-5 px-3 w-[80vw] sm:w-[40vw] text-xl sm:text-3xl mx-auto outline-none border-b-2 bg-bgColor/[0.3] border-pink-600 focus:border-blue-700 placeholder:text-black
                focus:bg-white/[0.8]
                " placeholder="Search your image..." />
                <IoIosSearch className="text-3xl sm:text-5xl text-gray-400 -ml-[50px]" />
            </form>

        </div>
    )
}

export default HeroSection
