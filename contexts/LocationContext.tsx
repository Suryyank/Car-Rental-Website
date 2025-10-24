"use client";

import {
  createContext,
  ReactNode,
  useState,
  useContext,
  SetStateAction,
} from "react";

//----------TYPES----------
export type LocationState = {
  location: string;
};

export type LocationContextTypes = {
  location: LocationState;
  setLocation: React.Dispatch<SetStateAction<LocationState>>;
};
//----------END-TYPES----------

//----------CREATE-CONTEXT----------

export const LocationContext = createContext<LocationContextTypes | undefined>(
  undefined
);

//----------END-CREATE-CONTEXT----------

//----------CUSTOM-HOOKS----------
export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      "useLocation must be used within a LocationContextProvider"
    );
  }
  return context;
}
//----------END-CUSTOM-HOOKS----------

//-----------CONTEXT-PROVIDER----------
export function LocationContextProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationState>({ location: "" });

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
//-----------CONTEXT-PROVIDER----------
