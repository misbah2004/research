import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

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
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-cursor="-opaque"
                >
                  <span>Get Professional Help with Your Research Proposal </span>
                  <br />
                  <div className="asigmenttxt">
                    <h6>
                      From topic selection to methodology structuring—our experts
                      help you create a compelling and academically sound research
                      proposal.
                    </h6>
                  </div>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          {/* Services Grid */}
          <div className="row">
            {/* 1. Research Proposal Drafting */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/assets/images/images/card.png" alt="" />
                </div>
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>
                      <Link href="/contact">Research Proposal Drafting</Link>
                    </h3>
                  </div>
                  <div className="service-btn">
                    <Link href="/contact">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <p>
                    We’ll help you craft a powerful, clear research proposal from
                    scratch—tailored to your academic field and objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Literature Review Assistance */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/assets/images/images/card.png" alt="" />
                </div>
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>
                      <Link href="/contact">Literature Review Assistance</Link>
                    </h3>
                  </div>
                  <div className="service-btn">
                    <Link href="/contact">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <p>
                    Receive a structured, citation‑rich literature review that
                    positions your study within the existing research landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Proposal Editing & Proofreading */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/assets/images/images/card.png" alt="" />
                </div>
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>
                      <Link href="/contact">Proposal Editing &amp; Proofreading</Link>
                    </h3>
                  </div>
                  <div className="service-btn">
                    <Link href="/contact">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <p>
                    Get your proposal professionally reviewed for clarity,
                    coherence, formatting and flawless grammar.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Methodology & Framework Help */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/assets/images/images/card.png" alt="" />
                </div>
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>
                      <Link href="/contact">Methodology &amp; Framework Help</Link>
                    </h3>
                  </div>
                  <div className="service-btn">
                    <Link href="/contact">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <p>
                    We guide you in selecting robust research methods and
                    theoretical frameworks aligned with your objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Topic Selection & Refinement */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/assets/images/images/card.png" alt="" />
                </div>
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>
                      <Link href="/contact">Topic Selection &amp; Refinement</Link>
                    </h3>
                  </div>
                  <div className="service-btn">
                    <Link href="/contact">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <p>
                    Choose a research‑worthy topic and refine it into a sharp,
                    focused proposal question or hypothesis.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Proposal Formatting (APA/MLA etc.) */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/assets/images/images/card.png" alt="" />
                </div>
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>
                      <Link href="/contact">
                        Proposal&nbsp;Formatting&nbsp; <br />(APA/MLA)
                      </Link>
                    </h3>
                  </div>
                  <div className="service-btn">
                    <Link href="/contact">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <p>
                    Ensure your proposal meets every institutional requirement,
                    citation style, and formatting guideline.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Proposal Presentation Slides */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/assets/images/images/card.png" alt="" />
                </div>
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>
                      <Link href="/contact">Proposal Presentation Slides</Link>
                    </h3>
                  </div>
                  <div className="service-btn">
                    <Link href="/contact">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <p>
                    Impress reviewers with a concise, visually engaging slide deck
                    that highlights your proposal’s key points.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. One‑on‑One Consultation */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/assets/images/images/card.png" alt="" />
                </div>
                <div className="service-title-box">
                  <div className="service-title">
                    <h3>
                      <Link href="/contact">One‑on‑One Consultation</Link>
                    </h3>
                  </div>
                  <div className="service-btn">
                    <Link href="/contact">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <p>
                    Schedule dedicated time with a research expert to review,
                    critique and strengthen every aspect of your proposal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
      </div>
      {/* Our Services Section End */}
    </>
  );
};

export default ServicesSection;
