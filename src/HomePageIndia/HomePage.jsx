import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/body/homePageComponents/Banner";
import HotLocations from "../components/body/homePageComponents/HotLocations";
import LatestUpdates from "../components/body/homePageComponents/LatestUpdates";
import Testimonials from "../components/body/homePageComponents/Testimonials";
import TopDevelopers from "../components/body/homePageComponents/TopDevelopers";
import WhychooseUs from "../components/body/homePageComponents/WhyChooseUs";
import Main_Footer from "../components/footer/IndiaFooter/Main_Footer";
import Overview from "../components/body/homePageComponents/Overview";
import HotProjects from "../components/body/homePageComponents/HotProject"; // Fixed Import Path
import OurPresence from "../components/body/homePageComponents/OurPresence";
import WhatsAppWidget from "../components/Navbar/Whatsapp";
import { Toaster } from "react-hot-toast";

import {
  bannerData,
  LatestUpdate,
  testimonialsData,
  topDevelopersData,
  whyshouldChooseData,
  OverviewData,
  OurPresenceData,
  hotlocationData,
  HotProjectsData,
  whatsapp,
} from "./data";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Cedarstone Realty | Real Estate Consultants</title>
        <meta name="description" content="Explore homes and property opportunities with Cedarstone Realty." />
        <meta name="keywords" content="Cedarstone Realty, real estate, property consultants" />
        <link rel="canonical" href="https://cedarstonerealty.example/" />
        <meta name="geo.placename" content="Gurgaon, Delhi NCR, India" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cedarstonerealty.example/" />
        <meta property="og:title" content="Cedarstone Realty | Real Estate Consultants" />
        <meta property="og:description" content="Explore homes and property opportunities with Cedarstone Realty." />
        <meta property="og:image" content="https://cedarstonerealty.example/assets/logo.png" />
        <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="https://example.com/cedarstone-realty" />
    <meta name="twitter:title" content="Cedarstone Realty | Property Consultants" />
    <meta name="twitter:description" content="Explore homes and property opportunities with Cedarstone Realty." />
    <meta name="twitter:image" content="https://cedarstonerealty.example/assets/cover.webp" />
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cedarstone Realty",
            "url": "https://cedarstonerealty.example/",
            "logo": "https://cedarstonerealty.example/assets/logo.png",
            "image": ["https://cedarstonerealty.example/assets/cover.webp"],
            "telephone": "+1 202-555-0147",
            "email": "hello@example.com",
            "priceRange": "Ask For Price",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Example Street",
              "addressLocality": "Sample City",
              "addressRegion": "ZZ",
              "addressCountry": "US",
              "postalCode": "00000"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "10:00",
              "closes": "18:30"
            },
            "openingHours": ["Monday-Sunday 10:00-18:30"],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 202-555-0147",
              "contactType": "Real estate agent",
              "areaServed": "IN",
              "availableLanguage": "en"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "bestRating": "5.0",
              "worstRating": "1.0",
              "ratingCount": "4125"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5.0",
                "bestRating": "5.0",
                "worstRating": "1.0"
              },
              "author": {
                "@type": "Person",
                "name": "Cedarstone Realty"
              },
              "reviewBody": "Clients"
            },
            "sameAs": [
              "https://example.com/cedarstone-realty"
            ]
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which services does Cedarstone Realty provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cedarstone Realty provides property consulting services."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact Cedarstone Realty?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact Cedarstone Realty at hello@example.com or +1 202-555-0147."
                }
              },
              {
                "@type": "Question",
                "name": "What category of properties does Cedarstone Realty specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cedarstone Realty provides residential property consulting."
                }
              },
              {
                "@type": "Question",
                "name": "Who is the founder of Cedarstone Realty?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Alex Morgan is the founder of Cedarstone Realty."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar />
      <Banner bannerData={bannerData} />
      <HotProjects HotProjectsData={HotProjectsData} formdata={HotProjectsData?.form_data || {}} />
      <HotLocations hotlocationData={hotlocationData} OurPresenceData={OurPresenceData} />
      <Overview OverviewData={OverviewData} />
      <WhychooseUs whyshouldChooseData={whyshouldChooseData} />
      <TopDevelopers topDevelopersData={topDevelopersData} />
      <LatestUpdates LatestUpdate={LatestUpdate} />
      <WhatsAppWidget whatsappdata={whatsapp} />
      <Main_Footer />

      {/* Optional Toaster for Notifications */}
      <Toaster />
    </>
  );
};

export default HomePage;
