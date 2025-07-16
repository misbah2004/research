'use client'
import React from "react";
import { servicesData } from "@/lib/servicesdata";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import AboutUsSection from "@/components/about/AboutUsSection";
import { useParams } from "next/navigation";


const ServicesPage = () => {
    const { title } = useParams();

    const decodedTitle = decodeURIComponent(title);

    const service = servicesData[decodedTitle];
  
    if (!service) {
      return <h2>Service not found</h2>;
    }
  return (
    <>
      <HomeHeroSection service={service}/>
      <AboutUsSection service={service} />
    </>
  );
};

export default ServicesPage;
