import { motion } from "framer-motion";
import { staggerContainer } from "./Motion";

const Wrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={``}
      >
        <Component />
      </motion.section>
    );
  };

export default Wrapper;