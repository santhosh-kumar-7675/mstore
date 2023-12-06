import React, { useState, useEffect } from 'react';
const ScrollToTopButton = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(progress);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <button>
          <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
          Top
        </button>
      </div>
    );
  };
  
  export default ScrollToTopButton;