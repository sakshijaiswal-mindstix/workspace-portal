import React, {
  forwardRef,
  useImperativeHandle,
  useState
} from "react";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useSettings } from "src/state/contexts/SettingsContext";
import type {
  SettingsFormRef,
  ThemeType
} from "./types.ts";

const SettingsForm = forwardRef<SettingsFormRef>((_, ref) => {
  const { theme, language, notifications, updateSettings } = useSettings();

  const [localTheme, setLocalTheme] = useState<ThemeType>(theme);
  const [localLanguage, setLocalLanguage] = useState<string>(language);
  const [localNotifications, setLocalNotifications] =
    useState<boolean>(notifications);

  const handleSave = () => {
    updateSettings({
      theme: localTheme,
      language: localLanguage,
      notifications: localNotifications
    });
    alert("Settings saved");
  };

  useImperativeHandle(ref, () => ({
    save: handleSave
  }));

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Language"
        value={localLanguage}
        onChange={(e) => setLocalLanguage(e.target.value)}
      />

      <TextField
        label="Theme (light/dark)"
        value={localTheme}
        onChange={(e) =>
          setLocalTheme(e.target.value as ThemeType)
        }
      />

      <FormControlLabel
        control={
          <Switch
            checked={localNotifications}
            onChange={(e) => setLocalNotifications(e.target.checked)}
          />
        }
        label="Enable Notifications"
      />
    </Box>
  );
});

export default SettingsForm;
