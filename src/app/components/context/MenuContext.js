"use client"
import React, { createContext, useState } from 'react';

// Context create karein
const MenuContext = createContext();

// Context Provider component create karein
const MenuProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(false);

  return (
    <MenuContext.Provider value={{ menuState, setMenuState }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };
