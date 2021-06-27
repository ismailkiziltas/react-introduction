import React from "react";

const Dropdown = ({ menu, toggleMenu }) => {
  return (
    <div
      className={
        menu
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      } onClick={() => toggleMenu(!menu)}
    >
      <a href="/" className="p-4">
        Home
      </a>
      <a href="/" className="p-4">
        Menu
      </a>
      <a href="/" className="p-4">
        About
      </a>
      <a href="/" className="p-4">
        Contact
      </a>
    </div>
  );
};

export default Dropdown;
