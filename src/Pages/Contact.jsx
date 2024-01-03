import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Navbar from "../Components/Navbar/Navbar";
import emailjs from "@emailjs/browser";
import Footer from '../Components/Footer/Footer'


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2bhaksf",
        "template_zko3s6e",
        formRef.current,
        "9Xls_C7nTfQBvLSVn"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="text-center place-content-around w-[100vw] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact place-content-around">
          <motion.div className="textContainer">
            <motion.h1>Let’s work together</motion.h1>
            <motion.div className="item">
              <h2>
                Mail: <span>parampatel220103@gmail.com</span>
              </h2>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>
                Location: <span>Toronto, CA</span>
              </h2>
            </motion.div>
            {/* <motion.div className="item" variants={variants}>
              <h2>
                Phone: <span>+1 (416)-848-2858</span>
              </h2>
            </motion.div> */}
          </motion.div>
          <div className="formContainer">
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className="w-[80%] mt-20"
            >
              <input type="text" required placeholder="Name" name="name" />
              <input type="email" required placeholder="Email" name="email" />
              <input placeholder="Message" name="message" />
              <button>Submit</button>
            </motion.form>
          </div>{" "}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center text-center h-full">
          <h1 className="flex mb-4 text-md font-bold text-gray-900 md:text-2xl lg:text-6xl dark:text-white">
            Connect with me on&nbsp;
            <span className="text-navBlue">Social Media</span>
          </h1>
          <div className="flex items-center space-x-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=100086476304274" target="_blank"><AiFillFacebook className="text-5xl hover:text-blue-500 mx-2 transition duration-300 transform hover:scale-110 shadow-lg" /></a>
            <a href="https://www.instagram.com/parxm_patel/" target="_blank"><AiFillInstagram className="text-5xl hover:text-pink-500 mx-2 transition duration-300 transform hover:scale-110 shadow-lg" /></a>
            <a href="https://twitter.com/ParamPa12518421" target="_blank"><AiFillTwitterSquare className="text-5xl hover:text-blue-400 mx-2 transition duration-300 transform hover:scale-110 shadow-lg" /></a>
            <a href="https://github.com/Param-Patel1" target="_blank"><AiFillGithub className="text-5xl hover:text-gray-800 mx-2 transition duration-300 transform hover:scale-110 shadow-lg" /></a>
            <a href="https://www.linkedin.com/in/parampatel8/" target="_blank"><AiFillLinkedin className="text-5xl hover:text-blue-700 mx-2 transition duration-300 transform hover:scale-110 shadow-lg" /></a>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Contact;
