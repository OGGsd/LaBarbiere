import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Phone, Wifi, WifiOff, Shield } from 'lucide-react';

interface BookingIframeProps {
  bookingUrl: string;
  serviceName: string;
  onClose: () => void;
}

const BookingIframe: React.FC<BookingIframeProps> = ({ bookingUrl, serviceName, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadTimeoutRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Monitor online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // CRITICAL: Prevent body scroll and ensure fullscreen on ALL devices
    document.body.classList.add('iframe-modal-open');
    document.documentElement.classList.add('iframe-modal-open');
    
    // iOS Safari specific: Prevent zoom and ensure fullscreen
    const viewport = document.querySelector('meta[name=viewport]');
    const originalContent = viewport?.getAttribute('content');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content');
    }
    
    // Set timeout for iframe loading
    loadTimeoutRef.current = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 15000);

    // ENHANCED: Calculate exact fullscreen heights for ALL devices
    const updateHeights = () => {
      // Get actual viewport dimensions
      const vh = window.visualViewport?.height || window.innerHeight;
      const vw = window.visualViewport?.width || window.innerWidth;
      
      // iPhone/iPad specific calculations
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      
      // Header height (compact for mobile)
      const headerHeight = 40; // Reduced for more iframe space
      
      // Calculate available height - FULLSCREEN minus minimal header
      const availableHeight = vh - headerHeight;
      
      console.log('Device info:', { isIOS, isAndroid, vh, vw, availableHeight });
      
      if (containerRef.current) {
        containerRef.current.style.height = `${availableHeight}px`;
        containerRef.current.style.maxHeight = `${availableHeight}px`;
        containerRef.current.style.minHeight = `${availableHeight}px`;
        containerRef.current.style.width = `${vw}px`;
        containerRef.current.style.maxWidth = `${vw}px`;
      }
      
      if (iframeRef.current) {
        iframeRef.current.style.height = `${availableHeight}px`;
        iframeRef.current.style.minHeight = `${availableHeight}px`;
        iframeRef.current.style.maxHeight = `${availableHeight}px`;
        iframeRef.current.style.width = `${vw}px`;
        iframeRef.current.style.maxWidth = `${vw}px`;
      }
    };

    // Initial height calculation
    updateHeights();

    // Enhanced resize handling for mobile devices
    const handleResize = () => {
      // Immediate update
      updateHeights();
      // Delayed update for iOS keyboard animations
      setTimeout(updateHeights, 100);
      setTimeout(updateHeights, 300);
      setTimeout(updateHeights, 500);
    };

    // Listen to multiple resize events for better mobile support
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Visual Viewport API for better mobile support (iOS Safari)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      window.visualViewport.addEventListener('scroll', handleResize);
    }

    // iOS specific: Handle safe area and status bar
    if (isIOS) {
      // Force fullscreen on iOS
      const metaThemeColor = document.querySelector('meta[name=theme-color]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#000000');
      }
      
      // Add iOS specific styles
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    }

    return () => {
      document.body.classList.remove('iframe-modal-open');
      document.documentElement.classList.remove('iframe-modal-open');
      
      // Restore original viewport
      if (viewport && originalContent) {
        viewport.setAttribute('content', originalContent);
      }
      
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
        window.visualViewport.removeEventListener('scroll', handleResize);
      }
    };
  }, [isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }

    // Ensure iframe takes exact fullscreen after load
    if (iframeRef.current && containerRef.current) {
      const vh = window.visualViewport?.height || window.innerHeight;
      const vw = window.visualViewport?.width || window.innerWidth;
      const headerHeight = 40;
      const availableHeight = vh - headerHeight;
      
      iframeRef.current.style.height = `${availableHeight}px`;
      iframeRef.current.style.minHeight = `${availableHeight}px`;
      iframeRef.current.style.maxHeight = `${availableHeight}px`;
      iframeRef.current.style.width = `${vw}px`;
      iframeRef.current.style.maxWidth = `${vw}px`;
    }
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }
  };

  const handleFallbackBooking = () => {
    // Enhanced mobile browser opening
    try {
      // Method 1: Try window.open with mobile-optimized parameters
      const newWindow = window.open(
        bookingUrl, 
        '_blank', 
        'noopener,noreferrer,width=' + (window.screen.width || 375) + ',height=' + (window.screen.height || 667) + ',scrollbars=yes,resizable=yes,fullscreen=yes'
      );
      
      // Method 2: Fallback for mobile browsers
      setTimeout(() => {
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          window.location.href = bookingUrl;
        }
      }, 100);
    } catch (error) {
      // Final fallback: Direct navigation
      window.location.href = bookingUrl;
    }
    onClose();
  };

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    
    // Reload iframe with cache busting
    if (iframeRef.current) {
      const url = new URL(bookingUrl);
      url.searchParams.set('_t', Date.now().toString());
      url.searchParams.set('mobile', '1');
      url.searchParams.set('fullscreen', '1');
      iframeRef.current.src = url.toString();
    }
  };

  // Enhanced postMessage handling for mobile
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Security: Only accept messages from allowed domains
      if (!event.origin.includes('bokadirekt.se')) return;
      
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        
        // Handle mobile-specific events
        if (data?.type === 'mobile_navigation' && data?.url) {
          console.log('Mobile iframe navigation detected:', data.url);
        }
        
        // Handle fullscreen requests
        if (data?.type === 'request_fullscreen') {
          // Already in fullscreen, acknowledge
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage({
              type: 'fullscreen_active',
              mobile: true,
              ios: /iPad|iPhone|iPod/.test(navigator.userAgent),
              android: /Android/.test(navigator.userAgent)
            }, '*');
          }
        }
        
        // Handle completion events
        if (data?.type === 'booking_complete') {
          console.log('Booking completed successfully');
        }
      } catch (error) {
        console.log('Error parsing postMessage:', error);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Enhanced touch handling for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    // Prevent iOS Safari from interfering with iframe touch events
    e.stopPropagation();
  };

  // Animation variants optimized for mobile
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.98,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.98,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        delay: 0.1
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="iframe-modal fixed inset-0 bg-black bg-opacity-95 flex flex-col"
        style={{ 
          zIndex: 2147483647, // Maximum z-index for absolute priority
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          maxHeight: '100vh',
          minWidth: '100vw',
          minHeight: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Ultra-compact header for maximum iframe space */}
        <motion.div 
          className="iframe-modal-header bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 text-white px-2 py-1 flex items-center justify-between shadow-lg relative flex-shrink-0"
          style={{ 
            zIndex: 2147483648, // Header at absolute front
            height: '40px',
            minHeight: '40px',
            maxHeight: '40px'
          }}
          variants={headerVariants}
        >
          <div className="flex items-center min-w-0 flex-1">
            <motion.div
              className="w-4 h-4 mr-2 rounded-full bg-white p-0.5 flex-shrink-0 flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/La-barbiere-logga-1000-x-500-px-1024x512.png" 
                alt="La Barbiere Logo" 
                className="w-full h-full object-contain" 
              />
            </motion.div>
            <div className="min-w-0 flex-1">
              <motion.h2 
                className="font-bold text-xs truncate"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Säker bokning
              </motion.h2>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
            {/* Online indicator */}
            <motion.div 
              className="flex items-center"
              animate={{
                scale: isOnline ? [1, 1.1, 1] : 1,
                opacity: isOnline ? [1, 0.7, 1] : 0.5
              }}
              transition={{
                duration: 2,
                repeat: isOnline ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              {isOnline ? (
                <Wifi size={10} className="text-green-300" />
              ) : (
                <WifiOff size={10} className="text-red-300" />
              )}
            </motion.div>
            <motion.button
              onClick={onClose}
              className="p-1 hover:bg-black hover:bg-opacity-20 rounded-full transition-colors flex-shrink-0"
              aria-label="Stäng bokning"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <X size={14} />
            </motion.button>
          </div>
        </motion.div>

        {/* FULLSCREEN Content Area - Takes remaining space */}
        <motion.div 
          ref={containerRef}
          className="iframe-modal-content flex-1 relative bg-white overflow-hidden iframe-container"
          onTouchStart={handleTouchStart}
          style={{ 
            width: '100vw',
            maxWidth: '100vw',
            minWidth: '100vw',
            flex: '1 1 auto',
            zIndex: 2147483646, // Content area high z-index
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          {/* Loading State */}
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                className="iframe-modal-overlay absolute inset-0 flex items-center justify-center bg-white"
                style={{ zIndex: 2147483649 }} // Loading overlay at absolute front
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center px-4">
                  <motion.div 
                    className="w-8 h-8 border-b-2 border-emerald-600 rounded-full mx-auto mb-3"
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.p 
                    className="text-gray-600 text-sm"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Laddar säker bokning...
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Offline State */}
          <AnimatePresence>
            {!isOnline && (
              <motion.div 
                className="iframe-modal-overlay absolute inset-0 flex items-center justify-center bg-white p-4"
                style={{ zIndex: 2147483649 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="text-center max-w-sm">
                  <WifiOff size={32} className="text-gray-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Ingen internetanslutning
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Kontrollera din internetanslutning och försök igen.
                  </p>
                  <motion.button
                    onClick={handleRetry}
                    className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors disabled:opacity-50"
                    disabled={!isOnline}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Försök igen
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error State */}
          <AnimatePresence>
            {hasError && isOnline && (
              <motion.div 
                className="iframe-modal-overlay absolute inset-0 flex items-center justify-center bg-white p-4"
                style={{ zIndex: 2147483649 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center max-w-sm">
                  <AlertCircle size={32} className="text-red-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Kunde inte ladda bokning
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Försök igen eller öppna bokningen i din webbläsare.
                  </p>
                  <div className="space-y-3">
                    <motion.button
                      onClick={handleRetry}
                      className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Försök igen
                    </motion.button>
                    <motion.button
                      onClick={handleFallbackBooking}
                      className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Öppna i webbläsare
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FULLSCREEN Iframe */}
          {isOnline && (
            <motion.iframe
              ref={iframeRef}
              src={`${bookingUrl}${bookingUrl.includes('?') ? '&' : '?'}mobile=1&fullscreen=1&t=${Date.now()}`}
              className="w-full border-0 bg-white block"
              style={{ 
                width: '100vw',
                maxWidth: '100vw',
                minWidth: '100vw',
                height: '100%',
                minHeight: '100%',
                maxHeight: '100%',
                zIndex: 2147483645, // Iframe content
                // Enhanced mobile optimizations
                WebkitOverflowScrolling: 'touch',
                overflow: 'auto',
                // iOS Safari specific
                WebkitTransform: 'translateZ(0)',
                transform: 'translateZ(0)',
                // Prevent iOS Safari borders/margins
                margin: 0,
                padding: 0,
                border: 'none',
                outline: 'none'
              }}
              // Enhanced security sandbox for mobile
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-downloads"
              scrolling="auto"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title={`Säker bokning - ${serviceName}`}
              loading="eager"
              // Mobile-specific attributes
              allow="payment; geolocation; camera; microphone; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              // Accessibility
              aria-label={`Bokningsformulär för ${serviceName}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingIframe;