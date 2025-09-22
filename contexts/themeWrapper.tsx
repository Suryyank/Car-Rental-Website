"use client";

import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/themecontext";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (!themeContext) return;
    document.body.setAttribute("data-theme", themeContext.theme);
  }, [themeContext?.theme]);

  return <>{children}</>;
}
