
import React from 'react';

const MockWebsite: React.FC = () => (
    <div className="w-full h-full bg-slate-900 p-2 sm:p-4">
        <div className="w-full h-1/6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md animate-fade-in-up" style={{animationDelay: '0.5s'}}></div>
        <div className="mt-2 sm:mt-4 flex space-x-2 sm:space-x-4 h-4/6">
            <div className="w-2/3 bg-slate-700 rounded-md animate-fade-in-up" style={{animationDelay: '0.7s'}}></div>
            <div className="w-1/3 bg-slate-800 rounded-md animate-fade-in-up" style={{animationDelay: '0.9s'}}></div>
        </div>
    </div>
);


const ResponsiveShowcase: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center animate-fade-in perspective-container">
      <div className="relative w-full max-w-5xl h-96 preserve-3d">
        {/* Laptop */}
        <div className="absolute w-[600px] h-[380px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-y-in" style={{ animationDelay: '0s' }}>
          <div className="relative w-full h-full bg-gray-800 border-4 border-gray-600 rounded-xl p-2 shadow-2xl shadow-black">
            <MockWebsite />
             <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[700px] h-3 bg-gray-700 rounded-b-lg border-x-4 border-b-4 border-gray-600"></div>
          </div>
        </div>

        {/* Tablet */}
        <div className="absolute w-[250px] h-[340px] top-1/2 left-[calc(50%-450px)] -translate-y-1/2 rotate-y-in" style={{ animationDelay: '0.4s' }}>
          <div className="w-full h-full bg-gray-800 border-4 border-gray-600 rounded-xl p-1.5 shadow-2xl shadow-black">
            <MockWebsite />
          </div>
        </div>

        {/* Mobile */}
        <div className="absolute w-[140px] h-[280px] top-1/2 right-[calc(50%-420px)] -translate-y-1/2 rotate-y-in" style={{ animationDelay: '0.8s' }}>
          <div className="w-full h-full bg-gray-800 border-4 border-gray-600 rounded-2xl p-1 shadow-2xl shadow-black">
             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-gray-600 rounded-full"></div>
             <div className="w-full h-full rounded-lg overflow-hidden">
                <MockWebsite />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveShowcase;
