"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function EcommerceSolutionHero() {
  return (
    <PageBanner
      title="E-Commerce"
      highlight="Solutions"
      subtitle="Complete online shopping platforms, multi-vendor marketplaces, payment integrations, and inventory control."
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "E-Commerce Solution" },
      ]}
    />
  );
}

export default EcommerceSolutionHero;

