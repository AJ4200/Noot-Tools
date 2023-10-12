"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-blend-saturation py-2 text-center font-semibold text-black">
      <div className="mx-auto flex flex-row mt-1 items-center justify-center lg:flex-row">
        <p className="text-gray-600 text-sm mb-2 lg:mb-0">
          &copy; {new Date().getFullYear()} Project by aj4200. All rights
          reserved.
        </p>
        <div className="flex justify-center">
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 mx-1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 mx-1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaGithub size={24} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
