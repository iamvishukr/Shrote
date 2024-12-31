import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = 'Shrote - Web Design & Development';
  const siteDescription = "Elevate your online presence with Shrote's expert team's innovative designs and seamless functionality.";
  const siteUrl = 'https://www.shrote.com';
  const defaultImage = 'https://www.shrote.com/assets/og-image.png'; // Replace with the actual hosted image URL

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords || 'web design, web development, Shrote, websites, SEO'} />
      <meta name="author" content="Shrote" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Shrote_services" />
      <meta name="twitter:creator" content="@Shrote_services" />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:url" content={url || siteUrl} />

      {/* Robots and Canonical */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
  );
};

export default SEO;
