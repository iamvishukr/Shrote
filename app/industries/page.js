import IndustriesClient from "./IndustriesClient";

export const metadata = {
  title: "Industry Solutions — Healthcare, Fintech, Retail, Education, Manufacturing | Shrote Technology",
  description:
    "Explore Shrote Technology's industry-specific digital solutions designed for Healthcare, BFSI, E-Commerce, Education, Manufacturing, Real Estate, and more. Transform your sector with tailored software engineering.",
  keywords:
    "Healthcare IT solutions, fintech software, e-commerce development, EdTech ERP, manufacturing software India, real estate management software, Shrote Technology industries",
  openGraph: {
    title: "Industry-Specific Enterprise Solutions | Shrote Technology",
    description:
      "Digital transformation solutions tailored for Healthcare, Fintech, Retail, Education, Manufacturing & more.",
    url: "https://www.shrote.com/industries",
    siteName: "Shrote Technology",
    type: "website",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
