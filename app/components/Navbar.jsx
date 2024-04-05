"use client";
import React from "react";
import "./Navbar.css";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 250,
    });
  }, []);

  const [language, setlanguage] = useState("En");
  const [ZOpen, setZOpen] = useState(false);
  const [NavbarOpen, setNavbarOpen] = useState(0);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  function handleBody() {
    let component = document.querySelector("body");
    if (component.classList.contains("stop_overflow")) {
      component.classList.remove("stop_overflow");
    } else {
      component.classList.add("stop_overflow");
    }
  }

  return (
    <>
      <AnimatePresence>
        {NavbarOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`navbar-center ${
              NavbarOpen ? "show-center-navbar" : ""
            } origin-top`}
          >
            <a href="#" className="cool__link__center">
              Home
            </a>
            <a href="/contact" className="cool__link__center">
              Contact
            </a>
            <a href="#" className="cool__link__center">
              About us
            </a>
            <a href="#" className="cool__link__center">
              Features
            </a>
            <div className="languages-center flex gap-10">
              <a href="#" className="cool__link">
                En
              </a>
              <a href="#" className="cool__link">
                Ru
              </a>
              <a href="#" className="cool__link">
                Uk
              </a>
            </div>
            <div
              className="cross text-3xl"
              onClick={() => {
                setNavbarOpen((prevOpen) => !prevOpen);
                handleBody();
              }}
            >
              Close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <nav
        className="navbar flex px-8 py-6 my-2 mx-3 justify-between items-center"
        data-aos="fade-in"
      >
        <div className="navbar-left flex items-center gap-6 justify-between">
          <div className="combined-navbar-left flex items-center gap-5">
            <div className="logo">
              <img
                src="./icon_navbar.svg"
                width={`50px`}
                alt="logo_navbar"
                srcset=""
              />
            </div>
            <span className="typewriter">
              <Typewriter
                options={{
                  delay: 70,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Branding & Web.")
                    .callFunction(() => {})
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("I do comfortable UI for apps.")
                    .callFunction(() => {})
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("russian pigs go to your fuckin home.")
                    .callFunction(() => {})
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("logo for real business.")
                    .start();
                }}
              />
            </span>
          </div>
          <ul className="flex gap-9 items-center">
            <li>
              <a href="#" className="cool__link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="cool__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="cool__link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="cool__link">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="cool__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-right flex gap-8 items-center cursor-pointer">
          <div className="contact_navbar flex items-center gap-4">
            <h1>+38 093 528 63 59</h1>
            <img width={`40px`} src="./telegram-icon.svg" alt="" />
          </div>
          <motion.div
            className="dropdown text-center"
            onHoverStart={() => setZOpen(true)}
            onHoverEnd={() => setZOpen(false)}
          >
            <div className="up_arrow">{language} &uarr;</div>
            <div className={`languages ${ZOpen ? "show" : "hide"}`}>
              <h1
                className={`${language === "En" ? "hide" : "show"} lang`}
                onClick={() => {
                  setlanguage("En");
                }}
              >
                En
              </h1>
              <h1
                className={`${language === "Ru" ? "hide" : "show"} lang`}
                onClick={() => {
                  setlanguage("Ru");
                }}
              >
                Ru
              </h1>
              <h1
                className={`${language === "Uk" ? "hide" : "show"} lang`}
                onClick={() => {
                  setlanguage("Uk");
                }}
              >
                Uk
              </h1>
            </div>
          </motion.div>
        </div>
        <div
          className="hamburger hide cursor-pointer"
          onClick={() => {
            setNavbarOpen((prevOpen) => !prevOpen);
            handleBody();
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
