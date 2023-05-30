import React from 'react';
import { FaInstagram, FaFacebook, FaPinterest, FaLinkedin } from 'react-icons/fa';

const SendMessage = () => {
  return (
    <div className="max-w-lg mx-auto py-8 px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-maroon text-center">Send us a message right now</h2>
        <p className="text-gray-600 text-center">If you have any queries about our offerings, don’t hesitate to contact us.</p>
      </div>

      <div className="text-left mb-8">
        <h3 className="text-lg font-semibold text-maroon mb-2">Company Information</h3>
        <p className="text-black">
          Quality Punch, Inc., the digitizing company is now selling Quality Patches. Quality Patches is the result of years of award-winning digitization expertise and cutting-edge patch production equipment. We’ll pay close attention to you from the moment you contact us until we’ve addressed any issues you may have.
        </p>
      </div>

      <div className="text-left">
        <h3 className="text-lg font-semibold text-maroon mb-2">Connect With Us</h3>
        <div className="flex items-center">
          <a href="#" className="mr-2 text-black hover:text-maroon transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="mr-2 text-black hover:text-maroon transition-colors duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="mr-2 text-black hover:text-maroon transition-colors duration-300">
            <FaPinterest size={24} />
          </a>
          <a href="#" className="text-black hover:text-maroon transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
