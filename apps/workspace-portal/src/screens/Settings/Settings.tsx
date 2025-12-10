import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import SettingsForm from "src/components/SettingsForm/src/SettingsForm";
import type { SettingsFormRef } from "./types";
import withSettings from "src/hoc/withSettings";
import type { SettingsContextType } from "src/components/SettingsForm/src/types";

const SettingsPage: React.FC<SettingsContextType> = ({ theme }) => {
  const formRef = useRef<SettingsFormRef>(null);

  return (
    <Box p={4}>
      <Typography variant="h4" mb={2}>
        Settings
      </Typography>

      <Typography mb={2}>
        Current Theme: {theme}
      </Typography>

      <SettingsForm ref={formRef} />

      <Button
        sx={{ mt: 2 }}
        variant="outlined"
        onClick={() => formRef.current?.save()}
      >
        Save From Parent
      </Button>
    </Box>
  );
};

export default withSettings(SettingsPage);
