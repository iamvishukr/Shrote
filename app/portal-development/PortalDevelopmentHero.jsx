"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function PortalDevelopmentHero() {
  return (
    <PageBanner
      title="Portal"
      highlight="Development"
      subtitle="Secure, high-traffic web portals, enterprise intranets, client extranets, and B2B vendor management systems."
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "Portal Development" },
      ]}
    />
  );
}

export default PortalDevelopmentHero;

