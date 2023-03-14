import React from "react";
import api from "../api/data";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

interface Props {}

interface User {
  id: number | null;
  name: string;
  email: string;
}

const Home: React.FC = ({}) => {
  return (
    <div>
      <motion.h1
        animate={{ y: 100, opacity: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="text-center"
      >
        Hi! This is Home Page
      </motion.h1>
    </div>
  );
};

export default Home;
