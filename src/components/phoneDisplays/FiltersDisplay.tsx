import { motion } from 'framer-motion';
import documentImage from '../../assets/images/sign.png';
import leftbarImage from '../../assets/images/leftbar.png';
import rightbarImage from '../../assets/images/rightbar.png';

export function FiltersDisplay() {
  return (
    <motion.div
      className="w-full h-full bg-black flex flex-col items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeIn' }}
    >
      <div className="w-full flex justify-between items-center px-4 py-1">
        <span className="text-xs text-white font-medium">9:41</span>
        <div className="flex space-x-2">
          <span className="text-white text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M3.75 5.25h12.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75Zm.75 1.5v6.5h11V6.75H4.5Z"
                clipRule="evenodd"
              />
              <path d="M3.75 5.25h12.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75Z" />
            </svg>
          </span>
          <span className="text-white text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M3.25 3A2.25 2.25 0 0 0 1 5.25v9.5A2.25 2.25 0 0 0 3.25 17h13.5A2.25 2.25 0 0 0 19 14.75v-9.5A2.25 2.25 0 0 0 16.75 3H3.25ZM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75V9h-15ZM4 5.25a.75.75 0 0 0-.75.75v.5h13.5v-.5a.75.75 0 0 0-.75-.75H4Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center px-6 py-2">
        <button className="bg-black/80 text-white text-xs py-1 px-2 rounded border border-white/30">
          FILTER
        </button>
        <button className="text-white text-sm flex items-center">
          Auto-Enhance
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </button>
      </div>

      <div className="text-center text-white text-sm mb-2">
        Applying filters...
      </div>

      <motion.div
        className="relative w-4/5 h-3/5 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {/* Left filter bar */}
        <motion.div
          className="absolute -left-10 top-1/3 transform -translate-y-1/2 h-[280px] w-12 z-30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img
            src={leftbarImage}
            alt="Brightness Control"
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Right filter bar */}
        <motion.div
          className="absolute -right-10 top-1/3 transform -translate-y-1/2 h-[280px] w-12 z-30"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <img
            src={rightbarImage}
            alt="Color Control"
            className="h-full w-full object-contain"
          />
        </motion.div>

        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white z-20"></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white z-20"></div>
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white z-20"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white z-20"></div>

        <div className="w-full h-full overflow-hidden">
          <motion.img
            src={documentImage}
            alt="Document"
            className="w-full h-full object-cover"
            initial={{ filter: 'brightness(1) contrast(1)' }}
            animate={{
              filter: [
                'brightness(1) contrast(1)',
                'brightness(1.2) contrast(1.1)',
                'brightness(1.1) contrast(1.2) saturate(1.05)',
              ],
            }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
              times: [0, 0.7, 1],
            }}
          />

          {/* Color filter overlays */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-500/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-green-500/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          />

          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </motion.div>

      <div className="w-full px-4 pb-2 mt-auto space-y-2">
        <div className="flex items-center justify-between text-white text-[10px]">
          <span>Brightness</span>
          <div className="w-3/4 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: '50%' }}
              animate={{ width: '65%' }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <span>65%</span>
        </div>
        <div className="flex items-center justify-between text-white text-[10px]">
          <span>Contrast</span>
          <div className="w-3/4 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: '50%' }}
              animate={{ width: '70%' }}
              transition={{ duration: 1.8, delay: 0.3 }}
            />
          </div>
          <span>70%</span>
        </div>

        <div className="flex items-center justify-between text-white text-[10px]">
          <span>Saturation</span>
          <div className="w-3/4 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-yellow-500"
              initial={{ width: '40%' }}
              animate={{ width: '55%' }}
              transition={{ duration: 2, delay: 0.6 }}
            />
          </div>
          <span>55%</span>
        </div>
      </div>
    </motion.div>
  );
}
