import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Heart } from 'lucide-react';
import FloatingElements3D from './FloatingElements3D';
import { BouncingLogo } from './SpringAnimations';

const Enhanced3DSplashScreen: React.FC = () => {
  // Spring animations for the entire splash
  const containerSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 20 }
  });

  const textSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
    config: { tension: 300, friction: 30 }
  });

  return (
    <animated.div 
      style={containerSpring}
      className="fixed inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* 3D Background Elements */}
      <FloatingElements3D />

      <div className="text-center px-4 relative z-10">
        {/* Enhanced Logo with 3D effects */}
        <div className="flex items-center justify-center mb-8">
          <BouncingLogo className="relative">
            <div className="w-56 h-28 md:w-64 md:h-32 bg-white p-4 shadow-lg flex items-center justify-center relative overflow-hidden" style={{ borderRadius: '12px' }}>
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 opacity-20 animate-pulse"></div>
              <img 
                src="/La-barbiere-logga-1000-x-500-px-1024x512.png" 
                alt="La Barbiere Logo" 
                className="w-full h-full object-contain relative z-10" 
              />
              
              {/* Orbiting ring */}
              <div className="absolute inset-0 border-2 border-white/30 animate-spin" style={{ animationDuration: '8s', borderRadius: '12px' }}></div>
            </div>
          </BouncingLogo>
        </div>
        
        <animated.p 
          style={textSpring}
          className="text-white text-xs md:text-sm opacity-90 font-medium mb-8 text-center"
        >
          Jönköpings finaste frisörsalong
        </animated.p>

        {/* Enhanced loading animation */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/5 to-black/20 pointer-events-none"></div>
    </animated.div>
  );
};

export default Enhanced3DSplashScreen;