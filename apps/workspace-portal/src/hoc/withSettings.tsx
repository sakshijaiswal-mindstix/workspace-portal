import React from "react";
import { useSettings } from "src/state/contexts/SettingsContext";
import type { SettingsContextType } from "./types";

const withSettings = <P extends object>(
  Component: React.ComponentType<P & SettingsContextType>
) => {
  return (props: P) => {
    const settings = useSettings();
    return <Component {...props} {...settings} />;
  };
};

export default withSettings;
