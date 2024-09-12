import React, { useState } from 'react'
import toast from 'react-hot-toast';
const ImageAdd = () => {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        setImage(file);

    }

    const addPost = async(e) => {
        e.preventDefault();

        try {
            const title = e.target.title.value;
            const price = e.target.price.value;

            if(!title || !price){
                return toast.error(error.response.data.message);
            }

            if(title.trim == "" || price.trim == ""){
                return toast.error("Please fill all the fields");
            }
        } catch (error) {
            return toast.error(error.response.data.message);
        }
    }


  return (
    <div className='p-5 bg-white mx-9 rounded-2xl shadow-md'>
        <h2 className='text-2xl font-bold'>Add New Image</h2>
        <form className='grid grid-cols-1 gap-2 my-4' onSubmit={addPost}>
            <img src={`${image? URL.createObjectURL(image): "https://tse4.mm.bing.net/th?id=OIP.RpGnDfUGMlzdJNd_WABZRAHaEe&pid=Api&P=0&h=180"}`} alt="dummy" className='w-[350px] h-[25vh] sm:h-[30vh] rounded-lg object-cover'/>
            <div className='flex flex-col'>
                <label htmlFor="image" className='font-bold'>Upload Image</label>
                <input onChange={handleImageChange} type="file" id='image' name='image' className='rounded-lg border outline-none px-3 py-1 mt-1'/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="title" className='font-bold'>Title</label>
                <input type="text" required id='title' name='title' className='rounded-lg border outline-none px-3 py-1 mt-1'
                placeholder='ex-Beautiful flower'
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="price" className='font-bold'>Price</label>
                <input type="number" required id='price' name='price' className='rounded-lg border outline-none px-3 py-1 mt-1'
                placeholder='ex-$45'
                />
            </div>

            <button type='submit' className='py-1 px-3 bg-black font-semibold text-white rounded-lg mt-2'>Add Image</button>
        </form>
    </div>
  )
}

export default ImageAdd