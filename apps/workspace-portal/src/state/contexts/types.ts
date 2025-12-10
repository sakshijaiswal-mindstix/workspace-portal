export type ThemeType = "light" | "dark";

export type SettingsState = {
  theme: ThemeType;
  language: string;
};

export type SettingsContextType = SettingsState & {
  updateSettings: (data: Partial<SettingsState>) => void;
};

export type SettingsFormRef = {
  save: () => void;
};
