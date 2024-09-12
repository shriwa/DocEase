import { Link } from "react-router-dom";
import React from "react";

// Defined valid sizes as a union type
type Size = "small" | "medium" | "large";

interface CardProps {
  size?: Size;
  image: string;
  info: string;
  name: string;
}


const Card: React.FC<CardProps> = ({ size = "large", ...props }) => {
  const sizeClasses = {
    small: {
      container: "sm:w-32 lg:w-32 w-20",
      image: "h-32 w-20 lg:h-32 lg:w-32 sm:h-32 sm:w-32",
      details: "px-4 py-3 lg:w-64 sm:w-64 w-40",
      brand: "text-gray-400 mr-3 uppercase text-xs",
      name: "text-lg font-bold text-black truncate block capitalize",
      new_price: "text-lg font-semibold text-black cursor-auto my-0",
      old_price: "text-sm text-gray-600  cursor-auto ml-2",
    },
    medium: {
      container: "sm:w-48 lg:w-52 w-36",
      image: "h-48 w-32 lg:h-48 lg:w-48 sm:h-48 sm:w-48",
      details: "px-4 py-3 lg:w-52 sm:w-64 w-40",
      brand: "text-gray-400 mr-3 uppercase text-xs",
      name: "text-md font-bold text-black truncate block capitalize",
      new_price: "text-md font-semibold text-black cursor-auto my-0",
      old_price: "text-sm text-gray-600  cursor-auto ml-2",
    },
    large: {
      container: "sm:w-64 lg:w-64 w-40",
      image: "h-58 w-44 lg:h-72 lg:w-64 sm:h-72 sm:w-64",
      details: "px-4 py-3 lg:w-64 sm:w-64 w-40 ",
      brand: "text-gray-400 mr-3 uppercase text-xs",
      name: "text-lg font-bold text-black truncate block capitalize",
      new_price: "text-lg font-semibold text-black cursor-auto my-0",
      old_price: "text-sm text-gray-600  cursor-auto ml-2",
    },
  };

  return (
    <div
      className={`${sizeClasses[size].container} bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl`}
    >
      {/* product image */}

      <Link to={`/services/`}>
        <img
          src={props.image}
          alt="Product"
          className={`${sizeClasses[size]} object-cover rounded-t-xl`}
        />
        <div className={`${sizeClasses[size].details}`}>
        
          <span className={`${sizeClasses[size].brand}`}>{props.info}</span>

          {/* product name */}
          <p className={`${sizeClasses[size].name}`}>{props.name}</p>

          
        </div>
      </Link>
    </div>
  );
};

export default Card;
