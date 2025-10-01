
import React, { useState, useEffect } from 'react';

const FAKE_CODE = `
const Welcome: React.FC = () => {
  return (
    <div className="main-container">
      <HeroSection>
        <h1>Creative Web Solutions</h1>
        <p>Modern Design & Advanced Development</p>
      </HeroSection>
      <FeaturedWork />
    </div>
  );
}
`;

const CodeToMockup: React.FC = () => {
  const [showCode, setShowCode] = useState(true);
  const [showWireframe, setShowWireframe] = useState(false);
  const [showMockup, setShowMockup] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowWireframe(true), 500);
    const t2 = setTimeout(() => setShowCode(false), 2000);
    const t3 = setTimeout(() => setShowMockup(true), 2500);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="relative w-[700px] h-[450px] bg-gray-900/30 rounded-lg shadow-2xl shadow-blue-500/20 border border-gray-700 p-4 font-mono text-sm overflow-hidden">
       {/* Code */}
       <div className={`absolute inset-4 transition-opacity duration-1000 ${showCode ? 'opacity-40' : 'opacity-0'}`}>
        <pre>
          <code className="text-cyan-300">
            {FAKE_CODE.trim().split('').map((char, i) => (
              <span key={i} className="opacity-0" style={{ animation: `fade-in 1s forwards ${i*10}ms` }}>{char}</span>
            ))}
          </code>
        </pre>
      </div>

      {/* Wireframe */}
      <div className={`absolute inset-0 p-8 transition-opacity duration-1000 ${showWireframe ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full h-full border-2 border-dashed border-cyan-500 rounded-md p-4 space-y-4">
          <div className="h-1/4 bg-cyan-500/20 border border-cyan-500 rounded flex items-center justify-center text-cyan-400">NAV</div>
          <div className="h-1/2 bg-cyan-500/20 border border-cyan-500 rounded flex items-center justify-center text-cyan-400">HERO</div>
          <div className="flex-grow bg-cyan-500/20 border border-cyan-500 rounded flex items-center justify-center text-cyan-400">CONTENT</div>
        </div>
      </div>

      {/* Mockup */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showMockup ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full h-full bg-slate-900 flex flex-col">
            <nav className="p-5 flex justify-between items-center bg-slate-800/50">
                <div className="font-bold text-white">Logo</div>
                <div className="flex space-x-6 text-gray-300">
                    <span>Home</span>
                    <span>About</span>
                    <span>Portfolio</span>
                </div>
            </nav>
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-blue-500/20 to-transparent">
                <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>Sleek Website Design</h1>
                <p className="text-xl text-gray-300 animate-fade-in-up" style={{animationDelay: '500ms'}}>A fusion of form and function.</p>
                <div className="w-full h-32 mt-8 flex justify-center gap-4">
                    <div className="w-1/3 h-full bg-slate-700/50 rounded-lg animate-fade-in-up" style={{animationDelay: '700ms'}}></div>
                    <div className="w-1/3 h-full bg-slate-700/50 rounded-lg animate-fade-in-up" style={{animationDelay: '800ms'}}></div>
                    <div className="w-1/3 h-full bg-slate-700/50 rounded-lg animate-fade-in-up" style={{animationDelay: '900ms'}}></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CodeToMockup;
