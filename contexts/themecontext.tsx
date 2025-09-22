"use client";

import React, {
  Children,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type ContextProviderProps = {
  children: ReactNode;
};

type ThemeContextProps = {
  theme: string;
  setTheme: React.Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export function ThemeContextProvider({ children }: ContextProviderProps) {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const host = window.location.host;
      if (host.includes("localhost:3001")) {
        setTheme("red");
      }
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
