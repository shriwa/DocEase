import React, { useState } from "react";
import logo from "../../assets/logo.png"
import logo_1 from "../../assets/logo_1.png"

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const menus = [
    {name: "Home", link:"/"},
    {name: "Blog", link:"/blog"},
    {name: "About", link:"/about"},
    {name: "Contact", link:"/contact"},
  ]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="">
      <div className="min-h-screen fixed w-full">
        <div className="antialiased bg-gray-100 dark:bg-gray-800">
          <div className="w-full h-[7rem] text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800 ">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <a
                  href="#">
                    <img src={logo_1} alt="" className=" w-20 h-20 rounded-md"/>
                </a>
                <button
                  className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                  onClick={toggleMenu}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    {menuOpen ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      />
                    )}
                  </svg>
                </button>
              </div>
              <nav
                className={`${
                  menuOpen ? "flex" : "hidden"
                } bg-gray-800 flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
              >
                {menus.map((menu, i) => (
                  <a
                    key={i}
                    className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href={menu.link}
                  >
                    {menu.name}
                  </a>
                ))}
    
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex flex-row items-center px-4 py-2 mt-2 text-sm font-semibold text-left bg-gray-200 dark:bg-transparent rounded-lg dark:text-gray-200 dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  >
                    <span>More</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className={`inline w-4 h-4 mt-1 ml-1 transform transition-transform ${
                        dropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 w-full mt-2 origin-top-right md:max-w-screen-sm md:w-screen">
                      <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark:bg-gray-700">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <a
                            className="flex items-start p-2 bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:text-gray-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#"
                          >
                            <div className="p-3 text-white bg-teal-500 rounded-lg">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="h-4 w-4 md:h-6 md:w-6"
                              >
                                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="font-semibold">Appearance</p>
                              <p className="text-sm">Easy customization</p>
                            </div>
                          </a>
                          {/* Additional dropdown items */}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
