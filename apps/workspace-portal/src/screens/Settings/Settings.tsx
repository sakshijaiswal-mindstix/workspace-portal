import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@workspace/Button"
import SettingsForm from "src/components/SettingsForm/SettingsForm";
import type { SettingsFormRef } from "./types";
import withSettings from "src/hoc/withSettings";
import type { SettingsContextType } from "src/components/SettingsForm/types";
import { useNavigate } from "react-router-dom";

const SettingsPage: React.FC<SettingsContextType> = ({ theme }) => {
  const navigate = useNavigate()
  const formRef = useRef<SettingsFormRef>(null);

  const handleSave = () => {
    formRef.current?.save();
    navigate('/')
  }

  return (
    <Box p={4}>
      <Typography variant="h4" mb={2}>
        Settings
      </Typography>

      <Typography mb={2}>
        Current Theme: {theme}
      </Typography>

      <SettingsForm ref={formRef} />

      <Box mt={5}>
        <Button
        variant="secondary"
        onClick={handleSave}
        label="Save Settings"
      />
      </Box>
    </Box>
  );
};

export default withSettings(SettingsPage);
