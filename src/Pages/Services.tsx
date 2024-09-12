import React from 'react';
import Card from '../Components/Card';
import image_1 from "../assets/image_1.png";
import image_2 from "../assets/image_1.png";
import image_3 from "../assets/image_1.png";
import image_4 from "../assets/image_1.png";

const services = [
  {
    name: "Product 01",
    info: "Brand",
    image: image_1,
  },
  {
    name: "Product 02",
    info: "Brand",
    image: image_2,
  },
  {
    name: "Product 03",
    info: "Brand",
    image: image_3,
  },
  {
    name: "Product 03",
    info: "Brand",
    image: image_4,
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-white py-4 px-4 lg:px-8">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h1 className="text-center text-5xl pb-12">Our Services</h1>
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-28 lg:gap-y-0">
          {services?.map((service, i) => (
            <Card
              key={i}
              name={service.name}
              info={service.info}
              image={service.image}
              size="large"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
