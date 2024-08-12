"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaMagento } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

export const Navlinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Projects",
    link: "/project",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <header>
      {/* desktop navigation section  */}
      <nav className=" container flex items-center justify-between py-4">
        {/* nav logo */}
        <div>
          <Link href="/">
            <div className=" flex items-center gap-2">
              <FaMagento size={29} />
              <span className=" text-2xl font-bold">WEBWISE</span>
            </div>
          </Link>
        </div>

        {/* nav elements */}
        <div className=" hidden md:flex">
          <ul className=" flex items-center gap-10">
            {Navlinks.map(({ id, title, link }) => {
              return (
                <li
                  className=" text-lg font-medium hover:border-2 border-black px-3 rounded-full transition-all"
                  key={id}
                >
                  <Link href={link}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* nav button  */}
        <button className="hidden lg:flex bg-black text-white px-4 py-2 rounded-md hover:bg-primary hover:text-black transition-colors duration-300 ease-in-out">
          Contact Us
        </button>

        {/* menu button  */}
        <div className=" md:hidden flex items-center">
          {menu ? (
            <MdCancel size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldLine size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* responsive navigation section  */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-black text-white z-10 left-0 top-14 list-none font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        {Navlinks.map(({ id, title, link }) => {
          return (
            <li
              className=" text-lg font-medium hover:border-2 border-black px-3 rounded-full transition-all"
              key={id}
              onClick={closeMenu}
            >
              <Link href={link}>{title}</Link>
            </li>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
