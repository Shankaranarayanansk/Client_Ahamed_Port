import React from "react";
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white relative">
      <div className="absolute top-0 right-0 m-4 flex items-center">
        <a href="https://www.linkedin.com/in/shankaranarayanansk/" target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <FaLinkedin className="h-6 w-6 text-blue-500 mr-2" />
        </a>
        <h4 className="text-white hidden md:block">Shankaranarayanansk <span style={{ color: 'grey' }}>developer</span></h4>
      </div>
      Copyright © 2024 ahamedthameem. All Rights reserved.
    </div>
  );
};

export default Footer;
