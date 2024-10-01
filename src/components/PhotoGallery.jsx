import axios from "axios";
import ImageCard from "./ImageCard";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllPosts } from "../../store/slices/postSlice";
import { useEffect } from "react";

// implement loader

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.allPosts);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const getAllImages = async () => {
    if (posts.length > 0) return;
    const res = await axios.get(import.meta.env.VITE_API_URL + "/post/getAll");

    const { data } = await res.data;
    console.log(data);
    dispatch(setAllPosts(data));
  };

  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <div className="-mt-[20px] -my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>

      {/* All my photos listed in this div */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
        {/* image card */}
        {posts?.map(({ _id, title, image, price, author }) => {
          return (
            <ImageCard
              key={_id}
              title={title}
              img={image}
              id={_id}
              author={author}
              price={price}
              icon1={
                <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
              }
              icon2={
                <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
