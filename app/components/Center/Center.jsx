"use client";
import React from "react";
import "./Center.css";
import Masonry from "react-masonry-css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const breakpointColumnsObj = {
  default: 3,
  1231: 2,
  681: 1,
};

const Center = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    AOS.init({
      duration: 250,
    });
  }, []);

  return (
    <>
      <div className="center flex flex-col" data-aos="fade-in">
        <div className="topics flex gap-6 cursor-pointer items-center">
          <h1 className="text-white font-bold">
            <span className="underlined">All</span> publications
          </h1>
          <div className="topic">digital</div>
          <div className="topic">News</div>
          <div className="topic">Our history</div>
          <div className="topic">And</div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div className="blog flex flex-col gap-2 cursor-pointer">
            <div className="blog-topic">digital</div>
            <div className="blog-title">
              Packaging design trends that are popular in 2023, 17 examples of
              cool packaging
            </div>
            <div className="blog-content">
              One of the main trends of the coming era is the desire for
              simplicity and minimalism. Manufacturers have moved to creating
              packaging without unnecessary parts to save on coloring costs.
              This decision is made taking into account..
            </div>
          </div>

          <div className="blog flex flex-col gap-2 cursor-pointer">
            <div className="blog-topic">StandWithUkraine</div>
            <div className="blog-title">
              Рожеві єдінорожки та райдужки? Hi. Трішки про ситуацію
            </div>
            <div className="blog-content">
              Війна - важкий та переломний час для кожного з нас. 24 лютого
              змінило кожного з нас. Наше життя розділилося на «до» та «після».
            </div>
          </div>

          <div className="blog flex flex-col gap-2 cursor-pointer">
            <div className="blog-topic">digital</div>
            <div className="blog-title">
              Packaging design trends that are popular in 2023, 17 examples of
              cool packaging
            </div>
            <div className="blog-content">
              One of the main trends of the coming era is the desire for
              simplicity and minimalism. Manufacturers have moved to creating
              packaging without unnecessary parts to save on coloring costs.
              This decision is made taking into account..
            </div>
          </div>
          <div className="blog flex flex-col gap-2 cursor-pointer">
            <div className="blog-topic">digital</div>
            <div className="blog-title">
              Packaging design trends that are popular in 2023, 17 examples of
              cool packaging
            </div>
            <div className="blog-content">
              One of the main trends of the coming era is the desire for
              simplicity and minimalism. Manufacturers have moved to creating
              packaging without unnecessary parts to save on coloring costs.
              This decision is made taking into account..
            </div>
          </div>
          <div className="blog flex flex-col gap-2 cursor-pointer">
            <div className="blog-topic">StandWithUkraine</div>
            <div className="blog-title">
              Рожеві єдінорожки та райдужки? Hi. Трішки про ситуацію
            </div>
            <div className="blog-content">
              Війна - важкий та переломний час для кожного з нас. 24 лютого
              змінило кожного з нас. Наше життя розділилося на «до» та «після».
              Календарні дні, як такі, перестали існувати - …
            </div>
          </div>
        </Masonry>
      </div>

      <div className="show-more cursor-pointer" data-aos="zoom-out">
        <button>Show More</button>
      </div>
    </>
  );
};

export default Center;
