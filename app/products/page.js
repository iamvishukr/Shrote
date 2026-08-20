import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Software Products — HRMS, ERP, AI Chatbot, E-Commerce, POS | Shrote Technology",
  description:
    "Explore 16+ enterprise software products by Shrote Technology: HRMS Suite, ERP Suite, E-Commerce Application, AI Chatbot, Accounting Software, Payroll Software, School Management, Restaurant POS, and more.",
  keywords:
    "HRMS software, ERP software Bangalore, AI chatbot software, accounting software India, payroll software, school ERP, restaurant POS software, Shrote software products",
  openGraph: {
    title: "16+ Enterprise Software Products | Shrote Technology",
    description:
      "Ready-to-deploy software products including HRMS, ERP, AI Chatbot, E-Commerce, Payroll, Accounting & more.",
    url: "https://www.shrote.com/products",
    siteName: "Shrote Technology",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
