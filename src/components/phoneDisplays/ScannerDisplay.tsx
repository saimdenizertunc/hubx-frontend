import { motion } from 'framer-motion';
import documentImage from '../../assets/images/document.jpg';

export function ScannerDisplay() {
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
          HD
        </button>
        <button className="text-white text-sm flex items-center">
          Auto
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
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
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
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </button>
      </div>

      <div className="text-center text-white text-sm mb-2">
        Fit into screen and snap
      </div>

      <motion.div
        className="relative w-4/5 h-3/5 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white"></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white"></div>
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white"></div>

        <div className="w-full h-full overflow-hidden">
          <img
            src={documentImage}
            alt="Document"
            className="w-full h-full object-cover"
          />

          <motion.div
            className="absolute inset-0 bg-primary/20"
            animate={{
              opacity: [0, 0.4, 0],
              top: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </motion.div>

      <div className="w-full text-white text-[10px] px-4 pb-2 mt-auto flex justify-between">
        <span>Page 1 of 1</span>
        <span>PDF</span>
      </div>
    </motion.div>
  );
}
