import React from "react";
import { FilterContextProvider } from "./FilterContext";
import { LocationContextProvider } from "./LocationContext";
import { ThemeContextProvider } from "./themecontext";
import { ThemeWrapper } from "./themeWrapper";
import { ModalContextProvider } from "./modal/ModalContext";

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <FilterContextProvider>
        <ModalContextProvider>
          <LocationContextProvider>{children}</LocationContextProvider>
        </ModalContextProvider>
      </FilterContextProvider>
    </ThemeContextProvider>
  );
};
