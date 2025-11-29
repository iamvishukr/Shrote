
"use client"; 

import "./globals.css";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from "react";
import { RouteCacheProvider } from "./components/RouteCache";
import Script from "next/script";
import WhatsAppButton from "./WhatsAppButton";
import { usePathname } from "next/navigation";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });


function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}

export default function RootLayout({ children }) {
   const pathname = usePathname();
  const isAdminRoute = pathname?.includes("admin");
  return (
    <html lang="en">
      <head>
        
        <style>{`* { cursor: none !important; }`}</style>

        
        {/* <link rel="icon" href="https://www.shrote.com/favicon.ico" type="image/ico" /> */}
        <link rel="shortcut icon" href="/shrote-logo.png" />

        
        <link rel="preload" href="/artistic.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/features-bg-shape.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>

      <body className={`${inter.className} cursor-none`} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBQCS9V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        
        <ClientOnly>
          <RouteCacheProvider>{children}</RouteCacheProvider>

          
          <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16479273715" strategy="afterInteractive" />
          <Script id="gtag-init-1" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16479273715');
            `}
          </Script>

          <Script src="https://www.googletagmanager.com/gtag/js?id=G-WR7GXKHJSS" strategy="afterInteractive" />
          <Script id="gtag-init-2" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WR7GXKHJSS');
            `}
          </Script>

         
          <Script id="json-ld-1" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Shrote Technology",
              description:
                "Shrote is a leading web design company in Bangalore. We provide best website design, E-commerce solutions, UI/UX design, and SEO services.",
              pricerange: "Discuss with us: +91767983607 | Mail us: info@shrote.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "25th Main Rd, Putlanpalya, Jayanagara 9th Block, Jayanagar",
                addressLocality: "Bangalore",
                postalCode: "560069",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              url: "https://www.shrote.com/",
              telephone: "91767983607",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.2",
                reviewCount: 129,
                ratingCount: 129,
                bestRating: "5",
                worstRating: "1",
              },
              geo: { "@type": "GeoCoordinates", latitude: "12.91889", longitude: "77.59340" },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/people/Shrote/61569121190721/",
                "https://www.instagram.com/shrotetechnology/",
                "https://www.linkedin.com/company/shrote/",
                "https://x.com/Shrote_services",
            
                "https://www.youtube.com/user/shrote/",
              ],
              logo: {
                "@type": "ImageObject",
                "@id": "https://www.shrote.com/#logo",
                inLanguage: "en-US",
                url: "https://www.marswebsolutions.com/images/mars_logo.png",
                width: 148,
                height: 84,
                caption: "Shrote Technology",
              },
              image: { "@id": "https://www.shrote.com/#logo" },
            })}
          </Script>

          <Script id="json-ld-2" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "LocalBusiness",
              name: "Shrote Technology",
              description:
                "Shrote is a leading web design company in Bangalore. We provide best website design, E-commerce solutions, UI/UX design, and SEO services.",
              pricerange: "Discuss with us: +91767983607 | Mail us: info@shrote.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "25th Main Rd, Putlanpalya, Jayanagara 9th Block, JayaNagar ",
                addressLocality: "Bangalore",
                postalCode: "560069",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              url: "https://www.shrote.com/",
              telephone: "91767983607",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.2",
                reviewCount: 129,
                ratingCount: 129,
                bestRating: "5",
                worstRating: "1",
              },
              geo: { "@type": "GeoCoordinates", latitude: "12.91889", longitude: "77.59340" },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/people/Shrote/61569121190721/",
                "https://www.instagram.com/shrotetechnology/",
                "https://www.linkedin.com/company/shrote/",
                "https://x.com/Shrote_services",
            
                "https://www.youtube.com/user/ShroteConsultancyServices/",
              ],
              logo: {
                "@type": "ImageObject",
                "@id": "https://www.shrote.com/#logo",
                inLanguage: "en-US",
                url: "https://www.marswebsolutions.com/images/mars_logo.png",
                width: 148,
                height: 84,
                caption: "Shrote Technology",
              },
              image: { "@id": "https://www.shrote.com/#logo" },
            })}
          </Script>

          <Script id="json-ld-3" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Shrote Technology",
              url: "https://www.shrote.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "shrote.com?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            })}
          </Script>

         
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            strategy="afterInteractive"
          />
          {!isAdminRoute && <WhatsAppButton />}
        </ClientOnly>
      </body>
    </html>
  );
}
