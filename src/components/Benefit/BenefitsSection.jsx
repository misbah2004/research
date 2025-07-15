import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BenefitsSection = () => {
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
                  <span>Exciting Benefits Which You</span>
                  <br />
                  <>Shouldn’t Overlook!!</>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            {[
              { title: "Award Winning", subtitle: "Ideas" },
              { title: "High Quality", subtitle: "Work" },
              { title: "Direct Communication", subtitle: "With the Experts" },
              { title: "Constant Assistance", subtitle: "24/7" }
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                {/* Service Item Start */}
                <div className="service-item wow fadeInUp">
                  <div className="icon-box">
                    <svg
                      stroke="currentColor"
                      fill="rgb(85, 206, 227)"
                      strokeWidth="0" // ✅ FIXED HERE
                      viewBox="0 0 24 24"
                      height="10em"
                      width="10em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 00-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"></path>
                    </svg>
                  </div>
                  <div className="service-title-box">
                    <div className="service-title">
                      <h3>
                        <a href="javascript:void(0)">
                          {item.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="service-content">
                    <p>{item.subtitle}</p>
                  </div>
                </div>
                {/* Service Item End */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Services Section End */}
    </>
  );
};

export default BenefitsSection;
