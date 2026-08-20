"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function SoftwareDevelopmentHero() {
  return (
    <PageBanner
      title="Software"
      highlight="Development"
      subtitle="Custom enterprise software engineering, scalable cloud microservices, and AI-driven business automation solutions."
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "Software Development" },
      ]}
    />
  );
}

export default SoftwareDevelopmentHero;
