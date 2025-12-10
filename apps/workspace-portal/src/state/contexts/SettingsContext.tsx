import React, { createContext, useContext, useState } from "react";
import type {
  SettingsContextType,
  SettingsState
} from "./types.ts";

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SettingsState>({
    theme: "light",
    language: "en",
    notifications: true
  });

  const updateSettings = (data: Partial<SettingsState>) => {
    setSettings((prev) => ({ ...prev, ...data }));
  };

  return (
    <SettingsContext.Provider
      value={{ ...settings, updateSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used inside SettingsProvider");
  }
  return ctx;
};
