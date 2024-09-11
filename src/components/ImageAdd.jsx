import React from 'react'

const ImageAdd = () => {
  return (
    <div className='p-5 bg-white mx-9 rounded-2xl shadow-md'>
        <h2 className='text-2xl font-bold'>Add New Image</h2>
        <form className='grid grid-cols-1 gap-2 my-4'>
            <img src={'https://fastly.picsum.photos/id/50/200/300.jpg?hmac=wlHRGoenBSt-gzxGvJp3cBEIUD71NKbWEXmiJC2mQYE'} alt="dummy" className='w-[350px] h-[25vh] sm:h-[30vh] rounded-lg object-cover'/>
            <div className='flex flex-col'>
                <label htmlFor="image" className='font-bold'>Upload Image</label>
                <input type="file" id='image' name='image' className='rounded-lg border outline-none px-3 py-1 mt-1'/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="title" className='font-bold'>Title</label>
                <input type="text" id='title' name='title' className='rounded-lg border outline-none px-3 py-1 mt-1'
                placeholder='ex-Beautiful flower'
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="price" className='font-bold'>Price</label>
                <input type="number" id='price' name='price' className='rounded-lg border outline-none px-3 py-1 mt-1'
                placeholder='ex-$45'
                />
            </div>

            <button type='submit' className='py-1 px-3 bg-black font-semibold text-white rounded-lg mt-2'>Add Image</button>
        </form>
    </div>
  )
}

export default ImageAdd