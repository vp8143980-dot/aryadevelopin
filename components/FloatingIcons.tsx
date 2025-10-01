
import React from 'react';
import { HtmlIcon, CssIcon, JsIcon, ReactIcon } from './icons';

interface FloatingIconsProps {
  isVisible: boolean;
}

const FloatingIcons: React.FC<FloatingIconsProps> = ({ isVisible }) => {
    const icons = [
        { Icon: HtmlIcon, position: 'top-1/4 left-1/4', delay: '0s', duration: '8s' },
        { Icon: CssIcon, position: 'top-1/3 right-1/4', delay: '1s', duration: '10s' },
        { Icon: JsIcon, position: 'bottom-1/4 left-1/3', delay: '0.5s', duration: '9s' },
        { Icon: ReactIcon, position: 'bottom-1/3 right-1/3', delay: '1.5s', duration: '7s' },
    ];
    
    return (
        <div className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {icons.map(({ Icon, position, delay, duration }, index) => (
                <div 
                    key={index}
                    className={`absolute w-16 h-16 ${position} opacity-0`}
                    style={{
                        animation: `float ${duration} ease-in-out infinite ${delay}, fade-in 1s ease-out forwards ${delay}`,
                        filter: 'drop-shadow(0 0 10px rgba(0, 191, 255, 0.7))'
                    }}
                >
                    <Icon />
                </div>
            ))}
        </div>
    );
};

export default FloatingIcons;
