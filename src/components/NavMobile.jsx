import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavMobile = ({ toggle }) => {
  return (
    <div className="relative w-full my-0 transition-opacity ease-in-out delay-150 duration-300 ">
      <ul
        onClick={toggle}
        className="bg-white text-center content-center h-[17vh]"
      >
        <AnchorLink href="#bio">
          <ol className="text-gray-700 mx-10 my-4 border-2 border-gray-300 rounded-xl shadow-lg">
            Bio
          </ol>
        </AnchorLink>
        <AnchorLink href="#projects">
          <ol className="text-gray-700 mx-10 my-4 border-2 border-gray-300 rounded-xl shadow-lg">
            Projects
          </ol>
        </AnchorLink>
        <AnchorLink href="#contact">
          <ol className="text-gray-700 mx-10 my-4 border-2 border-gray-300 rounded-xl shadow-lg">
            Contact
          </ol>
        </AnchorLink>
      </ul>
    </div>
    //   <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
    //     <ul className="grid gap-2">
    //       {routes.map((route) => {
    //         const { Icon } = route;

    //         return (
    //           <li
    //             key={route.title}
    //             className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
    //           >
    //             <a
    //               onClick={() => setOpen((prev) => !prev)}
    //               className={
    //                 "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
    //               }
    //               href={route.href}
    //             >
    //               <span className="flex gap-1 text-lg">{route.title}</span>
    //               <Icon className="text-xl" />
    //             </a>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
  );
};

export default NavMobile;
