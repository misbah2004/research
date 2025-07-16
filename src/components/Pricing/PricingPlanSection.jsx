import React from 'react';

const PricingPlanSection = () => {
  return (
    <>
      {/* Our Security Section Start */}
      <div className="our-security bg-[#f2f2f5] py-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* Our Security Content Start */}
              <div className="our-security-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-cursor="-opaque"
                  >
                    <span>What Students Say About Our Proposal Support</span>
                  </h2>
                </div>
                {/* Section Title End */}
              </div>
              {/* Our Security Content End */}
            </div>

            <div className="col-lg-6">
              {/* You can optionally add an image or visual here */}
            </div>

            <div className="col-lg-12">
              {/* Security List Start */}
              <div className="security-list">
                {/* Testimonial 1 */}
                <div className="security-list-item wow fadeInUp">
                  <h3>Research Topic Selection</h3>
                  <p>
                    Their guidance helped me choose a strong, original research topic.
                    It aligned perfectly with my academic goals and gave my proposal a solid start.
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div
                  className="security-list-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h3>Methodology Structuring</h3>
                  <p>
                    I was confused about research design and data collection. Their expert helped
                    me outline a crystal-clear methodology and avoid common mistakes.
                  </p>
                </div>

                {/* Testimonial 3 */}
                <div
                  className="security-list-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h3>Proposal Review & Feedback</h3>
                  <p>
                    My initial draft had a lot of issues, but their detailed review
                    and suggestions improved it significantly. I submitted it with full confidence.
                  </p>
                </div>
              </div>
              {/* Security List End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Security Section End */}
    </>
  );
};

export default PricingPlanSection;
