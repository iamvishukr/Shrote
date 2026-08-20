"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function WebDevelopmentHero() {
  return (
    <PageBanner
      title="Web"
      highlight="Development"
      subtitle="Scalable, high-performance web applications built with modern frameworks and robust cloud architectures."
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "Web Development" },
      ]}
    />
  );
}

export default WebDevelopmentHero;

