import axios from "axios";
import ImageCard from "./ImageCard";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllPosts } from "../../store/slices/postSlice";
import { useEffect, useMemo } from "react";
import toast from "react-hot-toast";

// implement loader

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.allPosts);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const getAllImages = async () => {
    if (posts.length > 0) return; // Prevent unnecessary fetch if data already exists
    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/post/getAll"
      );
      const { data } = res.data;

      // Dispatch only if there are new posts
      if (data.length !== posts.length) {
        console.log(data);
        dispatch(setAllPosts(data));
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const purchaseImage = async (price, id, postUrl, author, title) => {
    if (!isAuthenticated) {
      toast.error("Please login to purchase item");
      navigate("/login");
    }

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/payment/generate",
        {
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const { data } = await response.data;
      console.log(data);

      //will use a  fn to handle payment verification

      handlePaymentVerify(data, id, postUrl, author, title, price);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handlePaymentVerify = async (
    data,
    id,
    postUrl,
    author,
    title,
    price
  ) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      current: data.currency,
      name: "Souvik Mitra",
      order_id: data.id,
      theme: {
        color: "#5f63b8",
      },
      handler: async (response) => {
        try {
          const res = await axios.post(
            import.meta.env.VITE_API_URL + "/payment/verify",
            {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              postId: id,
              postUrl,
              author,
              title,
              price,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
              },
              withCredentials: true
            }
          );

          const data = await res.data;
          toast.success(data.message);

        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message);
        }
      },
    };

    const razorPayWindow = new window.Razorpay(options);
    razorPayWindow.open();
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const renderedPosts = useMemo(() => {
    return posts?.map(({ _id, title, image, price, author }) => (
      <ImageCard
        key={_id}
        title={title}
        img={image}
        id={_id}
        author={author}
        price={price}
        icon1={
          <FaShoppingCart title="cart" onClick={()=>purchaseImage(price, _id,image, author, title)} className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
        icon2={
          <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
        }
      />
    ));
  }, [posts]);

  return (
    <div className="-mt-[20px] -my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>

      {/* All my photos listed in this div */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20 w-[80vw] sm:w-[900px] ">
        {/* image card */}
        {renderedPosts}
      </div>
    </div>
  );
};

export default PhotoGallery;
