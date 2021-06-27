import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [menu, toggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.matchMedia("(min-width: 1024px)").matches) {
        toggleMenu(false);
      }
    });
  }, []);


  return (
    <>
      <Navbar menu={menu} toggleMenu={toggleMenu}></Navbar>
      <Dropdown menu={menu} toggleMenu={toggleMenu}></Dropdown>
      <Hero></Hero>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
