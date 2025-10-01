
import React from 'react';

interface OutroProps {
    isFinal: boolean;
}

const Outro: React.FC<OutroProps> = ({ isFinal }) => {
  return (
    <div className={`text-center transition-opacity duration-1000 ${isFinal ? 'opacity-100' : 'opacity-0 animate-fade-in'}`}>
       <h1 className="text-5xl md:text-7xl font-black tracking-wider uppercase animate-glow">
        Arya Develop In
      </h1>
      <div className="relative mt-12 overflow-hidden">
        <h2 className="text-xl md:text-2xl font-light tracking-widest text-cyan-300 relative animate-light-streak animate-fade-in-up" style={{ animationDelay: '0.5s'}}>
          Creative Web Solutions • Modern Design • Advanced Development
        </h2>
      </div>
    </div>
  );
};

export default Outro;
