
import React, { useState, useEffect } from 'react';
import { AnimationStage } from './types';
import Intro from './components/Intro';
import CodeToMockup from './components/CodeToMockup';
import ResponsiveShowcase from './components/ResponsiveShowcase';
import Outro from './components/Outro';
import FloatingIcons from './components/FloatingIcons';

const App: React.FC = () => {
  const [stage, setStage] = useState<AnimationStage>(AnimationStage.Intro);

  useEffect(() => {
    const sequence = [
      { stage: AnimationStage.Intro, duration: 4000 },
      { stage: AnimationStage.CodeToMockup, duration: 5500 },
      { stage: AnimationStage.Responsive, duration: 6500 },
      { stage: AnimationStage.Outro, duration: 5000 },
      { stage: AnimationStage.Final, duration: Infinity },
    ];

    let delay = 0;
    // Fix: Use ReturnType<typeof setTimeout> for browser compatibility instead of NodeJS.Timeout
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < sequence.length; i++) {
      delay += sequence[i].duration;
      if (i + 1 < sequence.length) {
        const nextStage = sequence[i + 1].stage;
        timeouts.push(setTimeout(() => setStage(nextStage), delay));
      }
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);
  
  const showFloatingIcons = stage === AnimationStage.CodeToMockup || stage === AnimationStage.Responsive;

  return (
    <main className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-black text-white font-sans">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/40 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(100,116,139,0.1)_1px,_transparent_1px)] [background-size:20px_20px] opacity-50"></div>
      
      <div className="z-10 w-full h-full flex items-center justify-center">
        {stage === AnimationStage.Intro && <Intro />}
        {stage === AnimationStage.CodeToMockup && <CodeToMockup />}
        {stage === AnimationStage.Responsive && <ResponsiveShowcase />}
        {(stage === AnimationStage.Outro || stage === AnimationStage.Final) && <Outro isFinal={stage === AnimationStage.Final} />}
      </div>
      
      <FloatingIcons isVisible={showFloatingIcons} />
    </main>
  );
};

export default App;
