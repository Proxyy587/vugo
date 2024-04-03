import React from "react";
import Navbar from "./components/Navbar";
import Center from "./components/Center/Center";
import Footer from "./components/Footer/Footer";
import NavbarCenter from "./components/NavbarCenter/NavbarCenter";

const page = () => {
  return (
    <>
      <Navbar></Navbar>
      <Center></Center>
      <Footer></Footer>
    </>
  );
};

export default page;
