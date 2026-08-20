"use client";

import PageBanner from "../components/PageBanner";

export default function ServicesHero({ name }) {
  return (
    <PageBanner
      title={name || "Our"}
      highlight="Services"
      subtitle={`Professional ${name ? name + " services" : "technology solutions"} tailored for your business growth.`}
      breadcrumb={[
        { label: "Services", href: "/services" },
        ...(name ? [{ label: name }] : []),
      ]}
    />
  );
}
