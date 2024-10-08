import React from 'react';
import Card from '../Components/Card';

const services = [
  {
    name: "Write Prescriptions",
    image: "https://etimg.etb2bimg.com/thumb/msid-88492264,imgsize-13926,width-1200,height=765,overlay-ethealth/diagnostics/five-reasons-why-e-rx-electronic-prescription-are-better-than-paper-rx.jpg",
    route: "/prescription"
  },
  {
    name: "Patient History",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGEtrgpFAC5gBiMH4fwUTlOvYGj7HR_nF2g&s",
    route: "/patient-history"
  },
  {
    name: "Medical Inventory",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBATEREREBQREREUERgQExQXERgTERMQFxMZGBcUGBUaICwlGh01IRoVJDckKC0vPzIzGyI4PTgyPCwxPy8BCwsLDw4PHRERHTQoIyIxMTIxMTExMTIxMTExOjEvMTExMTExMTExMTExMTExMTExMS8xMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xABQEAABAwIBBQcNCwwCAwEAAAABAAIDBBESBQYHITETFjVBUXGTFCJSVGFzdJGSsrPR0hUXMjM0U3KBsbTCIzZCRGN1lKHBw9PiJUNko+EI/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIEAQMFBgf/xAA4EQACAQIBCAcGBQUAAAAAAAAAAQIDEQQFEhMhMUFRYRUyUlORoeEWNHGBsdEUosHS8SIjVHKS/9oADAMBAAIRAxEAPwC5kREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBEWvyllWnpw11Q/cw44WnC51yBe3WgoSjGU3mxV29yNgi0G/DJ3z46OT2Vxvwyb2w3o5PZUc+PE3fg8T3cv+X9iQIo/vwyb2w3o5PZTfhk3thvRyeymfHiPweI7uXgyQIo/vwyb2w3o5PZXbSZy0MsjYopQ+RxIa3A8XIBO0i3EUzo8TEsLXirunKy5M3aIikaAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCgulD4mn767zFOlBtKHxNP313oytdXqM6GSvfKfx/RkJoMiyzQT1DMAZA0ufckOIDL9aLa9SS5FlbStrC6Pc3SbmNZxXuRci1v0TxrXMkcBYOcOUAkA8440MjrYcTsO3Dc4b8yqq3A9io1c6+crXva27er8b79xscsZFlpRC6QsO7NMjbEmwGEm9wLbQtYvp8jjbEXOtsvc25r7F8rHwJ01NRSm7vjs8gt5mXwhT/AEj5rlo1vMy+EKf6R8xyzDrI1Yz3ep/rL6MuZERXjwAREQBERAEREAREQBERAEREARcFcBAfSLhEByi4RAcouEQHKhmk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",
    route: "/medical-inventory"
  },
];

const Services: React.FC = () => {
  return (
    <section className=" bg-white py-4 px-3 lg:px-3">
      <div className="container mx-auto px-auto md:px-24 xl:px-12 max-w-[1300px]">
        <h1 className="text-center text-5xl pb-12">Our Services</h1>
 
        <div className="card grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-24 lg:gap-y-0">
          {services?.map((service, i) => (
              <Card
              key={i}
                name={service.name}
                image={service.image}
                route={service.route}
              />
      
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default Services;
