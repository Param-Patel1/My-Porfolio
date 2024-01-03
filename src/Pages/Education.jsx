import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import Edu from "../assets/Images/Education.png";
import Certification from "../assets/Images/Certification.png";
import Footer from "../Components/Footer/Footer";
import AOS from "aos";
import 'aos/dist/aos.css'


const Education = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  })

  const certificates = [
    {
      name: "Certificate 1",
      details: "Details about Project 1...",
      imageUrl:
        "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    },
    {
      name: "Certificate 2",
      details: "Details about Project 2...",
      imageUrl:
        "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    },
    {
      name: "Certificate 3",
      details: "Details about Project 3...",
      imageUrl:
        "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    },
    {
      name: "Certificate 4",
      details: "Details about Project 4...",
      imageUrl:
        "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    },
    {
      name: "Certificate 5",
      details: "Details about Project 5...",
      imageUrl:
        "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    },
    {
      name: "Certificate 6",
      details: "Details about Project 6...",
      imageUrl:
        "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    },
  ];

  const CertificateCard = ({ name, details, imageUrl }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="certificate-card p-4 rounded-md shadow-md flex flex-col max-w-md mx-2 mb-4 w-full md:w-1/4"
      >
        <div className="mb-4 bg-white rounded-md overflow-hidden">
          <img src={imageUrl} alt={name} className="w-full h-32 object-cover" />
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-md flex-1">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p>{details}</p>
        </div>
      </motion.div>
    );
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);

  return (
    <>
      <div
      // initial={{ opacity: 0, y: -20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      >
        <Navbar />
      </div>
      <div>
        <div ref={ref}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex flex-col md:flex-row items-center place-content-around h-[100vh] mb-10">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img src={Edu} className="w-full" alt="Education"/>
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="mb-4 text-md font-bold text-gray-900 md:text-2xl lg:text-6xl dark:text-white">
                  Education
                </h1>
                <h2 className="text-2xl text-gray-500 font-mono mt-2">
                  I am a highly qualified professional with a strong educational
                  background in Computer Science, backed by relevant
                  certifications and training in Full-Stack Web Development and
                  Mobile App Development.
                </h2>
              </div>
            </div>
            <div className="flex items-center place-content-around mb-10" >
              <div className="md:flex md:items-center w-full md:w-1/2 mb-4 md:mb-0">
                <div className="w-40 h-40 p-2 rounded-full border-2 border-solid border-cyan-500 overflow-hidden" data-aos="fade-right">
                  <img
                    src="https://humber.ca/brand/sites/default/files/logos/Primary_Logo/Humber_Logo_Blue_and_Gold.png"
                    alt="Humber Logo"
                    className="w-full h-full object-contain"
                    
                  />
                </div>
                <div data-aos="fade-left">
                  <div className="bg-blue-500 text-white py-10 rounded-md h-[150px] border-s-black card-head">
                    <div className="flex justify-between items-center px-8">
                      <h2 className="text-2xl font-semibold mb-2">
                        Humber College
                      </h2>
                      <p className="text-lg mb-2">2023 - Expected 2025</p>
                    </div>
                    <p className="text-lg text-white mb-2 px-8">
                      Computer Programming and Analysis
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-md shadow-md max-w-3xl mx-auto mt-4 card-bottom">
                    <p className="text-md text-gray-800 mb-2">
                      ⚡ Studied core subjects like Data Structures, DBMS,
                      Cryptography.
                    </p>
                    <p className="text-md text-gray-800 mb-2">
                      ⚡ Completed various online courses in Backend, Web,
                      Mobile App Development, etc.
                    </p>
                    <p className="text-md text-gray-800 mb-2">
                      ⚡ Implemented several projects based on the knowledge
                      gained during the Computer Engineering course.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center place-content-around mb-10">
              <div className="w-full md:flex md:items-center md:w-1/2 mb-4 md:mb-0">
                <div className="w-40 h-40 p-4 rounded-full border-2 border-solid border-cyan-500 overflow-hidden" data-aos="fade-right">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/b/bf/Msu_baroda_logo.png"
                    alt="MSU Baroda Logo"
                    className="w-full h-full object-contain"
                  />
                </div>{" "}
                <div data-aos="fade-left">
                  <div className="bg-blue-500 text-white py-10 rounded-md h-[150px] card-head">
                    <div className="flex justify-between items-center px-8">
                      <h2 className="text-2xl font-semibold mb-2">
                        The Maharaja Sayajirao University of Baroda
                      </h2>
                      <p className="text-lg mb-2">2019 - 2022</p>
                    </div>
                    <p className="text-lg text-white mb-2 px-8 ">
                      Computer Engineering
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-md shadow-md max-w-3xl mx-auto mt-4 card-bottom">
                    <p className="text-md text-gray-800 mb-2">
                      ⚡ Studied core subjects like Data Structures, DBMS,
                      Cryptography.
                    </p>
                    <p className="text-md text-gray-800 mb-2">
                      ⚡ Completed various online courses in Backend, Web,
                      Mobile App Development, etc.
                    </p>
                    <p className="text-md text-gray-800 mb-2">
                      ⚡ Implemented several projects based on the knowledge
                      gained during the Computer Engineering course.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center place-content-around h-[100vh] mb-10">
              <div className="md:flex md:items-center w-full">
                <div className="w-full md:w-1/2">
                  <img
                    src={Certification}
                    className="w-full"
                    alt="Certification"
                    data-aos="fade-right"
                  />
                </div>
                <div className="w-full md:w-1/2" data-aos="fade-left">
                  {" "}
                  <h1 className="flex mb-4 text-md font-bold text-gray-500 md:text-2xl lg:text-6xl dark:text-white">
                    Certification
                  </h1>
                  <h2 className="text-2xl text-gray-500 font-mono mt-2">
                    I am a highly qualified professional with a strong
                    educational background in Computer Science, backed by
                    relevant certifications and training in Full-Stack Web
                    Development and Mobile App Development.
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-wrap">
            {/* <a href='/api/v1/print/example.pdf' target='_blank' rel='noopener noreferrer'> */}
              {certificates.map((certificate, index) => (
                <CertificateCard key={index} {...certificate} />
              ))}
            </div>
            <Footer />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Education;
