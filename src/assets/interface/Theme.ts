export interface ThemeToggleProps {
  themeMode: "light" | "dark";
  toggleTheme: (mode: "light" | "dark") => void;
  collapsed: boolean;
}