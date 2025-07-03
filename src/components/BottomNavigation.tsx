import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Info, Scissors } from 'lucide-react';

interface BottomNavigationProps {
  activeTab?: 'om-oss' | 'boka' | 'info';
  onTabChange?: (tab: 'om-oss' | 'boka' | 'info') => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  activeTab, 
  onTabChange
}) => {
  // Simple tab change handlers
  const handleTabClick = (tab: 'om-oss' | 'boka' | 'info') => {
    console.log('Bottom nav clicked:', tab, 'Current active:', activeTab); // Debug log
    if (onTabChange) {
      onTabChange(tab);
      console.log('onTabChange called with:', tab); // Debug log
    }
  };

  // Animation variants
  const navItemVariants = {
    inactive: { 
      scale: 1,
      y: 0,
      color: "#6b7280"
    },
    active: { 
      scale: 1.1,
      y: -2,
      color: "#000000",
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="bottom-navigation fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
      style={{ zIndex: 9999 }} // NAVIGATION BAR - SECOND HIGHEST Z-INDEX (BELOW IFRAME MODAL)
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      <div className="flex max-w-4xl mx-auto">
        {/* About */}
        <motion.button
          onClick={() => handleTabClick('om-oss')}
          className={`flex-1 flex flex-col items-center justify-center py-3 px-2 transition-all duration-150 ${
            activeTab === 'om-oss'
              ? 'text-emerald-600 bg-emerald-50 border-t-2 border-emerald-600' 
              : 'text-gray-600 hover:text-emerald-600'
          }`}
          style={{ minHeight: '64px', minWidth: '48px' }}
          variants={navItemVariants}
          animate={activeTab === 'om-oss' ? "active" : "inactive"}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            <Users size={22} className="mb-1" />
          </motion.div>
          <span className="text-xs font-medium">Om oss</span>
          
          <AnimatePresence>
            {activeTab === 'om-oss' && (
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-barbiere-black rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 32, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.button>

        {/* Book */}
        <motion.button
          onClick={() => handleTabClick('boka')}
          className={`flex-1 flex flex-col items-center justify-center py-3 px-2 transition-all duration-150 ${
            activeTab === 'boka'
              ? 'text-barbiere-black bg-barbiere-pale-gray border-t-2 border-barbiere-black' 
              : 'text-gray-600 hover:text-barbiere-black'
          }`}
          style={{ minHeight: '64px', minWidth: '48px' }}
          variants={navItemVariants}
          animate={activeTab === 'boka' ? "active" : "inactive"}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            <Scissors size={22} className="mb-1" />
          </motion.div>
          <span className="text-xs font-medium">Boka</span>
          
          <AnimatePresence>
            {activeTab === 'boka' && (
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-barbiere-black rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 32, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.button>

        {/* Info */}
        <motion.button
          onClick={() => handleTabClick('info')}
          className={`flex-1 flex flex-col items-center justify-center py-3 px-2 transition-all duration-150 ${
            activeTab === 'info'
              ? 'text-barbiere-black bg-barbiere-pale-gray border-t-2 border-barbiere-black' 
              : 'text-gray-600 hover:text-barbiere-black'
          }`}
          style={{ minHeight: '64px', minWidth: '48px' }}
          variants={navItemVariants}
          animate={activeTab === 'info' ? "active" : "inactive"}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            <Info size={22} className="mb-1" />
          </motion.div>
          <span className="text-xs font-medium">Info</span>
          
          <AnimatePresence>
            {activeTab === 'info' && (
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-barbiere-black rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 32, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BottomNavigation;