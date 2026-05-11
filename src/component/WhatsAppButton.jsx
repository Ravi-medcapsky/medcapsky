import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919208432221"  //  WhatsApp Business number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 hover:scale-[1.2] bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 md:p-4"
    >
      <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
    </a>
  );
};

export default WhatsAppButton;
