"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function WebDesignHero() {
  return (
    <PageBanner
      title="Web"
      highlight="Design"
      subtitle="Engaging, responsive, and visually stunning UI/UX designs crafted to maximize brand impact and conversion rates."
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "Web Design" },
      ]}
    />
  );
}

export default WebDesignHero;

