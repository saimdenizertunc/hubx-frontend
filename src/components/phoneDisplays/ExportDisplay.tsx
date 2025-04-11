import { motion } from 'framer-motion';
import documentImage from '../../assets/images/document.jpg';
import pdfIcon from '../../assets/images/pdf.png';
import jpgIcon from '../../assets/images/jpg.png';
import txtIcon from '../../assets/images/txt.png';

export function ExportDisplay() {
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
          EXPORT
        </button>
        <button className="text-white text-sm flex items-center">
          PDF
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
        </button>
      </div>

      <div className="text-center text-white text-sm mb-2">
        Select export format
      </div>

      <motion.div
        className="relative w-4/5 h-3/5 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white z-10"></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white z-10"></div>
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white z-10"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white z-10"></div>

        <div className="w-full h-full overflow-hidden relative">
          <img
            src={documentImage}
            alt="Document"
            className="w-full h-full object-cover"
          />

          {/* Document icons container with horizontal flex layout */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              {/* Icons container - horizontal row */}
              <div className="flex flex-row items-center justify-center w-full px-2 gap-1 sm:gap-3 mt-6 md:mt-12">
                {/* PDF document */}
                <motion.div
                  className="w-[25vw] max-w-[100px] sm:max-w-[120px] aspect-[3/4]"
                  initial={{ opacity: 0, scale: 0.5, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                >
                  <img
                    src={pdfIcon}
                    alt="PDF Format"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* JPG document */}
                <motion.div
                  className="w-[25vw] max-w-[80px] sm:max-w-[100px] aspect-[3/4]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                >
                  <img
                    src={jpgIcon}
                    alt="JPG Format"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* TXT document */}
                <motion.div
                  className="w-[25vw] max-w-[80px] sm:max-w-[100px] aspect-[3/4]"
                  initial={{ opacity: 0, scale: 0.5, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }}
                >
                  <img
                    src={txtIcon}
                    alt="TXT Format"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
