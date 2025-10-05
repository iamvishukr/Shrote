"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { RouteCacheProvider } from "./components/RouteCache";

export function AppProviders({ children }) {
  return (
    <RouteCacheProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </RouteCacheProvider>
  );
}
