import Image from '../assets/Icons/Technologies/react.png';
import Navbar from "../Components/Navbar/Navbar";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useContext } from "react";
import { ThemeContext } from '../App';
import { motion } from "framer-motion";
import Footer from '../Components/Footer/Footer'
import "react-vertical-timeline-component/style.min.css";

import Wrapper  from "../Components/Transitions/Wrapper";
import { textVariant } from '../Components/Transitions/Motion'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    className='text-blue-400'
      contentStyle={{
        background: "black",
        color: "black",
      }}
      style={{color: "blue"}}
      dateClassName='text-black'
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <h3
          className='text-white text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience = () => {

  const experiences = [
    {
      title: "Front End Developer",
      company_name: "Pakona Industries",
      icon: "",
      iconBg: "#383E56",
      date: "March 2021 - Dec 2021",
      points: [
        "Front End (ReactJS and Redux) of Management Platform & New Generation Improvised Software Services for the MS University.",
        "Restful API building and testing.",
        "Targeted 50,000+ Daily users on different Android, iOS and Web Platform. Incorporated additional frameworks in order to fulfill the requirements.",
        "Creating University, Library, Hostel, Exam System etc. management services for Students & Faculty."
      ],
    },
    {
      title: "Front End Lead",
      company_name: "MSU ELEMENTS",
      icon: "",
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2022",
      points: [
        "Front End (ReactJS and Redux) of Management Platform & New Generation Improvised Software Services for the MS University.",
        "Restful API building and testing.",
        "Targeted 50,000+ Daily users on different Android, iOS and Web Platform. Incorporated additional frameworks in order to fulfill the requirements.",
        "Creating University, Library, Hostel, Exam System etc. management services for Students & Faculty."
      ],
    },
    {
      title: "Web Developer and Content Writer",
      company_name: "Kanan International",
      icon: "",
      iconBg: "#383E56",
      date: "July 2022 - Nov 2022",
      points: [
        "Front End (ReactJS and Redux) of Management Platform & New Generation Improvised Software Services for the MS University.",
        "Restful API building and testing.",
        "Targeted 50,000+ Daily users on different Android, iOS and Web Platform. Incorporated additional frameworks in order to fulfill the requirements.",
        "Creating University, Library, Hostel, Exam System etc. management services for Students & Faculty."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Uphill Climbing",
      icon: "",
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Dec 2022",
      points: [
        "Front End (ReactJS and Redux) of Management Platform & New Generation Improvised Software Services for the MS University.",
        "Restful API building and testing.",
        "Targeted 50,000+ Daily users on different Android, iOS and Web Platform. Incorporated additional frameworks in order to fulfill the requirements.",
        "Creating University, Library, Hostel, Exam System etc. management services for Students & Faculty."
      ],
    },
  ];

  const { theme } = useContext(ThemeContext);

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
        className={`my-element ${theme ? 'dark:bg-dark-bg' : 'bg-light-bg'}`}>
        <motion.div variants={textVariant()}>
        <p className="text-center my-10 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          WHAT I HAVE <span className='text-navBlue'>DONE SO FAR</span>
        </p>
        
      </motion.div>

      <div className='flex flex-col'>
        <VerticalTimeline className='bg-slate-200 text-blue-400 w-[100%]'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Wrapper(Experience, "work");