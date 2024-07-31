// src/components/BackToTopButton.tsx
import React, { useState, useEffect } from 'react';
import PulsatingButton from '../magicui/PulsatingButton';

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Adjust the value to your preference
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <PulsatingButton
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 w-10 h-10  text-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      ↑
    </PulsatingButton>
  );
};

export default BackToTopButton;
