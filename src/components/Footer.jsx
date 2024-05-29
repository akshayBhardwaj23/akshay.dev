import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    const d = new Date();
    setDate(d.getFullYear());
  }, []);

  return (
    <footer>
      <hr className="w-[75%] h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300" />
      <section className="mb-10 sm:text-center lg:text-nowrap block lg:flex flex-wrap justify-evenly">
        <nav className="sm:w-[90%] sm:mx-auto lg:mx-0 md:w-96 flex flex-wrap justify-evenly content-center mb-8">
          <AnchorLink href="#bio">
            <ol>Bio</ol>
          </AnchorLink>
          <AnchorLink href="#projects">
            <ol>Projects</ol>
          </AnchorLink>
          <AnchorLink href="#contact">
            <ol>Contact</ol>
          </AnchorLink>
        </nav>
        <p className="text-center">© {date} akshay.dev. All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
