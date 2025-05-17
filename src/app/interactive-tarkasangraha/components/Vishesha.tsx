'use client';    
import React, { Component } from 'react';    
import { FaInfoCircle } from 'react-icons/fa';    
import { NavigationPaths } from './Navigations';    
import { Devanagari } from './Devanagari';
import { GenericComponentProps } from './interfaces';  
  
class Vishesha extends Component<GenericComponentProps> {      
  render() {  
    return (        
      <div className="relative flex flex-col justify-center items-center h-screen">          
        <h1 className="text-white text-4xl mb-12">{ Devanagari[NavigationPaths.VISHESHA].bahu }</h1>          
        <div className="flex flex-col justify-center items-center space-y-12">            
          <div className="flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">  
            <FaInfoCircle className="text-blue-500 text-6xl" />  
            <p className="text-white text-xl mt-4">नित्यद्रव्यवृत्तयो विशेषास्त्वनन्ता एव ॥</p>  
          </div>  
        </div>        
      </div>      
    );    
  }  
}  
  
export default Vishesha;  