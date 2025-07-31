'use client';    
import React, { Component } from 'react';    
import { NavigationPaths } from './Navigations';    
import { Devanagari } from './Devanagari';    
import { GenericComponentProps, DataNode } from './interfaces';  
import SunChart from './SunChart';
  
export default class Dravya extends Component<GenericComponentProps> {
  private dravyaVibhaga: DataNode = {
    name: Devanagari[NavigationPaths.DRAVYA].eka,
    children: [
      { name: Devanagari[NavigationPaths.PRITHVI].eka, navigateTo: NavigationPaths.PRITHVI },
      { name: Devanagari[NavigationPaths.AAP].eka, navigateTo: NavigationPaths.AAP },
      { name: Devanagari[NavigationPaths.TEJAH].eka, navigateTo: NavigationPaths.TEJAH },
      { name: Devanagari[NavigationPaths.VAYU].eka, navigateTo: NavigationPaths.VAYU },
      { name: Devanagari[NavigationPaths.AKASHA].eka, navigateTo: NavigationPaths.AKASHA },
      { name: Devanagari[NavigationPaths.DIK].eka, navigateTo: NavigationPaths.DIK },
      { name: Devanagari[NavigationPaths.KAALA].eka, navigateTo: NavigationPaths.KAALA },
      { name: Devanagari[NavigationPaths.AATMA].eka, navigateTo: NavigationPaths.AATMA },
      { name: Devanagari[NavigationPaths.MANAH].eka, navigateTo: NavigationPaths.MANAH },
    ],
  }
  render() {
    return (
      <SunChart 
        data={this.dravyaVibhaga}
        onShapeClick={this.props.onShapeClick}
      />
    );
  }
}
/*
class Dravya extends Component<GenericComponentProps> {      
  shapes = [  
    { name: 'पृथ्वी', icon: <FaGlobe className="text-blue-500 text-6xl" />, navigateTo: NavigationPaths.PRITHVI },        
    { name: 'आपः', icon: <FaWater className="text-teal-500 text-6xl" />, navigateTo: NavigationPaths.AAP },        
    { name: 'तेजः', icon: <FaBolt className="text-orange-500 text-6xl" />, navigateTo: NavigationPaths.TEJAH },        
    { name: 'वायु', icon: <FaWind className="text-gray-500 text-6xl" />, navigateTo: NavigationPaths.VAYU },        
    { name: 'आकाश', icon: <FaCircle className="text-purple-500 text-6xl" />, navigateTo: NavigationPaths.AKASHA },        
    { name: 'दिक्', icon: <FaCompass className="text-pink-500 text-6xl" />, navigateTo: NavigationPaths.DIK },        
    { name: 'कालः', icon: <FaClock className="text-yellow-500 text-6xl" />, navigateTo: NavigationPaths.KAALA },        
    { name: 'आत्मा', icon: <FaHeart className="text-red-500 text-6xl" />, navigateTo: NavigationPaths.AATMA },        
    { name: 'मनः', icon: <FaBrain className="text-green-500 text-6xl" />, navigateTo: NavigationPaths.MANAH },  
  ];      
  
  render() {  
    const { onShapeClick } = this.props;  
  
    return (        
      <div className="relative flex flex-col justify-center items-center h-screen">          
        <h1 className="text-white text-4xl mb-12">{Devanagari[NavigationPaths.DRAVYA].bahu}</h1>          
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
          <div className="flex justify-center items-center space-x-20">              
            {this.shapes.slice(6, 9).map((shape) => (                
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
        </div>        
      </div>      
    );    
  }  
}  
  
export default Dravya;  
*/