import React, { useState } from "react";
import { navLinks } from "./navLinksArray";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

const NavbarMenuMobile = ({ handleClick }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

  const toggleDropdownMobile = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(-1); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex(index); // Open the clicked dropdown
    }
  };

  return (
    <div className="flex md:hidden pt-5 flex-col flex-1 justify-center items-center gap-3">
      {navLinks.map((link, index) => (
        <div key={index}>
          {index > 0 && index <= 3 ? (
            <div>
              <div className="flex justify-center items-center gap-1">
                <Link
                  to={link.route}
                  className="font-bold  text-sm cursor-pointer py-3 px-2"
                  onClick={handleClick}
                >
                  {" "}
                  {link.name}{" "}
                </Link>
                <BiChevronDown
                  className="text-xl "
                  onClick={() => toggleDropdownMobile(index)}
                />
              </div>

              {openDropdownIndex === index &&
                (link.dropdownLinks && link.dropdownLinks ? (
                  <div className="relative">
                    <ul className={`flex flex-col text-center`}>
                      {link.dropdownLinks.map((dropdownLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={dropdownLink.route}
                          className="font-bold text-black text-sm py-3 px-5 "
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
              className="font-bold text-sm cursor-pointer py-3 px-3 "
              onClick={handleClick}
            >
              {" "}
              {link.name}{" "}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarMenuMobile;
