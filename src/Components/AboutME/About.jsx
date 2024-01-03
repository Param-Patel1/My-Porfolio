import React, { useEffect } from "react";
import Home1 from "../../assets/Images/Home1.png";
import Home2 from "../../assets/Images/Home2.png";
import Home3 from "../../assets/Images/Home3.png";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import AOS from "aos";
import 'aos/dist/aos.css'

const About = () => {
  
  useEffect(() => {
    AOS.init({duration: 2000});
  })

  return (
    <div className="min-h-screen">
      <h1 className="text-center mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Here's What <span className="text-navBlue">I Do</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div className="w-full md:w-1/2 mx-4 my-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
          <img src={Home2} className="w-full bg-transparent" alt="Home2" data-aos="fade-right" />
        </motion.div>

        <div className="details text-center w-full md:w-1/2 mx-4 mt-4 md:mt-0" data-aos="fade-left">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            FULL <span className="text-navBlue">STACK</span>
          </h1>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Skilled in full-stack
            development, managing both frontend and backend aspects seamlessly.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Building
            applications for both web and mobile platforms using React and React
            Native.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Can Integrate services like
            Firebase and MongoDB Atlas  for enhanced features.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Creating responsive frontend
            designs for optimal user experiences across devices.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-4" data-aos="fade-right">
        <div className="details text-center w-full md:w-1/2 mx-4 my-4">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            FRONT <span className="text-navBlue">END</span>
          </h1>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Developing dynamic and efficient
            user interfaces using ReactJS.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Cross-platform mobile
            apps using React Native for a unified user experience.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Proficient in crafting visually
            appealing and interactive interfaces and Animations to enhance user engagement.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Integrates third-party APIs to
            extend frontend application functionality.
          </p>
        </div>

        <div className="w-full md:w-1/2 mx-4 mt-4 md:mt-0 my-4">
          <img src={Home1} className="w-full" alt="Home1" data-aos="fade-left"/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-4">
        <div className="w-full md:w-1/2 mx-4 my-4">
          <img src={Home3} className="w-full" alt="Home3" data-aos="fade-right"/>
        </div>

        <div className="details text-center w-full md:w-1/2 mx-4 mt-4 md:mt-0 my-4" data-aos="fade-left">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            BACK <span className="text-navBlue">END</span>
          </h1>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Building scalable and robust
            backend applications using Node.js and Express.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Creating efficient communication
            between frontend and backend with RESTful APIs.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Developing complex backend logic
            supporting various business applications.
          </p>
          <p className="text-lg text-gray-500 font-mono mt-2">
            <span className="text-20">⚡</span>Implementing security measures for
            software and system components to ensure data integrity and user
            privacy.
          </p>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default About;
