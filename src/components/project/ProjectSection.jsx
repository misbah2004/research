import React from 'react';

const ProjectSection = () => {
  return (
    <>
      {/* Our Projects Section Start */}
      <div className="our-projects">
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
                  Get Your Research Proposal in 4 Easy Steps
                </h2>
                <div className="clicktxt">
                  <h3 className="wow fadeInUp">You’re Just a Few Clicks Away</h3>
                </div>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Our Projects Box Start */}
              <div className="our-projeect-box">
                {/* Projects List Start */}
                
                <div className="projects-list wow fadeInUp" data-wow-delay="0.4s">
                  {/* Step 1 */}
                  <div className="project-item">
                    <div className="project-image">
                      <a href="#" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="/assets/images/images/eduone.webp" alt="" />
                        </figure>
                      </a>
                    </div>
                    <div className="project-content">
                      <p>
                        <a href="#">1</a>
                      </p>
                      <h3>
                        <a href="#">Share Your Requirements</a>
                      </h3>
                      <h6>
                        <span>
                          Tell us your research proposal needs, including topic, deadline, and academic level.
                        </span>
                      </h6>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="project-item active">
                    <div className="project-image">
                      <a href="#" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="/assets/images/images/edutwo.webp" alt="" />
                        </figure>
                      </a>
                    </div>
                    <div className="project-content">
                      <p>
                        <a href="#">2</a>
                      </p>
                      <h3>
                        <a href="#">Get a Free Consultation</a>
                      </h3>
                      <h6 className="psech1">
                        <span>
                          Our research experts will review your requirements and suggest the best approach.
                        </span>
                      </h6>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="project-item">
                    <div className="project-image">
                      <a href="#" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="/assets/images/images/eduthree.webp" alt="" />
                        </figure>
                      </a>
                    </div>
                    <div className="project-content">
                      <p>
                        <a href="#">3</a>
                      </p>
                      <h3>
                        <a href="#">Choose Your Research Mentor</a>
                      </h3>
                      <h6>
                        <span>
                          Select the expert who best matches your academic field and topic requirements.
                        </span>
                      </h6>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="project-item">
                    <div className="project-image">
                      <a href="#" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src="/assets/images/images/eduforu.webp" alt="" />
                        </figure>
                      </a>
                    </div>
                    <div className="project-content">
                      <p>
                        <a href="#">4</a>
                      </p>
                      <h3>
                        <a href="#">Receive Your Proposal Draft</a>
                      </h3>
                      <h6>
                        <span>
                          Once approved, make payment and get a polished, ready-to-submit research proposal.
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
                
                {/* Projects List End */}

                {/* Optional Footer Text */}
                <div
                  className="section-footer-text wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  {/* You can add CTA or info here if needed */}
                </div>
              </div>
              {/* Our Projects Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Projects Section End */}
    </>
  );
};

export default ProjectSection;
