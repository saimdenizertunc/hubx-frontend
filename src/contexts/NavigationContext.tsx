import React, { createContext, useState, useContext } from 'react';

type NavigationContextType = {
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  direction: number;
};

const NavigationContext = createContext<NavigationContextType>({
  activeSlide: 0,
  setActiveSlide: () => {},
  direction: 1,
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSetActiveSlide = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  return (
    <NavigationContext.Provider
      value={{
        activeSlide,
        setActiveSlide: handleSetActiveSlide,
        direction,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
