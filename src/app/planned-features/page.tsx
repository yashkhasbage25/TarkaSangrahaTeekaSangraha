'use client';
import Image from "next/image";  
import { Eczar } from "next/font/google";

const eczarLight = Eczar({ weight: "400", subsets: ["devanagari"] });  

export default function PlannedFeatures() {  
  return (  
    <div className="flex flex-col min-h-screen p-4">  
        <div className="max-w-screen-lg w-full shadow-lg rounded-lg p-8">  
            <h1 className={`text-4xl text-center mb-6 ${eczarLight.className}`}>  
            Planned Features  
            </h1>  
            <ol>
                <li>
                    Nyaya bodhini text with its mapping to Tarka Sangraha.
                </li>
                <li>
                    Deepika text with its mapping to Tarka Sangraha.
                </li>
            </ol>
        </div>
    </div>

  );  
}  