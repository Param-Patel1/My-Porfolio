import React, { useEffect, useState } from "react";
import 'react-chatbot-kit/build/main.css'
import { ScaleLoader } from "react-spinners";
import "./App.css";
import AnimatedRoutes from "./Routes/AnimatedRoutes";
import { motion } from "framer-motion";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="h-full"  id={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={location.pathname}
        transition={{ duration: 1 }}
      >
        <div
          style={{
            left: position.x,
            top: position.y,
          }}
          className="cursor"
        ></div>
        <div
          style={{
            left: position.x - 6,
            top: position.y - 6,
          }}
          className="cursor-follower"
        ></div>
      </motion.div>
      {loading ? (
        <div className="App">
          <ScaleLoader size={35} color="#00BFFF" loading={loading} />
        </div>
      ) : (
        <AnimatedRoutes />
      )}
    </div>
</ThemeContext.Provider>
);
}

export default App;
