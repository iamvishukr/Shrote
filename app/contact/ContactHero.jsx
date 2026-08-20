"use client";

import PageBanner from "../components/PageBanner";

export default function ContactHero() {
  return (
    <PageBanner
      title="Get in"
      highlight="Touch"
      subtitle="Reach out to our team for project inquiries, support, or a free consultation. We'd love to hear from you."
      breadcrumb={[{ label: "Contact Us" }]}
    />
  );
}
