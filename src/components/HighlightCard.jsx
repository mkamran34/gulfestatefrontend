import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const HighlightCard = ({ icon, title, value }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
    >
      {icon}
      <h3 className="text-lg font-semibold mt-3 mb-1 text-[#024959]">
        {title}
      </h3>
      <p className="text-2xl font-bold text-[#F2762E]">{value}</p>
    </motion.div>
  )
}

export default HighlightCard
