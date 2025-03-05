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
              window.scrollBy(0, -100); // Adjust this value based on your navbar height  
            }, 500);  
          } else {  
            console.warn(`Element with id ${targetId} not found.`);  
          }  
        }  
      });  
    });  
  }, []);  
  
  useEffect(() => {  
    const elements = document.querySelectorAll('.teeka-nyayabodhini');  
    elements.forEach(element => {  
      element.style.display = nyayabodhiniVisible ? 'block' : 'none';  
    });  
  }, [nyayabodhiniVisible]);  
  
  useEffect(() => {  
    const elements = document.querySelectorAll('.teeka-deepika');  
    elements.forEach(element => {  
      element.style.display = deepikaVisible ? 'block' : 'none';  
    });  
  }, [deepikaVisible]);  
  
  useEffect(() => {  
    const elements = document.querySelectorAll('.teeka-padakrtyam');  
    elements.forEach(element => {  
      element.style.display = padakrytamVisible ? 'block' : 'none';  
    });  
  }, [padakrytamVisible]);  
  
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