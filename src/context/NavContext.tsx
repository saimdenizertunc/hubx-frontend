import { createContext, useContext, useState, ReactNode } from 'react';
import { NavigationSection } from '../types';

interface NavContextType {
  activeSection: NavigationSection;
  setActiveSection: (section: NavigationSection) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<NavigationSection>(
    NavigationSection.SCANNER,
  );

  return (
    <NavContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav(): NavContextType {
  const context = useContext(NavContext);

  if (context === undefined) {
    throw new Error('useNav must be used within a NavProvider');
  }

  return context;
}
