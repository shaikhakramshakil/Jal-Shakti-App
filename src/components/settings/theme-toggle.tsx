
"use client";

import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDarkMode(checked);
  };

  if (typeof window === 'undefined') {
    return null;
  }
  
  return (
    <Switch
      checked={isDarkMode}
      onCheckedChange={toggleTheme}
      aria-label="Toggle dark mode"
    />
  );
}
