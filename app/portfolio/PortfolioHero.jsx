"use client";

import PageBanner from "../components/PageBanner";

export default function PortfolioBanner() {
  return (
    <PageBanner
      title="Our"
      highlight="Portfolio"
      subtitle="Explore 200+ successful projects — web apps, e-commerce platforms, enterprise software & more."
      breadcrumb={[{ label: "Portfolio" }]}
    />
  );
}
