"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const CenterPiece: React.FC = () => {
  return (
    <figure className="place-self-center self-center">
      <h1 className="Logo">Noot-Tools</h1>
      <h1 className="Logo">Noot-Tools</h1>
      <h1 className="Logo">Noot-Tools</h1>
      <h1 className="Logo">Noot-Tools</h1>
      <h1 className="Logo">Noot-Tools</h1>
      <h1 className="Logo">Noot-Tools</h1>
      <h1 className="Logo">Noot-Tools</h1>
      <h1 className="Logo">Noot-Tools</h1>
      <h1 className="Logo">
        Noot-Tools{" "}
        <div className="flex justify-center">
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaLinkedin size={40} />
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaGithub size={40} />
          </motion.a>
        </div>
      </h1>
      <h1 className="Logo">
        Noot-Tools
        <div className="flex justify-center">
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black mx-1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaLinkedin size={40} />
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black mx-1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaGithub size={40} />
          </motion.a>
        </div>
      </h1>
    </figure>
  );
};
export default CenterPiece;
