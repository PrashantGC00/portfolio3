import React, { createContext, useContext, useState } from "react";

type ColorContextType = {
  color: number;
  toggleColor: () => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({children } : React.PropsWithChildren) => {
  const [color, setColor] = useState(1);

  const toggleColor = () => {
    if (color <= 5) {
      setColor((prev) => prev + 1);
      return;
    }
    setColor(1);
  };

  return (
    <ColorContext.Provider value={{ color, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
