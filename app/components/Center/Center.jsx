"use client";
import React, { useEffect, useState } from "react";
import "./Center.css";
import Masonry from "react-masonry-css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Client, Databases } from "appwrite";
import Footer from "../Footer/Footer";
import Markdown from "react-markdown";

var breakpointColumnsObj = {};

const Center = () => {
  const [blogs, setBlogs] = useState([]);
  const [distinctBlogs, setDistinctBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(8);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [hideButton, setHideButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const [noblogs, setnoblogs] = useState(false);
  const [selected, setSelected] = useState([]);
  const client = new Client();

  const handleClickTopic = (index) => {
    let arr = [...selected];
    for (let i = 0; i < arr.length; ++i) arr[i] = "";
    arr[index] = "sel";
    setSelected(arr);
  };

  useEffect(() => {
    const fetchData = async () => {
      client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject(process.env.NEXT_PUBLIC_CLOUD_ID);

      try {
        const databases = new Databases(client);
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_COLLECTION_ID,
          []
        );

        setBlogs(response.documents);
        if (response.documents.length === 0) {
          setnoblogs(true);
        }
        if (response.documents.length === 1) {
          breakpointColumnsObj = 1;
        } else if (response.documents.length === 2) {
          let newBreakpoint = {
            default: 2,
            681: 1,
          };
          breakpointColumnsObj = newBreakpoint;
        } else {
          let newBreakpoint = {
            default: 3,
            1000: 2,
            602: 1,
          };
          breakpointColumnsObj = newBreakpoint;
        }

        const allTopics = Array.from(
          new Set(response.documents.map((blog) => blog.topic))
        );
        setDistinctBlogs(allTopics);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    console.log(noblogs);

    fetchData();

    AOS.init({
      duration: 250,
    });
  }, []);

  function truncate(text) {
    let purified = text.slice(0, 100);
    purified += text.length <= 100 ? "" : "....";
    return purified;
  }

  const handleShowMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 8);
    if (visibleBlogs > blogs.length) {
      setHideButton(true);
    }
  };

  const handleTopicClick = (topic, index) => {
    handleClickTopic(index);
    setSelectedTopic(topic);
    const filtered = blogs.filter((blog) => blog.topic === topic);
    setFilteredBlogs(filtered);
    setVisibleBlogs(8);
  };

  return (
    <>
      <div className="center flex flex-col" data-aos="fade-in">
        <div className="topics flex gap-6 cursor-pointer items-center">
          <h1 className="text-white font-bold">
            <span className="underlined">All</span> publications
          </h1>
          {distinctBlogs.map((blogTopic, index) => (
            <div
              key={index}
              className={`topic ${
                selected[index] === "sel" ? "selected no-border" : "border_"
              } ${selectedTopic === blogTopic ? "active" : ""}`}
              onClick={() => handleTopicClick(blogTopic, index)}
            >
              {blogTopic}
            </div>
          ))}
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {(selectedTopic ? filteredBlogs : blogs)
            .slice(0, visibleBlogs)
            .map((blog, index) => (
              <a
                key={index}
                href={`/${blog.slug}`}
                className="blog flex flex-col gap-2 cursor-pointer"
              >
                <div className="blog-topic">{blog.topic}</div>
                <div className="blog-title">{blog.title}</div>
                <div className="blog-content">
                  <Markdown>{truncate(blog.content)}</Markdown>
                </div>
              </a>
            ))}
        </Masonry>
        {!loading &&
          visibleBlogs <
            (selectedTopic ? filteredBlogs.length : blogs.length) && (
            <div className="show-more cursor-pointer" data-aos="zoom-out">
              <button onClick={handleShowMore}>Show More</button>
            </div>
          )}
      </div>
      {!loading && <Footer loaded={true} fixed={setnoblogs} />}
    </>
  );
};

export default Center;
