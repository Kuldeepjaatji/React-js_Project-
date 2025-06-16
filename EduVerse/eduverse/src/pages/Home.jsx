import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Welcome to EduVerse</h2>
      <p>Your journey to knowledge starts here!</p>
    </motion.div>
  );
};

export default Home;
