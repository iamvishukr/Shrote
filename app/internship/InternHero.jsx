"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

const InternHero = () => {
  return (
    <PageBanner
      title="Internship"
      highlight="Program"
      subtitle="Kickstart your tech career with hands-on live project training, mentorship, and full-time hiring opportunities."
      breadcrumb={[
        { label: "Careers", href: "/join-our-team" },
        { label: "Internship" },
      ]}
    />
  );
};

export default InternHero;

