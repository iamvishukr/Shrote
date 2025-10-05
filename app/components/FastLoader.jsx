"use client";

import { useState, useEffect } from 'react';

export function FastLoader({ 
  children, 
  delay = 50, 
  fallback = null,
  priority = 'normal' // 'high', 'normal', 'low'
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    
    if (priority === 'high') {
      setIsLoaded(true);
      setShowFallback(false);
      return;
    }

    
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setShowFallback(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, priority]);

  if (isLoaded) {
    return <>{children}</>;
  }

  if (showFallback && fallback) {
    return fallback;
  }

 
  return (
    <div className="min-h-[100px] flex items-center justify-center">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}


export function PriorityLoader({ children, priority = 'normal' }) {
  const priorities = {
    high: 0,
    normal: 200,
    low: 500
  };

  return (
    <FastLoader delay={priorities[priority]} priority={priority}>
      {children}
    </FastLoader>
  );
}


export function SkeletonLoader({ className = "", lines = 3 }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-700 rounded mb-3 ${
            i === 0 ? 'w-3/4' : i === 1 ? 'w-full' : 'w-2/3'
          }`}
        />
      ))}
    </div>
  );
}
