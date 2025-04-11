import { NavigationSection } from '../types';
import { useNav } from '../context/NavContext';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ScannerDisplay,
  SignDisplay,
  BatchDisplay,
  FiltersDisplay,
  ExportDisplay,
} from './phoneDisplays';

export function MobilePreview() {
  const { activeSection } = useNav();

  // Component slide-up animation
  const containerVariants = {
    initial: { opacity: 0, y: 200 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  // Content switch animation
  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="phone-container mx-auto relative"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="phone-frame border-[10px] border-gray-800 rounded-[36px] bg-phoneFrameBg shadow-xl overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-10"></div>

        <div className="phone-content rounded-[26px] overflow-hidden relative h-full">
          <AnimatePresence mode="wait">
            {activeSection === NavigationSection.SCANNER && (
              <motion.div
                className="w-full h-full"
                key="scanner"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ScannerDisplay />
              </motion.div>
            )}

            {activeSection === NavigationSection.SIGN && (
              <motion.div
                className="w-full h-full"
                key="sign"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <SignDisplay />
              </motion.div>
            )}

            {activeSection === NavigationSection.BATCH && (
              <motion.div
                className="w-full h-full"
                key="batch"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <BatchDisplay />
              </motion.div>
            )}

            {activeSection === NavigationSection.FILTERS && (
              <motion.div
                className="w-full h-full"
                key="filters"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <FiltersDisplay />
              </motion.div>
            )}

            {activeSection === NavigationSection.EXPORT && (
              <motion.div
                className="w-full h-full"
                key="export"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ExportDisplay />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-400 rounded-full"></div>
    </motion.div>
  );
}
