import React from 'react'
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-black font-bebas">
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <motion.div
          className="absolute inset-0 border border-white rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-2 border border-white rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="absolute inset-4 border border-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              className="text-white text-4xl md:text-5xl lg:text-6xl font-thin tracking-widest"
              animate={{ y: [-20, 0, -20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              GULF
            </motion.div>
            <motion.div
              className="text-white text-xl md:text-2xl lg:text-4xl font-light tracking-wider"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ESTATES
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 border-t-2 border-r-2 border-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  )
}

export default Loader
