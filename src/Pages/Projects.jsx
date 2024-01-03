import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import Project from "../assets/Images/Project.png";
import Footer from "../Components/Footer/Footer";
import "./App.css";

const projects = [
  {
    name: "TaskSnap",
    details: "It is to-do app, designed to be intuitive and easy using. The app is not fully developed, but that leave rooms for me to make it to full potential!",
  },
  {
    name: "Chat App",
    details: "Real-time chat application built with [Technology Stack].",
  },
  {
    name: "Expense Tracker",
    details: "Web application for tracking personal expenses and budgeting.",
  },
  {
    name: "Finca Restaurant App",
    details: "Application for managing and ordering food in a restaurant.",
  },
  {
    name: "Netflix Clone",
    details: "A clone of the Netflix streaming service with [Technology Stack].",
  },
  {
    name: "Pomodoro Clock",
    details: "Productivity app based on the Pomodoro Technique for time management.",
  },
];

// const ProjectCard = ({ name, details }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="project-card"
//     >
//       <div className="text-center p-8">
//         <h2 className="text-2xl font-bold mb-4">{name}</h2>
//         <p className="text-navBlue">{details}</p>
//         <a
//           className="block mt-auto p-2 bg-navBlue text-white rounded hover:bg-blue-600 transition duration-300"
//           href="https://react-task-snap.vercel.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Github
//         </a>
//       </div>
//     </motion.div>
//   );
// };

const ProjectCard = ({ name, details }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="project-card flex flex-col justify-between p-4 bg-gray-800 rounded"
      style={{ height: '300px' }} // Adjust the height as needed
    >
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-navBlue">{details}</p>
      </div>
      <a
        className="block p-2 bg-navBlue text-white rounded hover:bg-blue-600 transition duration-300"
        href="https://react-task-snap.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </motion.div>
  );
};




const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="projects-container"
      >
        <div className="flex flex-col md:flex-row items-center justify-center mb-16">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img src={Project} alt="Project Image" className="mx-auto" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h1 className="mb-4 text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white text-center">
              My&nbsp;<span className="text-navBlue">Endeavors</span>
            </h1>
            <br />
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 font-mono font-bold text-center">
              My portfolio showcases a range of impactful projects, focusing on
              cutting-edge tools and expertise in frontend development and
              open-source contributions. For a detailed view, visit my GitHub.
            </p>
            <button className="main__btn mt-4">
              <a href="#">GitHub</a>
            </button>
          </div>
        </div>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        <Footer />
      </motion.div>
    </>
  );
};

export default Projects;
