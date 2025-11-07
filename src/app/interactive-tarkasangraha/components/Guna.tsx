'use client';    
import React, { Component } from 'react';    
import { FaEye, FaAppleAlt, FaLeaf, FaHandSparkles, FaHashtag, FaRuler, FaUsers, FaLink, FaUnlink, FaArrowUp, FaArrowDown, FaWeight, FaTint, FaOilCan, FaVolumeUp, FaBrain, FaSmile, FaSadTear, FaHandHoldingHeart, FaHandPaper, FaPray, FaBalanceScale, FaGavel, FaInfinity } from 'react-icons/fa';    
import { NavigationPaths } from './Navigations';    
import { Devanagari } from './Devanagari';
import { GenericComponentProps, DataNode } from './interfaces';  
import SunChart from './SunChart';
  
export default class Guna extends Component<GenericComponentProps> {
  private gunaVibhaga: DataNode = {
    name: 'Guna',
    children: [
      { name: 'रूप', navigateTo: NavigationPaths.ROOPA },
      { name: 'रस', navigateTo: NavigationPaths.RASA },
      { name: 'गन्ध', navigateTo: NavigationPaths.GANDHA },
      { name: 'स्पर्श', navigateTo: NavigationPaths.SPARSHA },
      { name: 'संख्या', navigateTo: NavigationPaths.SANKHYA },
      { name: 'परिमाण', navigateTo: NavigationPaths.PARIMAANA },
      { name: 'पृथक्त्व', navigateTo: NavigationPaths.PRITHAKTVA },
      { name: 'संयोग', navigateTo: NavigationPaths.SANYOGA },
      { name: 'विभाग', navigateTo: NavigationPaths.VIBHAGA },
      { name: 'परत्व', navigateTo: NavigationPaths.PARATVA },
      { name: 'अपरत्व', navigateTo: NavigationPaths.APARATVA },
      { name: 'गुरुत्व', navigateTo: NavigationPaths.GURUTVA },
      { name: 'द्रवत्व', navigateTo: NavigationPaths.DRAVATVA },
      { name: 'स्नेह', navigateTo: NavigationPaths.SNEHA },
      { name: 'शब्द', navigateTo: NavigationPaths.SHABDA },
      { name: 'बुद्धि', navigateTo: NavigationPaths.BUDDHI },
      { name: 'सुख', navigateTo: NavigationPaths.SUKHA },
      { name: 'दुःख', navigateTo: NavigationPaths.DUKHA },
      { name: 'इच्छा', navigateTo: NavigationPaths.ICCHA },
      { name: 'द्वेष', navigateTo: NavigationPaths.DVESHA },
      { name: 'प्रयत्न', navigateTo: NavigationPaths.PRAYATNA },
      { name: 'धर्म', navigateTo: NavigationPaths.DHARMA },
      { name: 'अधर्म', navigateTo: NavigationPaths.ADHARMA },
      { name: 'संस्कार', navigateTo: NavigationPaths.SAMSKARA },
    ],
  }

  render() {
    return (
      <SunChart 
        data={this.gunaVibhaga}
        onShapeClick={this.props.onShapeClick}
      />
    );
  }
}

