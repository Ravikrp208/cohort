import React from "react";
import { motion } from "framer-motion";

const Mylog = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hello everyone, I am a Software Engineer
      </motion.h1>
    </div>
  );
};

export default Mylog;
