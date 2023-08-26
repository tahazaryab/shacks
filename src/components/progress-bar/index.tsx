import React from 'react';
interface ProgressBarProps {
    checkpoints: string[];
    progress: number;
  }

const ProgressBar= ({ checkpoints, progress } : ProgressBarProps): JSX.Element => {
    return (
        <div className="flex items-center space-x-4">
        {checkpoints.map((checkpoint, index) => (
          <React.Fragment key={index}>
            <div className={`relative w-6 h-6 rounded-full border-2 border-black ${progress >= index ? 'bg-green-100 border-black' : ''}`}>
                {index === progress && (
                <div className="absolute w-5 h-5 border-white border-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )} 
            </div>
            <div className={`text-xs ${index === progress ? 'text-black font-semibold' : index < progress ? 'text-green-100 font-semibold' : 'text-black'}`}>
            {checkpoint}
            </div>
            {index < checkpoints.length - 1 && <div className={`h-0.5 w-16 bg-black ${progress > index ? 'red-100' : ''}`} />}
          </React.Fragment>
        ))}
      </div>)
  };
  
  export default ProgressBar;
  