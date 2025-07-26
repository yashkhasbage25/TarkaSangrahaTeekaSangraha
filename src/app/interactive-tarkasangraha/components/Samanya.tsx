'use client';    
import React, { Component } from 'react';    
import { FaInfinity, FaAngleDoubleUp } from 'react-icons/fa';    
import { NavigationPaths } from './Navigations';    
import { Devanagari } from './Devanagari';
import { GenericComponentProps, DataNode } from './interfaces';  
import SunChart from './SunChart';
  
export default class Samanya extends Component<GenericComponentProps> {
  private samanyaData: DataNode = {
    name: 'Samanya',
    children: [
      { name: 'परम्', navigateTo: NavigationPaths.PARAM },
      { name: 'अपरम्', navigateTo: NavigationPaths.APARAM },
    ]
  };

  render() {
    return (
      <SunChart
        data={this.samanyaData}
        onShapeClick={this.props.onShapeClick}
      />
    );
  }
}

/*
class Samanya extends Component<GenericComponentProps> {      
  samanyas = [  
    { name: 'परम्', icon: <FaInfinity className="text-blue-500 text-6xl" />, navigateTo: NavigationPaths.PARAM },        
    { name: 'अपरम्', icon: <FaAngleDoubleUp className="text-teal-500 text-6xl" />, navigateTo: NavigationPaths.APARAM },  
  ];      
  
  render() {  
    const { onShapeClick } = this.props;  
  
    return (        
      <div className="relative flex flex-col justify-center items-center h-screen">          
        <h1 className="text-white text-4xl mb-12">{ Devanagari[NavigationPaths.SAMANYA].bahu }</h1>          
        <div className="flex flex-col space-y-12">            
          <div className="flex justify-center items-center space-x-20">              
            {this.samanyas.map((samanya) => (                
              <div                  
                key={samanya.name}                  
                onClick={() => onShapeClick(samanya.navigateTo)}                  
                className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"                
              >                  
                {samanya.icon}                  
                <h6 className="text-white text-2xl mt-2">{samanya.name}</h6>                
              </div>              
            ))}            
          </div>          
        </div>        
      </div>      
    );    
  }  
}  
  
export default Samanya;  
*/