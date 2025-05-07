'use client';    
import React, { Component } from 'react';    
import { FaArrowUp, FaArrowDown, FaCompress, FaExpand, FaWalking } from 'react-icons/fa';    
import { NavigationPaths } from './Navigations';    
import { Devanagari } from './Devanagari';
import { GenericComponentProps } from './interfaces';  
  
class Karma extends Component<GenericComponentProps> {      
  karmas = [  
    { name: 'उत्क्षेपण', icon: <FaArrowUp className="text-blue-500 text-6xl" />, navigateTo: NavigationPaths.UTKSHEPANA },        
    { name: 'अपक्षेपण', icon: <FaArrowDown className="text-teal-500 text-6xl" />, navigateTo: NavigationPaths.APAKSHEPANA },        
    { name: 'अकुञ्चन', icon: <FaCompress className="text-orange-500 text-6xl" />, navigateTo: NavigationPaths.AKUNCHANA },        
    { name: 'प्रसारण', icon: <FaExpand className="text-gray-500 text-6xl" />, navigateTo: NavigationPaths.PRASARANA },        
    { name: 'गमन', icon: <FaWalking className="text-purple-500 text-6xl" />, navigateTo: NavigationPaths.GAMANA },  
  ];      
  
  render() {  
    const { onShapeClick } = this.props;  
  
    return (        
      <div className="relative flex flex-col justify-center items-center h-screen">          
        <h1 className="text-white text-4xl mb-12">{ Devanagari[NavigationPaths.KARMA].bahu }</h1>          
        <div className="flex flex-col space-y-12">            
          <div className="flex justify-center items-center space-x-20">              
            {this.karmas.map((karma) => (                
              <div                  
                key={karma.name}                  
                onClick={() => onShapeClick(karma.navigateTo)}                  
                className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"                
              >                  
                {karma.icon}                  
                <h6 className="text-white text-2xl mt-2">{karma.name}</h6>                
              </div>              
            ))}            
          </div>          
        </div>        
      </div>      
    );    
  }  
}  
  
export default Karma;  