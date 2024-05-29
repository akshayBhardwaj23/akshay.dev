import Hamburger from "hamburger-react";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavMobile from "./NavMobile";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="flex flex-wrap justify-between ">
      <img
        className="w-44 mx-4 lg:mx-28 my-2 p-2"
        alt="logo"
        src="../file.png"
      />
      <nav className="flex flex-wrap mr-10 content-center lg:hidden">
        <Hamburger toggled={isOpen} size={20} toggle={toggleNav} />
      </nav>
      {isOpen && <NavMobile toggle={toggleNav} />}
      <nav className="w-96 hidden lg:flex flex-wrap  content-center">
        <AnchorLink href="#bio">
          <ol className="text-gray-700 mx-2">Bio</ol>
        </AnchorLink>
        <AnchorLink href="#projects">
          <ol className="text-gray-700 mx-2">Projects</ol>
        </AnchorLink>
        <AnchorLink href="#contact">
          <ol className="text-gray-700 mx-2">Contact</ol>
        </AnchorLink>
      </nav>
      {/* <div className="flex flex-wrap justify-end content-center">
        <button className="m-2 p-2 bg-orange-600 rounded-md w-24 h-10">
          Email
        </button>
      </div> */}
    </header>
  );
};

export default Header;
