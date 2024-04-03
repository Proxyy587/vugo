"use client";
import React from "react";
import "./Form.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    AOS.init({
      duration: 250,
    });
  }, []);

  return (
    <>
      <div className="form-container flex flex-col" data-aos="fade-in">
        <div className="introduction">
          <h1>
            We're creating tools that will move forward your business. Working
            through each idea we expand the business values and philosophy,
            finding important solutions, which cause it to grow.
          </h1>
        </div>
        <form action="#">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="off"
          />
          <input
            type="text"
            name="phoneno"
            placeholder="Your phone number"
            autoComplete="off"
          />
          <input
            type="text"
            name="project"
            placeholder="What kind of project?"
            autoComplete="off"
          />
          <input
            type="text"
            name="email"
            placeholder="Your email"
            autoComplete="off"
          />
        </form>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="5"
          placeholder="Your comment or description"
          autoComplete="false"
        ></textarea>
        <button className="submit">Submit</button>
      </div>
    </>
  );
};

export default Form;
