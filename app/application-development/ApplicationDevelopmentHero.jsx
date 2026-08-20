"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function ApplicationDevelopmentHero() {
  return (
    <PageBanner
      title="Application"
      highlight="Development"
      subtitle="Robust iOS, Android, and cross-platform mobile app development powered by modern tech stacks."
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "Application Development" },
      ]}
    />
  );
}

export default ApplicationDevelopmentHero;

