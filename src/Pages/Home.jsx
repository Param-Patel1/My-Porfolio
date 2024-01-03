import React from "react";
import { Link } from "react-router-dom";
import Param from "../assets/Images/Param.png";
import { motion } from "framer-motion";
import "../App.css";
import Navbar from "../Components/Navbar/Navbar";
import Skills from "../Components/Skills/Skills";
import About from "../Components/AboutME/About";
import Footer from "../Components/Footer/Footer";
import Wrapper from "../Components/Transitions/Wrapper";
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="justify-center items-center place-content-between flex flex-col md:flex-row min-h-screen">
          <div className="items-center place-content-between ml-4 md:ml-20 pl-4 md:pl-20 md:w-1/2 mx-auto">
            <div className="text-center">
              <h1 className="mb-4 text-2xl font-bold leading-none text-gray-900 tracking-tight md:text-5xl lg:text-6xl">
                Hello!
              </h1>
              <p className="text-2xl text-gray-500 font-mono mt-2 dark:text-gray-300">
                I'm <span className="text-navBlue">Param Patel.</span>
                <br />
                Full Stack Developer & Frontend Engineer
                <br />
                Ever Positive Never Negative...✌️🧑‍💻
              </p>
              <button className="main__btn mt-4">
                <Link to="/contact">
                  <p className="idk1">Let's Connect</p>
                </Link>
              </button>
            </div>
          </div>

          <div className="ml-20 md:mr-20 pr-4 md:pr-20 md:w-1/2">
            <img
              src={Param}
              alt="floater"
            />
          </div>
        </div>
        <Skills />
        <About />
      </motion.div>
      <Footer />
    </>
  );
};

export default Wrapper(Home, "Home");
