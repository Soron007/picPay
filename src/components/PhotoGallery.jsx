
import ImageCard from "./ImageCard";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const PhotoGallery = () => {
    return (
        <div className="my-20 bg-white flex flex-col justify-center items-center">
            <h3 className="text-3xl font-semibold my-14">Photos</h3>

            {/* All my photos listed in this div */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
                {/* image card */}
                <ImageCard 
                
                    title={"The Great!"}
                    
                    img={"https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    
                    id={1}
                    
                    author={'ro0000n7'}
                    
                    price={10}
                    
                    
                    icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}



                    icon2={<IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />}
                />


            </div>

        </div>
    )
}

export default PhotoGallery
