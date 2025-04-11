import { motion } from 'framer-motion';
import documentImage from '../../assets/images/sign.png';
import badge1 from '../../assets/images/badge1.png';
import badge2 from '../../assets/images/badge2.png';

// SVG Badge Background component
const BadgeBackground = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 218 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x="10.9377" y="11.1811" width="195.417" height="121.191">
        <div
          style={{
            backdropFilter: 'blur(3.95px)',
            clipPath: 'url(#bgblur_0_896_586_clip_path)',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="7.90649"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2331 24.912C19.2464 21.6905 21.3729 19.0876 23.9914 19.0876L193.69 19.0876C196.318 19.0876 198.449 21.7087 198.449 24.9419V67.2231V118.611C198.449 121.845 196.318 124.466 193.69 124.466H23.6026C20.9651 124.466 18.8308 121.826 18.8443 118.582L19.2331 24.912Z"
        fill="white"
        fillOpacity="0.9"
      />
      <foreignObject x="17.0107" y="17.3259" width="182.75" height="109.052">
        <div
          style={{
            backdropFilter: 'blur(0.26px)',
            clipPath: 'url(#bgblur_1_896_586_clip_path)',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="0.511716"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3992 17.8376H192.758C196.343 17.8376 199.249 20.7438 199.249 24.3287V119.375C199.249 122.96 196.343 125.866 192.758 125.866H24.0136C20.4157 125.866 17.5042 122.94 17.5225 119.342L17.9082 24.2956C17.9265 20.7236 20.8272 17.8376 24.3992 17.8376ZM24.3992 19.6079C21.8014 19.6079 19.6918 21.7068 19.6785 24.3046L19.2928 119.351C19.2795 121.967 21.3969 124.096 24.0136 124.096H192.758C195.365 124.096 197.479 121.982 197.479 119.375V24.3287C197.479 21.7215 195.365 19.6079 192.758 19.6079H24.3992Z"
        fill="#0381FF"
      />
      <path
        d="M216.191 124.503C216.191 134.281 208.265 142.206 198.488 142.206C188.711 142.206 180.785 134.281 180.785 124.503C180.785 114.726 188.711 106.8 198.488 106.8C208.265 106.8 216.191 114.726 216.191 124.503Z"
        fill="#0381FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M217.371 124.504C217.371 134.933 208.917 143.387 198.488 143.387C188.059 143.387 179.605 134.933 179.605 124.504C179.605 114.075 188.059 105.621 198.488 105.621C208.917 105.621 217.371 114.075 217.371 124.504ZM198.488 142.207C208.265 142.207 216.191 134.281 216.191 124.504C216.191 114.727 208.265 106.801 198.488 106.801C188.711 106.801 180.785 114.727 180.785 124.504C180.785 134.281 188.711 142.207 198.488 142.207Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M189.637 116.242C189.637 115.916 189.901 115.652 190.227 115.652H196.128C196.454 115.652 196.718 115.916 196.718 116.242C196.718 116.568 196.454 116.832 196.128 116.832H190.817V122.143C190.817 122.469 190.553 122.733 190.227 122.733C189.901 122.733 189.637 122.469 189.637 122.143V116.242Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M206.159 132.765C206.159 133.091 205.895 133.355 205.569 133.355H199.668C199.342 133.355 199.078 133.091 199.078 132.765C199.078 132.439 199.342 132.175 199.668 132.175H204.979V126.864C204.979 126.538 205.243 126.274 205.569 126.274C205.895 126.274 206.159 126.538 206.159 126.864V132.765Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M189.825 115.81C190.064 115.588 190.438 115.602 190.659 115.841L206.002 132.364C206.224 132.602 206.21 132.976 205.971 133.198C205.732 133.419 205.359 133.405 205.137 133.167L189.795 116.644C189.573 116.405 189.587 116.032 189.825 115.81Z"
        fill="white"
      />
      <path
        d="M36.5864 19.1255C36.5864 28.9026 28.6605 36.8285 18.8834 36.8285C9.10632 36.8285 1.18042 28.9026 1.18042 19.1255C1.18042 9.34838 9.10632 1.42249 18.8834 1.42249C28.6605 1.42249 36.5864 9.34838 36.5864 19.1255Z"
        fill="#0381FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.7664 19.1259C37.7664 29.5548 29.3121 38.0091 18.8832 38.0091C8.45429 38.0091 0 29.5548 0 19.1259C0 8.69703 8.45429 0.242737 18.8832 0.242737C29.3121 0.242737 37.7664 8.69703 37.7664 19.1259ZM18.8832 36.8289C28.6603 36.8289 36.5862 28.903 36.5862 19.1259C36.5862 9.34883 28.6603 1.42294 18.8832 1.42294C9.1061 1.42294 1.1802 9.34883 1.1802 19.1259C1.1802 28.903 9.1061 36.8289 18.8832 36.8289Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.2015 13.642C25.4319 13.4115 25.4319 13.0379 25.2015 12.8075C24.971 12.577 24.5974 12.577 24.3669 12.8075L18.8832 18.2912L13.3995 12.8075C13.169 12.577 12.7954 12.577 12.5649 12.8075C12.3345 13.0379 12.3345 13.4115 12.5649 13.642L18.0487 19.1257L12.5649 24.6094C12.3345 24.8399 12.3345 25.2135 12.5649 25.444C12.7954 25.6744 13.169 25.6744 13.3995 25.444L18.8832 19.9602L24.3669 25.444C24.5974 25.6744 24.971 25.6744 25.2015 25.444C25.4319 25.2135 25.4319 24.8399 25.2015 24.6094L19.7177 19.1257L25.2015 13.642Z"
        fill="white"
      />
      <defs>
        <clipPath
          id="bgblur_0_896_586_clip_path"
          transform="translate(-10.9377 -11.1811)"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2331 24.912C19.2464 21.6905 21.3729 19.0876 23.9914 19.0876L193.69 19.0876C196.318 19.0876 198.449 21.7087 198.449 24.9419V67.2231V118.611C198.449 121.845 196.318 124.466 193.69 124.466H23.6026C20.9651 124.466 18.8308 121.826 18.8443 118.582L19.2331 24.912Z"
          />
        </clipPath>
        <clipPath
          id="bgblur_1_896_586_clip_path"
          transform="translate(-17.0107 -17.3259)"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.3992 17.8376H192.758C196.343 17.8376 199.249 20.7438 199.249 24.3287V119.375C199.249 122.96 196.343 125.866 192.758 125.866H24.0136C20.4157 125.866 17.5042 122.94 17.5225 119.342L17.9082 24.2956C17.9265 20.7236 20.8272 17.8376 24.3992 17.8376ZM24.3992 19.6079C21.8014 19.6079 19.6918 21.7068 19.6785 24.3046L19.2928 119.351C19.2795 121.967 21.3969 124.096 24.0136 124.096H192.758C195.365 124.096 197.479 121.982 197.479 119.375V24.3287C197.479 21.7215 195.365 19.6079 192.758 19.6079H24.3992Z"
          />
        </clipPath>
      </defs>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center p-8">
      {children}
    </div>
  </div>
);

export function SignDisplay() {
  return (
    <motion.div
      className="w-full h-full bg-black flex flex-col items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeIn' }}
    >
      <div className="w-full flex justify-between items-center px-3 xs:px-4 sm:px-4 md:px-4 py-1">
        <span className="text-2xs xs:text-xs sm:text-xs text-white font-medium">
          9:41
        </span>
        <div className="flex space-x-1 xs:space-x-1.5 sm:space-x-2">
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4"
            >
              <path
                fillRule="evenodd"
                d="M3.75 5.25h12.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75Zm.75 1.5v6.5h11V6.75H4.5Z"
                clipRule="evenodd"
              />
              <path d="M3.75 5.25h12.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75Z" />
            </svg>
          </span>
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4"
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

      <div className="w-full flex justify-between items-center px-4 py-2">
        <button className="bg-black/80 text-white text-2xs xs:text-xs sm:text-xs py-1 px-2 rounded border border-white/30">
          Cancel
        </button>
        <button className="text-white text-2xs xs:text-xs sm:text-sm flex items-center">
          Signs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 ml-1"
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
            className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </button>
      </div>

      <div className="text-center text-white text-2xs xs:text-xs sm:text-sm mb-2">
        Sign & Stamp
      </div>

      <motion.div
        className="relative w-4/5 h-3/5 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="absolute top-0 left-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 border-white"></div>
        <div className="absolute top-0 right-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-white"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 border-b-2 border-l-2 border-white"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 border-white"></div>

        <div className="w-full h-full overflow-hidden">
          <img
            src={documentImage}
            alt="Document"
            className="w-full h-full object-cover"
          />

          <motion.div
            className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-primary"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '75%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.div
            className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-[15px] text-white text-2xs xs:text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Signature
          </motion.div>

          {/* Badge 1 with fade-in animation */}
          <motion.div
            className="absolute top-1/4 -left-10 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <BadgeBackground>
              <img
                src={badge1}
                alt="Certificate Badge"
                className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
              />
            </BadgeBackground>
          </motion.div>

          {/* Badge 2 with fade-in animation */}
          <motion.div
            className="absolute bottom-1/4 -right-10 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <BadgeBackground>
              <img
                src={badge2}
                alt="Official Seal"
                className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain"
              />
            </BadgeBackground>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full text-white text-[8px] xs:text-[9px] sm:text-[10px] px-4 pb-2 mt-auto flex justify-between">
        <span>Page 3 of 3</span>
        <span>PDF</span>
      </div>
    </motion.div>
  );
}
