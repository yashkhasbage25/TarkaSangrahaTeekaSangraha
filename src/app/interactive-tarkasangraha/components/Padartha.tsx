'use client';    
import React, { Component } from 'react';    
import { FaFlask, FaGem, FaRunning, FaInfinity, FaStar, FaLink, FaTimes } from 'react-icons/fa';    
import { NavigationPaths } from './Navigations';    
import { Devanagari } from './Devanagari';    
import { GenericComponentProps } from './interfaces';  
  
class Padartha extends Component<GenericComponentProps> {      
  shapes = [  
    { name: 'द्रव्यम्', icon: <FaFlask className="text-blue-500 text-6xl" />, navigateTo: NavigationPaths.DRAVYA },        
    { name: 'गुणः', icon: <FaGem className="text-green-500 text-6xl" />, navigateTo: NavigationPaths.GUNA },        
    { name: 'कर्म', icon: <FaRunning className="text-red-500 text-6xl" />, navigateTo: NavigationPaths.KARMA },        
    { name: 'सामान्यम्', icon: <FaInfinity className="text-yellow-500 text-6xl" />, navigateTo: NavigationPaths.SAMANYA },        
    { name: 'विशेषः', icon: <FaStar className="text-purple-500 text-6xl" />, navigateTo: NavigationPaths.VISHESHA },        
    { name: 'समवायः', icon: <FaLink className="text-pink-500 text-6xl" />, navigateTo: NavigationPaths.SAMAVAYA },        
    { name: 'अभावः', icon: <FaTimes className="text-gray-500 text-6xl" />, navigateTo: NavigationPaths.ABHAVA },      
  ];      
  
  render() {  
    const { onShapeClick } = this.props;  
  
    return (        
      <div className="relative flex flex-col justify-center items-center h-screen">          
        <h5 className="text-white text-4xl mb-12">{ Devanagari[NavigationPaths.PADARTHA].bahu }</h5>          
        <div className="flex flex-col space-y-12">            
          <div className="flex justify-center items-center space-x-20">              
            {this.shapes.slice(0, 3).map((shape) => (                
              <div                  
                key={shape.name}                  
                onClick={() => onShapeClick(shape.navigateTo)}                  
                className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"                
              >                  
                {shape.icon}                  
                <h6 className="text-white text-2xl mt-2">{shape.name}</h6>                
              </div>              
            ))}            
          </div>            
          <div className="flex justify-center items-center space-x-20">              
            {this.shapes.slice(3, 6).map((shape) => (                
              <div                  
                key={shape.name}                  
                onClick={() => onShapeClick(shape.navigateTo)}                  
                className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"                
              >                  
                {shape.icon}                  
                <h6 className="text-white text-2xl mt-2">{shape.name}</h6>                
              </div>              
            ))}            
          </div>            
          <div className="flex justify-center items-center">              
            <div                
              onClick={() => onShapeClick(this.shapes[6].navigateTo)}                
              className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"              
            >                
              {this.shapes[6].icon}                
              <h6 className="text-white text-2xl mt-2">{this.shapes[6].name}</h6>              
            </div>            
          </div>          
        </div>        
      </div>      
    );    
  }  
}  
  
export default Padartha;  