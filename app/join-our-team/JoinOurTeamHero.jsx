"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

const JoinOurTeamHero = () => {
  return (
    <PageBanner
      title="Join Our"
      highlight="Dynamic Team"
      subtitle="Shape the next wave of enterprise technology, AI solutions, and cloud architectures with passionate innovators."
      breadcrumb={[
        { label: "Careers", href: "/join-our-team" },
        { label: "Join Our Team" },
      ]}
    />
  );
};

export default JoinOurTeamHero;

