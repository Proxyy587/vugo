"use client";
import React from "react";
import "./Center.css";
import Masonry from "react-masonry-css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Client, Databases, ID } from "appwrite";

const breakpointColumnsObj = {
  default: 3,
  1231: 2,
  681: 1,
};

const Center = () => {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("660f004915234447151d");

  const databases = new Databases(client);

  let articles = [
    {
      title: "Introduction to Programming",
      topic: "Programming",
      slug: "introduction-to-programming",
      content:
        "This article covers the basics of programming concepts and languages.",
      likes: 0,
    },
    {
      title: "Chess Strategies: Opening Moves",
      topic: "Chess",
      slug: "chess-strategies-opening-moves",
      content:
        "Learn about effective opening moves in chess and how to dominate the board from the start.",
      likes: 0,
    },
    {
      title: "Building a MERN Stack Project",
      topic: "Programming",
      slug: "building-a-mern-stack-project",
      content:
        "Step-by-step guide on creating a MERN (MongoDB, Express.js, React, Node.js) stack project.",
      likes: 0,
    },
    {
      title: "The Philosophy of Aristotle",
      topic: "Philosophy",
      slug: "the-philosophy-of-aristotle",
      content:
        "Explore the profound thoughts and teachings of the ancient Greek philosopher Aristotle.",
      likes: 0,
    },
  ];

  for (let i = 0; i < articles.length; ++i) {
    const article = articles[i];
    const promise = databases.createDocument(
      "660f00be04bfca0e2d1b",
      "660f00c35dbe5e31356c",
      ID.unique(),
      article
    );
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }

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
