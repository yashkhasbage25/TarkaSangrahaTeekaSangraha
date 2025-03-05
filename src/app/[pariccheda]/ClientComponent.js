"use client";  
  
import { useEffect, useState } from 'react';  
import Navbar from '../../components/Navbar';  
  
export default function ClientComponent({ content }) {  
  const [nyayabodhiniVisible, setNyayabodhiniVisible] = useState(true);  
  const [deepikaVisible, setDeepikaVisible] = useState(true);  
  const [padakrytamVisible, setPadakrytamVisible] = useState(true);  
  
  const handleToggleNyayabodhini = (isVisible) => {  
    setNyayabodhiniVisible(isVisible);  
  };  
  
  const handleToggleDeepika = (isVisible) => {  
    setDeepikaVisible(isVisible);  
  };  
  
  const handleTogglePadakrytam = (isVisible) => {  
    setPadakrytamVisible(isVisible);  
  };  
  
  useEffect(() => {  
    // Add the smooth scroll JavaScript code  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
      anchor.addEventListener('click', function (e) {  
        const targetId = this.getAttribute('href');  
        if (targetId && targetId !== '#') {  
          const target = document.querySelector(targetId);  
          if (target) {  
            target.scrollIntoView({  
              behavior: 'smooth',  
            });  
            setTimeout(() => {  
              const navbar = document.querySelector('.navbar');  
              const navbarHeight = navbar ? navbar.offsetHeight : 0;  
              window.scrollBy(0, -(navbarHeight)); // Adjust based on the navbar height  
            }, 500);  
          } else {  
            console.warn(`Element with id ${targetId} not found.`);  
          }  
        }  
      });  
    });  
  }, []);  
  
  useEffect(() => {  
    const handleVisibility = (selector, isVisible) => {  
      const elements = document.querySelectorAll(selector);  
      elements.forEach(element => {  
        element.style.display = isVisible ? 'block' : 'none';  
      });  
    };  
  
    handleVisibility('.teeka-nyayabodhini', nyayabodhiniVisible);  
    handleVisibility('.teeka-deepika', deepikaVisible);  
    handleVisibility('.teeka-padakrtyam', padakrytamVisible);  
  }, [nyayabodhiniVisible, deepikaVisible, padakrytamVisible]);  
  
  return (  
    <>  
      <Navbar  
        onToggleNyayabodhini={handleToggleNyayabodhini}  
        onToggleDeepika={handleToggleDeepika}  
        onTogglePadakrytam={handleTogglePadakrytam}  
      />  
      <div className="main-content mt-5 pt-5" dangerouslySetInnerHTML={{ __html: content }} />  
    </>  
  );  
}  