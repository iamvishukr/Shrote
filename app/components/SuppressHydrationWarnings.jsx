'use client';

import { useEffect } from 'react';

export default function SuppressHydrationWarnings() {
  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args) => {
      const isHydrationError =
        typeof args[0] === 'string' &&
        args[0].includes('hydrating the server-rendered HTML') &&
        args[0].includes('cz-shortcut-listen');

      if (isHydrationError) {
        
        return;
      }

      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return null;
}
