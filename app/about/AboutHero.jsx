"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function AboutHero({ name = "About Us" }) {
  return (
    <PageBanner
      title="About"
      highlight="Shrote"
      subtitle="Discover our journey, mission, and the enterprise solutions driving technological transformation across the globe."
      breadcrumb={[{ label: "About Us" }]}
    />
  );
}

export default AboutHero;

