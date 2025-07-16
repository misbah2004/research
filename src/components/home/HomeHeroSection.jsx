import React from 'react';
import { FaArrowCircleRight, FaPlay } from 'react-icons/fa';
import Services from '../ServicesPage/Services';
import Link from 'next/link';

const HomeHeroSection = ({ service }) => {
  return (
    <>
      {/* Hero Section Start */}
      <div className="hero parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Hero Content Start */}
              <div className="hero-content">
                {/* Section Title Start */}
                <div className="section-title dark-section">
                  <h1
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    {service?.page_title || "Expert Help for Research Proposals"}
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    {service?.statistics ||
                      "Struggling with your research proposal? Our experts guide you through topic selection, literature review, methodology structuring, and formatting. Whether you're applying for a Master's, MPhil, or PhD — we ensure your proposal meets academic standards and gets noticed by evaluators."}
                  </p>
                </div>
                {/* Section Title End */}

                {/* Hero Content Body Start */}
                <div
                  className="hero-content-body wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  {/* Hero Button Start */}
                  <div className="hero-btn">
                    <Link href="/contact" className="btn-default btn-highlighted">
                      GET IN TOUCH
                    </Link>
                  </div>
                </div>
              </div>
              {/* Hero Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}
    </>
  );
};

export default HomeHeroSection;
