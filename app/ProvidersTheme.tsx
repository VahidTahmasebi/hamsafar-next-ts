"use client";

import React, { FC, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface ProvidersThemeProps {
  children: React.ReactNode;
}

const ProvidersTheme: FC<ProvidersThemeProps> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
};

export default ProvidersTheme;
