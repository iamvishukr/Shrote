"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function usePerformance() {
  const pathname = usePathname();
  const [metrics, setMetrics] = useState({
    pageLoadTime: 0,
    cacheHitRate: 0,
    navigationTime: 0
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({
          ...prev,
          pageLoadTime: loadTime
        }));
      }
    }
  }, [pathname, isClient]);

  
  const measureNavigation = (startTime) => {
    if (!isClient) return 0;
    
    const endTime = performance.now();
    const navigationTime = endTime - startTime;
    
    setMetrics(prev => ({
      ...prev,
      navigationTime
    }));

    return navigationTime;
  };

  
  const getPerformanceInsights = () => {
    const { pageLoadTime, navigationTime } = metrics;
    
    if (pageLoadTime < 1000) {
      return { status: 'Excellent', color: 'text-green-400' };
    } else if (pageLoadTime < 2000) {
      return { status: 'Good', color: 'text-yellow-400' };
    } else {
      return { status: 'Needs Improvement', color: 'text-red-400' };
    }
  };


  const logMetrics = () => {
    if (!isClient) return;
    
    console.log('🚀 Performance Metrics:', {
      pathname,
      pageLoadTime: `${metrics.pageLoadTime.toFixed(2)}ms`,
      navigationTime: `${metrics.navigationTime.toFixed(2)}ms`,
      cacheHitRate: `${metrics.cacheHitRate.toFixed(1)}%`
    });
  };

  return {
    metrics,
    measureNavigation,
    getPerformanceInsights,
    logMetrics,
    isClient
  };
}


export function PerformanceMonitor() {
  const { metrics, logMetrics, isClient } = usePerformance();

  useEffect(() => {
    if (!isClient) return;
    
    logMetrics();
  }, [metrics.pageLoadTime, isClient]);

  return null;
}
