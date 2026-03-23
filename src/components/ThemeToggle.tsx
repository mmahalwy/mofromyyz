"use client";

import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from "@mantine/core";

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark");

  return (
    <ActionIcon
      variant="subtle"
      color="gray"
      size="sm"
      onClick={() =>
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "dark" ? "☀️" : "🌙"}
    </ActionIcon>
  );
}
