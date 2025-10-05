"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {

    const commonRoutes = [
      '/',
      '/about-us',
      '/services',
      '/contact',
      '/portfolio',
      '/career',
      '/testimonials'
    ];

   
    const prefetchTimer = setTimeout(() => {
      commonRoutes.forEach(route => {
        try {
          router.prefetch(route);
        } catch (error) {
          console.log('Route prefetch failed:', route);
        }
      });
    }, 1000);

    return () => clearTimeout(prefetchTimer);
  }, [router]);

  return null;
}


export function HoverPrefetcher({ href, children }) {
  const router = useRouter();

  const handleMouseEnter = () => {
    try {
      router.prefetch(href);
    } catch (error) {
      console.log('Hover prefetch failed:', href);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      {children}
    </div>
  );
}


export function SmartLink({ href, children, className = "", ...props }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const handleMouseEnter = () => {
    try {
      router.prefetch(href);
    } catch (error) {
      console.log('Smart link prefetch failed:', href);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
