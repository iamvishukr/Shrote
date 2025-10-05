"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


const routeCache = new Map();
const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

export function useRouteCache() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const getCachedData = (route) => {
    if (!isClient) return null;
    
    const cached = routeCache.get(route);
    if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY) {
      return cached.data;
    }
    return null;
  };


  const setCachedData = (route, data) => {
    if (!isClient) return;
    
    routeCache.set(route, {
      data,
      timestamp: Date.now()
    });
  };


  const preloadRoute = async (route) => {
    if (!isClient || routeCache.has(route)) return;
    
    try {
      setIsLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 100));
      setCachedData(route, { preloaded: true });
    } catch (error) {
      console.log('Route preload failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  
  const clearExpiredCache = () => {
    if (!isClient) return;
    
    const now = Date.now();
    for (const [route, data] of routeCache.entries()) {
      if (now - data.timestamp > CACHE_EXPIRY) {
        routeCache.delete(route);
      }
    }
  };

  
  const clearAllCache = () => {
    if (!isClient) return;
    routeCache.clear();
  };

  useEffect(() => {
    if (!isClient) return;
    
   
    const interval = setInterval(clearExpiredCache, 60000);
    return () => clearInterval(interval);
  }, [isClient]);

  return {
    pathname,
    isLoading,
    getCachedData,
    setCachedData,
    preloadRoute,
    clearExpiredCache,
    clearAllCache,
    cacheSize: isClient ? routeCache.size : 0,
    isClient
  };
}


export function RouteCacheProvider({ children }) {
  const { preloadRoute, isClient } = useRouteCache();

  useEffect(() => {
    if (!isClient) return;
    
    
    const commonRoutes = ['/', '/about-us', '/services', '/contact', '/portfolio'];
    commonRoutes.forEach(route => preloadRoute(route));
  }, [preloadRoute, isClient]);

  return <>{children}</>;
}
