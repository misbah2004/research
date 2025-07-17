import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Service data array
const servicesData = [
  {
    title: "Research Proposal Drafting",
    description:
      "We’ll help you craft a powerful, clear research proposal from scratch—tailored to your academic field and objectives.",
    image: "/assets/images/images/card.png",
  },
  {
    title: "Literature Review Assistance",
    description:
      "Receive a structured, citation‑rich literature review that positions your study within the existing research landscape.",
    image: "/assets/images/images/card.webp",
  },
  {
    title: "Proposal Editing & Proofreading",
    description:
      "Get your proposal professionally reviewed for clarity, coherence, formatting and flawless grammar.",
    image: "/assets/images/images/card.png",
  },
  {
    title: "Methodology & Framework Help",
    description:
      "We guide you in selecting robust research methods and theoretical frameworks aligned with your objectives.",
    image: "/assets/images/images/card.png",
  },
  {
    title: "Topic Selection & Refinement",
    description:
      "Choose a research‑worthy topic and refine it into a sharp, focused proposal question or hypothesis.",
    image: "/assets/images/images/card.png",
  },
  {
    title: "Proposal Formatting (APA/MLA)",
    description:
      "Ensure your proposal meets every institutional requirement, citation style, and formatting guideline.",
    image: "/assets/images/images/card.png",
  },
  {
    title: "Proposal Presentation Slides",
    description:
      "Impress reviewers with a concise, visually engaging slide deck that highlights your proposal’s key points.",
    image: "/assets/images/images/card.png",
  },
  {
    title: "One‑on‑One Consultation",
    description:
      "Schedule dedicated time with a research expert to review, critique and strengthen every aspect of your proposal.",
    image: "/assets/images/images/card.png",
  },
];

const ServicesSection = () => {
  return (
    <>
      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                  <span>Get Professional Help with Your Research Proposal </span>
                  <br />
                  <div className="asigmenttxt">
                    <h6>
                      From topic selection to methodology structuring—our experts help you create a compelling and academically sound research proposal.
                    </h6>
                  </div>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          {/* Services Grid */}
          <div className="row">
            {servicesData.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-item wow fadeInUp">
                  <div className="icon-box">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-title-box">
                    <div className="service-title">
                      <h3>
                        <Link href="/contact">{service.title}</Link>
                      </h3>
                    </div>
                    <div className="service-btn">
                      <Link href="/contact">
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* End row */}
        </div>
      </div>
      {/* Our Services Section End */}
    </>
  );
};

export default ServicesSection;
