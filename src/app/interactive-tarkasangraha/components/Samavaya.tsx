'use client';    
import React, { Component } from 'react';    
import { FaLink } from 'react-icons/fa';    
import Button from '@mui/material/Button';    
import { NavigationPaths } from './Navigations';    
import { Devanagari } from './Devanagari';
import { GenericComponentProps } from './interfaces';  
  
class Samavaya extends Component<GenericComponentProps> {      
  render() {  
    const { onShapeClick } = this.props;  
  
    return (        
      <div className="relative flex flex-col justify-center items-center h-screen">          
        <h1 className="text-white text-4xl mb-12">{ Devanagari[NavigationPaths.SAMAVAYA].bahu }</h1>          
        <div className="flex flex-col justify-center items-center space-y-12">            
          <div className="flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">  
            <FaLink className="text-blue-500 text-6xl" />  
            <p className="text-white text-xl mt-4">समवायस्त्वेक एव</p>  
          </div>         
        </div>        
      </div>      
    );    
  }  
}  
  
export default Samavaya;  