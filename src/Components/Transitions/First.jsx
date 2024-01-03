import { motion } from "framer-motion"
import React from 'react'

const First = ({children}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{opacity: 0, y:-100}}
    transition={{duration: 1}}
  >{children}</motion.div>
  )
}

export default First