import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image }) => {
  const siteTitle = 'Shrote - Web Design & Development';
  const siteDescription = 'Elevate your online presence with Shrote\'s expert team\'s innovative designs and seamless functionality.';

  return (
    <Helmet>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" /> 
      <meta name="twitter:site" content="@Shrote_services" /> 
      <meta name="twitter:creator" content="@Shrote_services" /> 
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={image || '../assets/og-image.png'} />

      {/* Facebook Card */}
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.shrote.com" /> 
      <meta property="og:image" content={image || '../assets/og-image.png'} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:site_name" content={siteTitle} /> 
    </Helmet>
  );
};

export default SEO;

