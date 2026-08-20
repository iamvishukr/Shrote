"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

export default function TestimonialsHero() {
  return (
    <PageBanner
      title="Client"
      highlight="Success & Reviews"
      subtitle="Discover how 500+ global enterprises and high-growth startups scaled with Shrote Technology solutions."
      breadcrumb={[
        { label: "Resources", href: "/portfolio" },
        { label: "Testimonials" },
      ]}
    />
  );
}