/*
class Guna extends Component<GenericComponentProps> {      
  gunas = [  
    { name: 'रूप', icon: <FaEye className="text-blue-500 text-6xl" />, navigateTo: NavigationPaths.ROOPA },        
    { name: 'रस', icon: <FaAppleAlt className="text-teal-500 text-6xl" />, navigateTo: NavigationPaths.RASA },        
    { name: 'गन्ध', icon: <FaLeaf className="text-orange-500 text-6xl" />, navigateTo: NavigationPaths.GANDHA },        
    { name: 'स्पर्श', icon: <FaHandSparkles className="text-gray-500 text-6xl" />, navigateTo: NavigationPaths.SPARSHA },        
    { name: 'संख्या', icon: <FaHashtag className="text-purple-500 text-6xl" />, navigateTo: NavigationPaths.SANKHYA },        
    { name: 'परिमाण', icon: <FaRuler className="text-pink-500 text-6xl" />, navigateTo: NavigationPaths.PARIMAANA },        
    { name: 'पृथक्त्व', icon: <FaUsers className="text-yellow-500 text-6xl" />, navigateTo: NavigationPaths.PRITHAKTVA },        
    { name: 'संयोग', icon: <FaLink className="text-red-500 text-6xl" />, navigateTo: NavigationPaths.SANYOGA },        
    { name: 'विभाग', icon: <FaUnlink className="text-green-500 text-6xl" />, navigateTo: NavigationPaths.VIBHAGA },        
    { name: 'परत्व', icon: <FaArrowUp className="text-blue-500 text-6xl" />, navigateTo: NavigationPaths.PARATVA },        
    { name: 'अपरत्व', icon: <FaArrowDown className="text-teal-500 text-6xl" />, navigateTo: NavigationPaths.APARATVA },        
    { name: 'गुरुत्व', icon: <FaWeight className="text-orange-500 text-6xl" />, navigateTo: NavigationPaths.GURUTVA },        
    { name: 'द्रवत्व', icon: <FaTint className="text-gray-500 text-6xl" />, navigateTo: NavigationPaths.DRAVATVA },        
    { name: 'स्नेह', icon: <FaOilCan className="text-purple-500 text-6xl" />, navigateTo: NavigationPaths.SNEHA },        
    { name: 'शब्द', icon: <FaVolumeUp className="text-pink-500 text-6xl" />, navigateTo: NavigationPaths.SHABDA },        
    { name: 'बुद्धि', icon: <FaBrain className="text-yellow-500 text-6xl" />, navigateTo: NavigationPaths.BUDDHI },        
    { name: 'सुख', icon: <FaSmile className="text-red-500 text-6xl" />, navigateTo: NavigationPaths.SUKHA },        
    { name: 'दुःख', icon: <FaSadTear className="text-green-500 text-6xl" />, navigateTo: NavigationPaths.DUKHA },        
    { name: 'इच्छा', icon: <FaHandHoldingHeart className="text-blue-500 text-6xl" />, navigateTo: NavigationPaths.ICCHA },        
    { name: 'द्वेष', icon: <FaHandPaper className="text-teal-500 text-6xl" />, navigateTo: NavigationPaths.DVESHA },        
    { name: 'प्रयत्न', icon: <FaPray className="text-orange-500 text-6xl" />, navigateTo: NavigationPaths.PRAYATNA },        
    { name: 'धर्म', icon: <FaBalanceScale className="text-gray-500 text-6xl" />, navigateTo: NavigationPaths.DHARMA },        
    { name: 'अधर्म', icon: <FaGavel className="text-purple-500 text-6xl" />, navigateTo: NavigationPaths.ADHARMA },        
    { name: 'संस्कार', icon: <FaInfinity className="text-pink-500 text-6xl" />, navigateTo: NavigationPaths.SAMSKARA },  
  ];      
  
  render() {  
    const { onShapeClick } = this.props;  
  
    return (        
      <div className="relative flex flex-col justify-center items-center h-screen">          
        <h1 className="text-white text-4xl mb-12">{ Devanagari[NavigationPaths.GUNA].bahu }</h1>          
        <div className="flex flex-col space-y-12">            
          <div className="flex justify-center items-center space-x-20">              
            {this.gunas.slice(0, 6).map((guna) => (                
              <div                  
                key={guna.name}                  
                onClick={() => onShapeClick(guna.navigateTo)}                  
                className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"                
              >                  
                {guna.icon}                  
                <h6 className="text-white text-2xl mt-2">{guna.name}</h6>                
              </div>              
            ))}            
          </div>            
          <div className="flex justify-center items-center space-x-20">              
            {this.gunas.slice(6, 12).map((guna) => (                
              <div                  
                key={guna.name}                  
                onClick={() => onShapeClick(guna.navigateTo)}                  
                className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"                
              >                  
                {guna.icon}                  
                <h6 className="text-white text-2xl mt-2">{guna.name}</h6>                
              </div>              
            ))}            
          </div>            
          <div className="flex justify-center items-center space-x-20">              
            {this.gunas.slice(12, 18).map((guna) => (                
              <div                  
                key={guna.name}                  
                onClick={() => onShapeClick(guna.navigateTo)}                  
                className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"                
              >                  
                {guna.icon}                  
                <h6 className="text-white text-2xl mt-2">{guna.name}</h6>                
              </div>              
            ))}            
          </div>            
          <div className="flex justify-center items-center space-x-20">              
            {this.gunas.slice(18, 24).map((guna) => (                
              <div                  
                key={guna.name}                  
                onClick={() => onShapeClick(guna.navigateTo)}                  
                className="cursor-pointer flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"                
              >                  
                {guna.icon}                  
                <h6 className="text-white text-2xl mt-2">{guna.name}</h6>                
              </div>              
            ))}            
          </div>          
        </div>        
      </div>      
    );    
  }  
}  
  
export default Guna;  
*/