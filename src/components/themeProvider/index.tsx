"use client";

import React, { useEffect, useState } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme from localStorage or default to light
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme as "light" | "dark");
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ConfigProvider
      theme={
        theme === "light"
          ? {
              token: {
                colorPrimary: "#ca8b04",
              },
            }
          : {
              token: {
                colorPrimary: "#ca8b04",
                colorBgBase: "#222831",
                colorTextBase: "#ffffff",
              },
              algorithm: antdTheme.darkAlgorithm,
            }
      }
    >
      <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
        <button
          onClick={toggleTheme}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 1000,
            background: "none",
            border: "1px solid",
            padding: "8px 12px",
            borderRadius: "8px",
          }}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        {children}
      </div>
    </ConfigProvider>
  );
}
