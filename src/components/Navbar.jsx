import React from "react";

import Logo from './Logo';
import Menu from './Menu';

const dataList = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Menu",
    url: "/"
  },
  {
    title: "About",
    url: "/"
  },
  {
    title: "Contact",
    url: "/"
  }
];

const Navbar = ({ menu, toggleMenu }) => {
  return (
    <nav className="flex justify-between items-center shadow-sm font-mono py-8" role="navigation">
      <div>
        <Logo title="İSMAİL KIZILTAŞ" url="/" className="px-8" />
      </div>
      <div className="px-4 cursor-pointer md:hidden">
        <button type="button" onClick={() => toggleMenu(!menu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div className="pr-8 md:block hidden">
        <Menu list={dataList} />
      </div>
    </nav>
  );
};

export default Navbar;
