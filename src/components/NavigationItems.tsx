import { useNav } from '../context/NavContext';
import { NAV_ITEMS } from '../constants/nav-items';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { NavigationSection } from '../types';

export default function NavigationItems() {
  const { activeSection, setActiveSection } = useNav();
  const [clickedItem, setClickedItem] = useState<NavigationSection | null>(
    null,
  );
  const [hoveredItem, setHoveredItem] = useState<NavigationSection | null>(
    null,
  );

  const handleClick = (id: NavigationSection) => {
    setClickedItem(id);
    setActiveSection(id);

    // Reset the clicked state after animation completes
    setTimeout(() => {
      setClickedItem(null);
    }, 800);
  };

  return (
    <div className="relative w-full border-b border-borderLight shadow-nav rounded-t-3xl z-20">
      <div className="flex w-full overflow-x-auto md:overflow-visible md:justify-center scrollbar-hide">
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeSection === item.id;
          const isClicked = clickedItem === item.id;
          const isHovered = hoveredItem === item.id;

          return (
            <div
              key={item.id}
              className={`relative flex-shrink-0 ${index > 0 ? 'md:border-l border-borderLight' : ''}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.div
                className={`relative flex items-center h-[70px] xs:h-[75px] sm:h-[80px] md:h-[100px] lg:h-[124px] px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 cursor-pointer transition-all duration-500 ease-in-out
                  ${isActive ? 'border-b-2 border-primary' : ''} 
                  ${isActive ? 'bg-[rgba(3,129,255,0.03)] md:bg-[rgba(3,129,255,0.05)]' : ''}`}
                onClick={() => handleClick(item.id)}
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center">
                  <div className="relative">
                    <motion.div
                      className={`w-[36px] h-[36px] xs:w-[40px] xs:h-[40px] sm:w-[44px] sm:h-[44px] md:w-[50px] md:h-[50px] lg:w-[56px] lg:h-[56px] rounded-full border bg-white flex items-center justify-center transition-all duration-300
                      ${isActive ? 'border-primary' : isHovered ? 'md:border-primary' : 'border-borderLight'}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <AnimatePresence>
                        {isClicked && (
                          <motion.div
                            className="absolute inset-0 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: 'easeOut',
                            }}
                          >
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 100 100"
                              style={{ position: 'absolute' }}
                            >
                              <motion.circle
                                cx="50"
                                cy="50"
                                r="48"
                                fill="transparent"
                                strokeWidth="3"
                                stroke="var(--primary-color, #0381FF)"
                                initial={{ pathLength: 0, opacity: 1 }}
                                animate={{
                                  pathLength: 1,
                                  opacity: [0.3, 0.6, 1, 0.6, 0.3],
                                }}
                                exit={{ pathLength: 1, opacity: 0 }}
                                transition={{
                                  pathLength: {
                                    duration: 0.8,
                                    ease: 'easeInOut',
                                  },
                                  opacity: {
                                    duration: 1.2,
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                  },
                                }}
                              />
                            </svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <img
                        src={item.icon}
                        alt={item.label}
                        className={`w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${isActive ? 'filter-primary' : isHovered ? 'md:filter-primary' : 'filter-gray'}`}
                      />
                    </motion.div>
                  </div>
                  <div className="ml-2 xs:ml-2.5 sm:ml-3 md:ml-3.5 lg:ml-4">
                    <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-medium leading-tight md:leading-snug lg:leading-normal text-textDark">
                      {item.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
