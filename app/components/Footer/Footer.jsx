"use client";
import React from "react";
import { useState } from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = ({ loaded, fixed }) => {
  const [ZOpen, setZOpen] = useState(false);

  return (
    <>
      {loaded && (
        <motion.div
          onHoverStart={() => setZOpen(true)}
          onHoverEnd={() => setZOpen(false)}
          className={`${
            fixed === true ? "fixed_footer" : "footer"
          }  text-white flex justify-between px-8 py-6 `}
        >
          <div className="left">
            <h1>
              2024. Orlova Design Bureau -{" "}
              <a href="#" className="cool__link text-white">
                Lorem, ipsum.
              </a>
            </h1>
          </div>
          <div
            className={`middle text-3xl ${ZOpen ? "bounce" : ""}`}
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Submit request.
          </div>
          <div className="right flex gap-10">
            <a href="#" className="cool__link">
              Blog
            </a>
            <a href="#" className="cool__link">
              Fb
            </a>
            <a href="#" className="cool__link">
              Insta
            </a>
            <a href="#" className="cool__link">
              Twitter
            </a>
            <a href="#" className="cool__link">
              Bh
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Footer;
