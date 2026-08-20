import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "16+ Enterprise Software Products & SaaS Suites | Shrote Technology",
  description:
    "Explore 16+ production-ready enterprise software products by Shrote Technology: HRMS Suite, ERP Suite, AI Chatbot, Auto-Agent System, E-Commerce Platform, Payroll, Accounting GST, School Management, Restaurant POS, Health AI, and Inventory Management. Trusted by 200+ businesses.",
  keywords:
    "HRMS software India, ERP suite Bangalore, AI chatbot software, accounting software GST, payroll software, school ERP, restaurant POS software, health AI software, inventory management, SaaS products India, Shrote software products",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.shrote.com/products",
  },
  authors: [{ name: "Shrote Technology", url: "https://www.shrote.com" }],
  creator: "Shrote Technology",
  publisher: "Shrote Technology",
  category: "Technology",
  openGraph: {
    title: "16+ Enterprise Software Products & SaaS Suites | Shrote Technology",
    description:
      "Ready-to-deploy software products including HRMS, ERP, AI Chatbot, E-Commerce, Payroll, Accounting, Health AI & more.",
    url: "https://www.shrote.com/products",
    siteName: "Shrote Technology",
    type: "website",
    images: [
      {
        url: "https://www.shrote.com/images.png",
        width: 1200,
        height: 630,
        alt: "Enterprise Software Products - Shrote Technology",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "16+ Enterprise Software Products | Shrote Technology",
    description: "Ready-to-deploy enterprise SaaS suites and custom business automation tools.",
    site: "@Shrote_services",
    creator: "@Shrote",
    images: ["https://www.shrote.com/images.png"],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bangalore",
    "geo.position": "12.9186122,77.5913122",
    "ICBM": "12.9186122, 77.5913122",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
