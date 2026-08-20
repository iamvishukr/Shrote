"use client";
import React from "react";
import PageBanner from "../components/PageBanner";

function BulkSmsHero() {
  return (
    <PageBanner
      title="Bulk SMS"
      highlight="& Communication"
      subtitle="High-throughput transactional & promotional SMS gateways, OTP verification, and WhatsApp API integration."
      breadcrumb={[
        { label: "Services", href: "/services" },
        { label: "Bulk SMS" },
      ]}
    />
  );
}

export default BulkSmsHero;

