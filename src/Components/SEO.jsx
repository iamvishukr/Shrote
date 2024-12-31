import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, image }) => {
  // Base configuration
  const siteTitle = 'Shrote - Web Design & Development';
  const siteDescription = "Elevate your online presence with Shrote's expert team's innovative designs and seamless functionality.";
  const siteUrl = 'https://www.shrote.com';
  
  // Ensure image URL is absolute
  const imageUrl = image ? 
    (image.startsWith('http') ? image : `${siteUrl}${image}`) : 
    `${siteUrl}/og-image.png`;

  // Construct full title
  const fullTitle = `${title ? `${title} | ` : ''}${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords || 'web design, web development, Shrote, websites, SEO'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Shrote_services" />
      <meta name="twitter:creator" content="@Shrote_services" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Shrote" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={siteUrl} />
      
      {/* PWA */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;

