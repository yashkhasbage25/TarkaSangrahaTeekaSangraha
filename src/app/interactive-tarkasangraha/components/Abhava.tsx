'use client';    
import React, { Component } from 'react';    
import { FaBan, FaTrash, FaTimesCircle, FaExchangeAlt } from 'react-icons/fa';    
import { NavigationPaths } from './Navigations';    
import { GenericComponentProps, DataNode } from './interfaces';  
import SunChart from './SunChart';  

export default class Abhava extends Component<GenericComponentProps> {
  private abhavaVibhaga: DataNode = {
    name: 'Abhava',
    children: [
      { name: 'प्रागभावः', navigateTo: NavigationPaths.PRAGABHAVA },
      { name: 'प्रध्वंसाभावः', navigateTo: NavigationPaths.PRADHVAMSABHAVA },
      { name: 'अत्यन्ताभावः', navigateTo: NavigationPaths.ATYANTABHAVA },
      { name: 'अन्योन्याभावः', navigateTo: NavigationPaths.ANYONYABHAVA },
    ],
  }

  render() {
    return (
      <SunChart 
        data={this.abhavaVibhaga}
        onShapeClick={this.props.onShapeClick}
      />
    );
  }
}

/*
class Abhava extends Component<GenericComponentProps> {      
  abhavas = [  
    { name: 'प्रागभावः', icon: <FaBan className="text-blue-500 text-6xl" />, navigateTo: NavigationPaths.PRAGABHAVA },        
    { name: 'प्रध्वंसाभावः', icon: <FaTrash className="text-teal-500 text-6xl" />, navigateTo: NavigationPaths.PRADHVAMSABHAVA },        
    { name: 'अत्यन्ताभावः', icon: <FaTimesCircle className="text-orange-500 text-6xl" />, navigateTo: NavigationPaths.ATYANTABHAVA },        
    { name: 'अन्योन्याभावः', icon: <FaExchangeAlt className="text-gray-500 text-6xl" />, navigateTo: NavigationPaths.ANYONYABHAVA },  
  ];      
  
  render() {  
    const { onShapeClick } = this.props;  
  
    return (        
      <div className="relative flex flex-col justify-center items-center h-screen">          
        <h1 className="text-white text-4xl mb-12">अभावः</h1>          
        <div className="flex flex-col space-y-12">            
          <div className="flex justify-center items-center space-x-20">              
            {this.abhavas.map((abhava) => (                
              <div                  
                key={abhava.name}                  
                onClick={() => onShapeClick(abhava.navigateTo)}                  
                className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"                
              >                  
                {abhava.icon}                  
                <h6 className="text-white text-2xl mt-2">{abhava.name}</h6>                
              </div>              
            ))}            
          </div>          
        </div>              
      </div>      
    );    
  }  
}  
  
export default Abhava;  
*/