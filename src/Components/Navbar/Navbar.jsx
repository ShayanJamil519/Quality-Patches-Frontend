import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { BiMessageRoundedDots, BiChevronDown } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { TbBrandInstagram } from "react-icons/tb";
import { navLinks } from "./navLinksArray";
import { Link } from "react-router-dom";
import NavbarMenuMobile from "./NavbarMenuMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(-1); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex(index); // Open the clicked dropdown
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar Top Section */}
      <div className="flex justify-between items-center bg-black text-white py-4 md:py-4 px-3 md:px-5">
        {/* Left Section */}
        <div className="flex gap-2 md:gap-5">
          <TbBrandInstagram className="bg-white text-black cursor-pointer   w-4 h-4 p-[2px] rounded-full" />
          <FaFacebookF className="bg-white text-black cursor-pointer w-4 h-4 p-[2px] rounded-full" />
          <FaPinterestP className="bg-white text-black cursor-pointer  w-4 h-4 p-[2px] rounded-full" />
          <FaLinkedinIn className="bg-white text-black cursor-pointer w-4 h-4 p-[2px] rounded-full" />
        </div>
        {/* Right Section */}
        <div className="flex gap-7">
          <div className="flex gap-2 items-center cursor-pointer">
            <BsTelephoneFill className="text-white" />
            <p className="text-sm hidden md:block">(310) 896-8564</p>
          </div>

          <div className="flex gap-2 items-center  cursor-pointer">
            <GrMail />
            <p className="text-sm hidden md:block">sales@qualitypatches.com</p>
          </div>
        </div>
      </div>
      {/* Navbar Bottom Section */}
      <div className="flex justify-between items-center py-2 md:py-5 px-4 md:px-5">
        {/* Logo */}
        <div>
          <img
            src="/assets/Navbar/navbar__logo.png"
            alt="Logo"
            className="w-28 h-12 md:w-32 md:h-12 md:h-unset object-contain md:object-unset"
          />
        </div>

        <div className="block md:hidden">
          {isOpen ? (
            <AiOutlineClose
              onClick={handleClick}
              className="text-2xl text-[#750202]"
            />
          ) : (
            <AiOutlineMenu
              onClick={handleClick}
              className="text-2xl text-[#750202]"
            />
          )}
        </div>
        {/* Links */}
        <div className="hidden md:flex md:row justify-center items-center gap-3   ">
          {navLinks.map((link, index) => (
            <div key={index}>
              {index > 0 && index <= 3 ? (
                <div>
                  <Link
                    to={link.route}
                    className="font-bold flex justify-center items-center gap-1  text-sm cursor-pointer py-3 px-2 hover:bg-[#750202] hover:text-white"
                    onMouseEnter={() => toggleDropdown(index)}
                  >
                    {" "}
                    {link.name}{" "}
                    <BiChevronDown className="text-xl  cursor-pointer" />
                  </Link>

                  {openDropdownIndex === index &&
                    (link.dropdownLinks && link.dropdownLinks ? (
                      <div className="relative">
                        <ul
                          onMouseLeave={() => toggleDropdown(index)}
                          onClick={handleClick}
                          className={`absolute flex flex-col justify-center items-center top-0 left-0 min-w-[300px] overflow-y-auto max-h-[82vh] hide-scrollbar `}
                        >
                          {link.dropdownLinks.map((dropdownLink, subIndex) => (
                            <Link
                              key={subIndex}
                              to={dropdownLink.route}
                              className="bg-[#cccccc] w-full font-bold text-black text-sm py-3 px-5 hover:bg-[#750202] hover:text-white"
                              onClick={handleClick}
                            >
                              {" "}
                              {dropdownLink.name}{" "}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    ) : null)}
                </div>
              ) : (
                <Link
                  to={link.route}
                  className="font-bold text-sm cursor-pointer py-3 px-3 hover:bg-[#750202] hover:text-white"
                  onClick={handleClick}
                >
                  {" "}
                  {link.name}{" "}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Chat */}
        <div>
          <button className="bg-[#750202] text-white flex items-center gap-2 font-bold text-xs md:text-sm py-2 md:py-3 px-2 pr-4 md:px-5 outline-none border-none">
            {" "}
            <BiMessageRoundedDots className="text-xl" /> Chat With Us
          </button>
        </div>
      </div>
      {/* Navbar Mobile Menu */}
      {isOpen && <NavbarMenuMobile handleClick={handleClick} />}
    </div>
  );
};

export default Navbar;
