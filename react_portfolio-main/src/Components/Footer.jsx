import React from "react";
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white relative">
      <div className="hidden md:flex absolute top-0 right-0 m-4 items-center">
        <a href="https://www.linkedin.com/in/shankaranarayanansk/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-6 w-6 text-blue-500 mr-2" />
        </a>
        <h4 className="text-white">Shankaranarayanansk <span style={{ color: 'grey' }}>developer</span></h4>
      </div>
      <div className="md:hidden absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <a href="https://www.linkedin.com/in/shankaranarayanansk/" target="_blank" rel="noopener noreferrer" className="mr-2">
          <FaLinkedin className="h-6 w-6 text-blue-500" />
        </a>
        <h4 className="text-white">Shankaranarayanansk <span style={{ color: 'grey' }}>developer</span></h4>
      </div>
      <div className="md:hidden pt-10">
      </div>
      Copyright © 2024 ahamedthameem. All Rights reserved.
    </div>
  );
};

export default Footer;
