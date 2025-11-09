import React from "react";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import type { ThemeToggleProps } from "../../assets/interface/Theme";
import { ToggleWrapper, Switch, Icon } from "./LayoutStyles";

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  themeMode,
  toggleTheme,
  collapsed,
}) => {
  return (
    <ToggleWrapper style={{display: 'none'}}>
      <Icon
        $active={themeMode === "light"}
        onClick={() => toggleTheme("light")}
      >
        <SunOutlined />
      </Icon>

      {collapsed ? null : (
        <Switch
          $active={themeMode === "dark"}
          onClick={() => toggleTheme(themeMode === "dark" ? "light" : "dark")}
        />
      )}

      <Icon $active={themeMode === "dark"} onClick={() => toggleTheme("dark")}>
        <MoonOutlined />
      </Icon>
    </ToggleWrapper>
  );
};

export default ThemeToggle;
