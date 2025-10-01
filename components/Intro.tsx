
import React, { useMemo } from 'react';

const Intro: React.FC = () => {
  const brandName = "Arya Develop In";

  const letters = useMemo(() => brandName.split('').map((char, index) => (
    <span
      key={index}
      className="inline-block opacity-0 animate-particle-emerge"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  )), [brandName]);

  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-6xl md:text-8xl font-black tracking-wider uppercase animate-glow">
        {letters}
      </h1>
      <div className="mt-8 h-1 w-32 bg-cyan-400 mx-auto rounded-full animate-particle-emerge" style={{ animationDelay: `${brandName.length * 50 + 200}ms` }}></div>
    </div>
  );
};

export default Intro;
