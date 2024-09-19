import { Link } from "react-router-dom";
import React from "react";

interface CardProps {
  image: string;
  name: string;
  route: string;
}

const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <div
      className="sm:w-64 lg:w-64 w-40 bg-primary text-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
    >
      {/* product image */}
      <Link to={props.route}>
        <img
          src={props.image}
          alt="Product"
          className="h-52 w-40 lg:h-72 lg:w-64 sm:h-72 sm:w-64 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 lg:w-64 sm:w-64 w-40">
          {/* product name */}
          <p className="md:text-lg text-sm font-bold  block capitalize">
            {props.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
