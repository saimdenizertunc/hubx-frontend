import { FeatureSlider } from './components/FeatureSlider';
import NavigationItems from './components/NavigationItems';
import { MobilePreview } from './components/MobilePreview';
import { NavProvider } from './context/NavContext';
import { AnimatePresence } from 'framer-motion';
import { useNav } from './context/NavContext';

export function App() {
  return (
    <NavProvider>
      <AppContent />
    </NavProvider>
  );
}

function AppContent() {
  const { activeSection } = useNav();

  return (
    <div className="min-h-screen bg-background text-textDark flex flex-col">
      <main className="container-main px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 pt-4 xs:pt-5 sm:pt-6 md:pt-8 lg:pt-10 mt-0 md:mt-10 lg:mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-1 pt-8 xs:pt-10 sm:pt-12 md:pt-0 -mt-16 xs:-mt-20 sm:-mt-24 md:mt-0">
            <AnimatePresence mode="wait">
              <MobilePreview key={`mobile-preview-${activeSection}`} />
            </AnimatePresence>
          </div>

          <div className="w-full md:w-1/2 flex flex-col order-1 md:order-2 mt-4 xs:mt-6 sm:mt-8 md:mt-16 lg:mt-20">
            <FeatureSlider />
          </div>
        </div>
      </main>

      <div className="w-full bg-background relative z-50 mt-0 xs:mt-[-10px] sm:mt-[-20px] md:mt-[-40px] lg:mt-[-60px]">
        <div className="pb-8 xs:pb-10 sm:pb-12 md:pb-16 lg:pb-20 h-full">
          <NavigationItems />
        </div>
      </div>
    </div>
  );
}
