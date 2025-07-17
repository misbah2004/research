import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureSection = () => {
  return (
    <>
      {/* Our Feature Section Start */}
      <div className="our-feature bg-[#f2f2f5]">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Our Feature Images Start */}
              <div className="our-feature-images">
                <div className="feature-image">
                  <figure className="image-anime">
                    <Image
                      src="/assets/images/images/ordernowimg.webp"
                      alt="Order Now"
                      width={500} // apni image ki actual width daalain
                      height={300} // aur height bhi
                    />
                  </figure>
                </div>
                <div className="company-experience-info">
                  <div className="our-client-images company-client-images"></div>
                </div>
              </div>
              {/* Our Feature Images End */}
            </div>
            <div className="col-lg-6">
              {/* Our Feature Content Start */}
              <div className="our-feature-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    Why Our Research Proposal Services Stand Out
                  </h2>
                </div>
                {/* Section Title End */}

                {/* Feature List Start */}
                <div className="ferature-list">
                  <div
                    className="ferature-list-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="ferature-list-content">
                      <h3>Our Key Features for Research Proposal Assistance</h3>
                      <p>
                        <li>Personalized Topic Selection</li>
                        <li>Literature Review Assistance</li>
                        <li>Research Gap Identification</li>
                        <li>Proposal Formatting (APA, MLA, Harvard etc.)</li>
                        <li>Expert PhD Mentorship</li>
                        <li>Unlimited Revisions</li>
                      </p>
                      <div className="about-footer-btn">
                        <Link
                          href="/contact"
                          className="btn-default ordernowbtn"
                        >
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Feature List End */}
              </div>
              {/* Our Feature Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Feature Section End */}
    </>
  );
};

export default FeatureSection;
