import React, { createContext, useState, useContext } from 'react';
import { NavigationSection } from '../types';

type NavigationContextType = {
  activeSection: NavigationSection;
  setActiveSection: (section: NavigationSection) => void;
};

const NavigationContext = createContext<NavigationContextType>({
  activeSection: NavigationSection.SCANNER,
  setActiveSection: () => {},
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<NavigationSection>(
    NavigationSection.SCANNER,
  );

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
