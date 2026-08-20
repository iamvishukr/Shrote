"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function SeoSemHero() {
  return (
    <PageBanner
      title="Search Engine"
      highlight="Optimization & SEM"
      subtitle="Data-backed SEO campaigns, Google Ads PPC management, technical audits, and organic lead growth."
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "SEO / SEM" },
      ]}
    />
  );
}

export default SeoSemHero;

