import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Scissors, Palette, Users, GraduationCap } from 'lucide-react';
import BookingIframe from './BookingIframe';
import BottomNavigation from './BottomNavigation';
import InfoView from './InfoView';
import About from './OmOss';

interface HairService {
  name: string;
  duration: string;
  price: string;
  bookingUrl: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  services: HairService[];
}

const HairBookingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('herr');
  const [selectedService, setSelectedService] = useState<HairService | null>(null);
  const [activeTab, setActiveTab] = useState<'om-oss' | 'boka' | 'info'>('boka');

  // Handle tab changes - this is the key function
  const handleTabChange = (tab: 'om-oss' | 'boka' | 'info') => {
    console.log('Tab change requested:', tab); // Debug log
    console.log('Current activeTab before change:', activeTab); // Debug log
    setActiveTab(tab);
    // Scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close any open booking iframe when switching tabs
    if (selectedService) {
      setSelectedService(null);
    }
    console.log('Tab changed to:', tab); // Debug log
  };

  // Hair service categories with real booking URLs
  const serviceCategories: ServiceCategory[] = [
    {
      id: 'herr',
      title: "Herrtjänster",
      icon: <Scissors size={18} className="text-barbiere-black" />,
      services: [
        { 
          name: "Klippning", 
          duration: "30 min", 
          price: "350 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/klippning-1246369"
        },
        { 
          name: "Klippning & Skägg", 
          duration: "45 min", 
          price: "450 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/klippning-skagg-1246708"
        },
        { 
          name: "Barnklippning 0–12 år", 
          duration: "30 min", 
          price: "280 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/barn-klippning-0-12-ar-1247114"
        },
        { 
          name: "Pensionär Klippning", 
          duration: "20 min", 
          price: "250 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/pensionar-klippning-1247115"
        },
        { 
          name: "Skägg, långt & kort", 
          duration: "30 min", 
          price: "260 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/skagg-langt-kort-2020159"
        },
        { 
          name: "Snaggning", 
          duration: "15 min", 
          price: "200 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/snaggning-3004402"
        },
        { 
          name: "Snaggning & Skägg", 
          duration: "30 min", 
          price: "350 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/snaggning-skagg-2997186"
        }
      ]
    },
    {
      id: 'student',
      title: "Student",
      icon: <GraduationCap size={18} className="text-blue-600" />,
      services: [
        { 
          name: "Studentklippning", 
          duration: "30 min", 
          price: "300 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/student-klippning-1247113"
        },
        { 
          name: "Student, Klippning & Skägg", 
          duration: "45 min", 
          price: "400 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/student-klippning-skagg-2997200"
        }
      ]
    },
    {
      id: 'dam',
      title: "Damtjänster",
      icon: <Palette size={18} className="text-pink-600" />,
      services: [
        { 
          name: "Damklippning kort hår", 
          duration: "45 min", 
          price: "380 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/damklippning-kort-har-3186790"
        },
        { 
          name: "Damklippning långt hår", 
          duration: "60 min", 
          price: "500 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/damklippning-langt-har-3186792"
        },
        { 
          name: "Damklippning (Pensionär)", 
          duration: "45 min", 
          price: "350 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/damklippning-pensionar-3186794"
        },
        { 
          name: "Färgning kort hår", 
          duration: "105 min", 
          price: "1 000 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/fargning-kort-har-3186809"
        },
        { 
          name: "Färgning långt hår", 
          duration: "150 min", 
          price: "1 700 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/fargning-langt-har-3186806"
        },
        { 
          name: "Färgning utväxt kort hår", 
          duration: "105 min", 
          price: "700 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/fargning-utvaxt-kort-har-3186810"
        },
        { 
          name: "Färgning utväxt långt hår", 
          duration: "105 min", 
          price: "900 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/fargning-utvaxt-langt-har-3186816"
        },
        { 
          name: "Slingor kort hår", 
          duration: "120 min", 
          price: "1 300 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/slingor-kort-har-3186804"
        },
        { 
          name: "Slingor långt hår", 
          duration: "150 min", 
          price: "1 700 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/slingor-langt-har-3186799"
        },
        { 
          name: "Balayage", 
          duration: "165 min", 
          price: "1 900 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/balayage-3186798"
        },
        { 
          name: "Nyansering kort hår", 
          duration: "60 min", 
          price: "450 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/nyansering-kort-har-3186822"
        },
        { 
          name: "Nyansering långt hår", 
          duration: "75 min", 
          price: "550 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/nyansering-langt-har-3186820"
        },
        { 
          name: "Luggklippning", 
          duration: "15 min", 
          price: "150 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/luggklippning-3186795"
        },
        { 
          name: "Fön och tvätt", 
          duration: "30 min", 
          price: "350 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/fon-och-tvatt-3186833"
        },
        { 
          name: "Färgning av bryn", 
          duration: "15 min", 
          price: "150 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/fargning-av-bryn-3186829"
        },
        { 
          name: "Färgning av fransar", 
          duration: "30 min", 
          price: "220 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/fargning-av-fransar-3186828"
        },
        { 
          name: "Brynplock", 
          duration: "15 min", 
          price: "150 kr",
          bookingUrl: "https://www.bokadirekt.se/boka-tjanst/la-barbiere-37620/brynplock-3186827"
        }
      ]
    }
  ];

  const handleBookingClick = (service: HairService) => {
    setSelectedService(service);
  };

  const closeBookingIframe = () => {
    setSelectedService(null);
  };

  // Get current category
  const currentCategory = serviceCategories.find(cat => cat.id === selectedCategory) || serviceCategories[0];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const serviceVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Show Om Oss content
  if (activeTab === 'om-oss') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex-1 pb-20 overflow-y-auto">
          <About />
        </div>
        <BottomNavigation 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
        />
      </div>
    );
  }

  // Show Info content
  if (activeTab === 'info') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex-1 pb-20 overflow-y-auto">
          <InfoView />
        </div>
        <BottomNavigation 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
        />
      </div>
    );
  }

  // Show Boka content (default)
  return (
    <>
      <motion.div 
        className="min-h-screen bg-gray-50 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <motion.div 
          className="booking-page-header bg-gradient-to-r from-barbiere-black to-barbiere-dark-gray text-white py-4 px-4 shadow-lg transition-all duration-400 ease-out"
          initial={{ y: 0, opacity: 1 }}
          style={{ 
            transform: 'translateY(0)',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out'
          }}
        >
          <div className="max-w-4xl mx-auto flex items-center justify-center">
            <div className="w-20 h-10 bg-white flex items-center justify-center" style={{ borderRadius: '4px' }}>
              <img 
                src="/La-barbiere-logga-1000-x-500-px-1024x512.png" 
                alt="La Barbiere Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="flex-1 pb-20 overflow-y-auto">
          <motion.div 
            className="p-4 max-w-4xl mx-auto space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Welcome Message */}
            <motion.div 
              className="bg-gradient-to-r from-barbiere-pale-gray to-white rounded-xl p-6 border border-gray-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center">
                <h2 className="text-lg font-playfair font-bold text-barbiere-black mb-2">
                  Jönköpings finaste frisörsalong
                </h2>
                <p className="text-barbiere-dark-gray text-sm leading-relaxed">
                  Professionella behandlingar för både dam och herr. Välkommen till La Barbiere 
                  där vi skapar den perfekta looken för dig.
                </p>
              </div>
            </motion.div>

            {/* Category Tabs */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-4 border border-gray-100"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {serviceCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-barbiere-black text-white shadow-md'
                        : 'bg-gray-100 text-barbiere-dark-gray hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Services List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {currentCategory.services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-4 border border-gray-100"
                      variants={serviceVariants}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-semibold text-barbiere-black text-sm leading-tight flex-1 mr-3">
                          {service.name}
                        </h5>
                        <div className="text-right flex-shrink-0">
                          <div className="font-bold text-barbiere-black text-sm">
                            {service.price}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-barbiere-medium-gray">
                          <Clock size={12} className="mr-1" />
                          <span className="text-xs">{service.duration}</span>
                        </div>
                        <motion.button 
                          onClick={() => handleBookingClick(service)}
                          className="bg-barbiere-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-barbiere-dark-gray transition-colors duration-200 shadow-md"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          BOKA
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
        />
      </motion.div>

      {/* Booking Iframe Modal */}
      <AnimatePresence>
        {selectedService && (
          <BookingIframe
            bookingUrl={selectedService.bookingUrl}
            serviceName={selectedService.name}
            onClose={closeBookingIframe}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default HairBookingPage;