"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SectionBanner from "@/components/common/SectionBanner";
import Loading from "@/components/common/Loading";
// import SubNavbar from "@/components/ui/SubNavbar";

const ContactSection = dynamic(() => import("@/components/sections/contact/ContactSection"), { ssr: false });
const MapSection = dynamic(() => import("@/components/sections/contact/MapSection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/sections/contact/FAQSection"), { ssr: false });
const NewsletterSection = dynamic(() => import("@/components/sections/contact/NewsletterSection"), { ssr: false });

const ContactPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading completion
    }, 1500); // Adjust time as needed
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="contact-page bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-100 relative">
      {/* Banner  */}
      <SectionBanner backgroundImage="/images/dishes/dinner.jpg" overlayColor="black" overlayOpacity={0.5} padding="py-16">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white" aria-label="Contact Us Page Main Heading">
            Contact <span className="text-yellow-600">Us</span>
          </h1>
          <p className="text-white mt-3 max-w-2xl mx-auto">
            We are here to help you! Contact us for reservations, inquiries, or feedback. Our team is always ready to assist.
          </p>
        </div>
      </SectionBanner>

      {/* <SubNavbar /> */}

      <ContactSection />

      <MapSection />

      <FAQSection />

      <NewsletterSection />
    </main>
  );
};

export default ContactPage;
