import React from "react";

const ImageCard = React.memo(
  ({ id, img, title, price, author, icon1, icon2 }) => {
    console.log("Rendered ImageCard for:", id, author);

    return (
      <div className="rounded-lg bg-slate-800/[0.2] shadow-lg p-3">
        <div className="w-full h-[200px] overflow-hidden rounded-lg">
          <img
            src={img}
            alt="asset"
            className="w-full h-full cursor-pointer hover:scale-105 ease-linear transition-all duration-300 transform"
          />
        </div>
        <p className="font-semibold text-white bg-black w-fit py-1 px-1 rounded-full text-sm mt-3">
          {"@" + author.charAt(0).toUpperCase() + author.slice(1)}
        </p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500">Price: ${price}</p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            {icon1}
            {icon2}
          </div>
        </div>
      </div>
    );
  }
);

export default ImageCard;
