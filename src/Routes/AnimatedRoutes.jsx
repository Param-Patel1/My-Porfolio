import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import { motion, AnimatePresence } from "framer-motion";


const AnimatedRoutes = () => {
    const location = useLocation();
  
    return (
    <>
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  </>
  )
}

export default AnimatedRoutes