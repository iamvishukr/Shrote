"use client";

import Header from "../Header";
import PageBanner from "../components/PageBanner";
import Products from "../components/Products";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";

export default function ProductsClient() {
  return (
    <div className="min-h-screen relative" style={{ background: "#f5f9fd" }}>
      <AnimatedBackground variant="grid" />
      <div className="relative z-10">
        <Header />
        <PageBanner
          title="Enterprise"
          highlight="Software Products"
          subtitle="16+ ready-to-deploy, scalable, and customizable enterprise software solutions engineered for rapid digital transformation."
          breadcrumb={[{ label: "Products" }]}
        />
        <div className="py-8">
          <Products />
        </div>
        <Footer />
      </div>
    </div>
  );
}
