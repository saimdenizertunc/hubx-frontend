import { AnimatePresence, motion } from 'framer-motion';
import { Feature } from './Feature';
import { SECTION_TEXT } from '../types';
import { useNav } from '../context/NavContext';

export function FeatureSlider() {
  const { activeSection } = useNav();

  return (
    <div className="w-full h-auto min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Feature data={SECTION_TEXT[activeSection]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
