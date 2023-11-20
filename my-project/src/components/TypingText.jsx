import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingText = () => {
  useEffect(() => {
    const typed = new Typed('.typing-element', {
      strings: ["SENIOR ARCHITECT","URBAN PLANNING ENGINEER ","INTERIOR DESIGNER"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: ""
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <div className="typing-element"></div>;
};

export default TypingText;