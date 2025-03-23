import React from 'react';
import BubbleChart from './BubbleChart';
  
export default function IntroductionToTarkaShastra() {  
  return (  
    <React.Fragment>
      {/** create a title of 'Interactive TarkaSangraha' */}
      <div className="flex justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Interactive TarkaSangraha</h1>
      </div>
      <BubbleChart />
    </React.Fragment>
  );  
}  