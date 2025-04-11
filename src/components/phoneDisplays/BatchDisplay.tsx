import { motion } from 'framer-motion';
import batchImage from '../../assets/images/batch.png';

export function BatchDisplay() {
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
          BATCH
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
        <button className="text-white flex items-center">
          <span className="text-xs mr-1">2/3</span>
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
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
            />
          </svg>
        </button>
      </div>

      <div className="text-center text-white text-sm mb-2">
        Scanning batch sheets
      </div>

      <motion.div
        className="relative w-4/5 h-3/5 mb-4 perspective-500 transform-gpu"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white z-30"></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white z-30"></div>
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white z-30"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white z-30"></div>

        <div className="w-full h-full overflow-hidden">
          {/* Sheet 3 (bottom) */}
          <motion.div
            className="absolute inset-0 z-10 transform-gpu"
            initial={{ y: -300, opacity: 0, rotateX: 15 }}
            animate={{ y: 16, opacity: 1, rotateX: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: 'spring',
              stiffness: 80,
              damping: 15,
            }}
          >
            <div className="absolute inset-0 shadow-lg">
              <img
                src={batchImage}
                alt="Batch Document 3"
                className="w-full h-full object-cover"
              />

              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-sm">
                3/3
              </div>
            </div>
          </motion.div>

          {/* Sheet 2 (middle) */}
          <motion.div
            className="absolute inset-0 z-20 transform-gpu"
            initial={{ y: -300, opacity: 0, rotateX: 15 }}
            animate={{ y: 8, opacity: 1, rotateX: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              type: 'spring',
              stiffness: 80,
              damping: 15,
            }}
          >
            <div className="absolute inset-0 shadow-lg">
              <img
                src={batchImage}
                alt="Batch Document 2"
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
                  delay: 1.5,
                }}
              />

              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-sm">
                2/3
              </div>
            </div>
          </motion.div>

          {/* Sheet 1 (top) */}
          <motion.div
            className="absolute inset-0 z-30 transform-gpu"
            initial={{ y: -300, opacity: 0, rotateX: 15 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              type: 'spring',
              stiffness: 80,
              damping: 15,
            }}
          >
            <div className="absolute inset-0 shadow-lg">
              <img
                src={batchImage}
                alt="Batch Document 1"
                className="w-full h-full object-cover"
              />

              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-sm">
                1/3
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full px-4 pb-2 mt-auto flex justify-center space-x-2">
        <motion.div
          className="w-10 h-14 bg-gray-700 rounded-sm overflow-hidden relative border-2 border-blue-500"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8px] text-white">1</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <img
              src={batchImage}
              alt="Page 1"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-10 h-14 bg-gray-700 rounded-sm overflow-hidden relative border border-gray-500"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8px] text-white">2</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <img
              src={batchImage}
              alt="Page 2"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-10 h-14 bg-gray-700 rounded-sm overflow-hidden relative border border-gray-500 opacity-50"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8px] text-white">3</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <img
              src={batchImage}
              alt="Page 3"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-10 h-14 bg-black rounded-sm overflow-hidden relative border border-dashed border-gray-500 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
