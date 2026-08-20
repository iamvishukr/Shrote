"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

const CurrentOpeningHero = () => {
  return (
    <PageBanner
      title="Current"
      highlight="Openings"
      subtitle="Explore open engineering, design, marketing, and leadership positions at Shrote Technology."
      breadcrumb={[
        { label: "Careers", href: "/join-our-team" },
        { label: "Current Openings" },
      ]}
    />
  );
};

export default CurrentOpeningHero;

