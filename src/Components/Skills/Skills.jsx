import React, { useState } from "react";
import { motion } from "framer-motion";

import c from "../../assets/Icons/Technologies/c.png";
import bootstrap from "../../assets/Icons/Technologies/bootstrap.png";
import cpp from "../../assets/Icons/Technologies/cpp.png";
import css from "../../assets/Icons/Technologies/css.png";
import django from "../../assets/Icons/Technologies/django.png";
import express from "../../assets/Icons/Technologies/express.png";
import firebase from "../../assets/Icons/Technologies/firebase.png";
import flask from "../../assets/Icons/Technologies/flask.png";
import git from "../../assets/Icons/Technologies/git.png";
import html from "../../assets/Icons/Technologies/html.png";
import js from "../../assets/Icons/Technologies/js.png";
import mongodb from "../../assets/Icons/Technologies/mongodb.png";
import mui from "../../assets/Icons/Technologies/mui.png";
import nodejs from "../../assets/Icons/Technologies/nodejs.png";
import npm from "../../assets/Icons/Technologies/npm.png";
import python from "../../assets/Icons/Technologies/python.png";
import react from "../../assets/Icons/Technologies/react.png";
import redux from "../../assets/Icons/Technologies/redux.png";
import sass from "../../assets/Icons/Technologies/sass.png";
import styled from "../../assets/Icons/Technologies/styled.png";
import tailwind from "../../assets/Icons/Technologies/tailwind.png";

const Skills = () => {
  const fadeAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  
  const logoData = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "React JS", image: react },
    { name: "Redux", image: redux },
    { name: "Material-UI", image: mui },
    { name: "Bootstrap", image: bootstrap },
    { name: "SASS", image: sass },
    { name: "Styled Components", image: styled },
    { name: "Tailwind CSS", image: tailwind },
    { name: "NPM", image: npm },
    { name: "GIT", image: git },
    { name: "NodeJS", image: nodejs },
    { name: "ExpressJS", image: express },
    { name: "MongoDB", image: mongodb },
    { name: "Firebase", image: firebase },
    { name: "Python", image: python },
    { name: "Flask", image: flask },
    { name: "Django", image: django },
    { name: "C", image: c },
    { name: "C++", image: cpp },
  ];

  return (
    <div className="text-center" style={{ height: "80vh" }}>
      <h1 className="mb-20 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        MY <span className="text-navBlue">SKILLS</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center w-full mx-10 mb-10">
        {logoData.map((logo, index) => (
          <motion.div
            key={index}
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.05 * index,
            }}
            className="relative justify-center md:w-1/4 lg:w-1/6 xl:w-1/6 p-2 mb-4"
            >
            <img
              src={logo.image}
              alt={`Tech Logo ${logo.name}`}
              style={{ height: "60px", width: "60px" }}
            />
          </motion.div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Skills;
