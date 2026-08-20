"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function DataScienceSolutionHero() {
  return (
    <PageBanner
      title="Data Science"
      highlight="& AI Solutions"
      subtitle="Advanced predictive modeling, machine learning pipelines, big data analytics, and business intelligence."
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "Data Science Solution" },
      ]}
    />
  );
}

export default DataScienceSolutionHero;

