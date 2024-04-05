"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SlugPage from "./components/SlugPage";
import Footer from "../components/Footer/Footer";

const Page = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <SlugPage />x{showFooter && <Footer loaded={true} />}
    </>
  );
};

export default Page;
