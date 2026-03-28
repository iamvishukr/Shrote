import { services } from "@/lib/data";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.name} Services — ${service.tagline} | Shrote Technology`,
    description: service.description + " " + service.keywords,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} Services — ${service.tagline} | Shrote Technology`,
      description: service.description,
      url: `https://www.shrote.com/services/${service.slug}`,
      siteName: "Shrote Technology",
      type: "website",
    },
  };
}

export default function ServicePage({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center text-white">
        <h1 className="text-3xl">Service Not Found</h1>
      </div>
    );
  }
  return <ServicePageClient service={service} />;
}
