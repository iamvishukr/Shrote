import { products } from "@/lib/data";
import ProductPageClient from "./ProductPageClient";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — ${product.tagline} | Shrote Technology`,
    description: product.description + " " + product.keywords,
    keywords: product.keywords,
    openGraph: {
      title: `${product.name} — ${product.tagline} | Shrote Technology`,
      description: product.description,
      url: `https://www.shrote.com/products/${product.slug}`,
      siteName: "Shrote Technology",
      type: "website",
    },
  };
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center text-white">
        <h1 className="text-3xl">Product Not Found</h1>
      </div>
    );
  }
  return <ProductPageClient product={product} />;
}
