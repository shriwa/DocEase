import React from 'react';
import logo_1 from "../assets/logo_1.png";

const menuSections = [
  {
    title: "Our Services",
    links: [
      { name: "E-Description", url: "#" },
      { name: "Patient History", url: "#" },
      { name: "Medical Inventory", url: "#" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { name: "Github", url: "#" },
      { name: "Discord", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms & Conditions", url: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-50 sm:p-6 font-semibold text-white dark:bg-gray-800 bg-primary">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={logo_1} className="mr-3 h-24 rounded-md" alt="DocEase Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">DocEase</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Map through the menu sections and render each one */}
            {menuSections.map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{section.title}</h2>
                <ul className=" dark:text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-4">
                      <a href={link.url} className="hover:underline">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700"/>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 <a href="#" className="hover:underline">Your website</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Example social icons */}
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Social icon */}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
