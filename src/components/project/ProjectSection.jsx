import React from 'react'

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
              className="wow fadeInUp "
              data-wow-delay="0.2s"
              data-cursor="-opaque"
            >
              Getting Our Writing Is Easier Than You Think
            </h2>
            <div className='clicktxt'><h3 className="wow fadeInUp">You Are A Few Clicks Away</h3></div>
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
              {/* Project Item Start */}
              <div className="project-item">
                <div className="project-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/assets/images/images/eduone.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <p>
                    <a href="#">1</a>
                  </p>
                  <h3>
                    <a href="#">
                      Register With Us
                    </a>
                  </h3>
                  <h6>
                    <span>
                    Sign up for skilled writing and connect with 300+ skilled experts.
                    </span>
                  </h6>
                </div>
              </div>
              {/* Project Item End */}
              {/* Project Item Start */}
              <div className="project-item active">
                <div className="project-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/assets/images/images/edutwo.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <p>
                    <a href="#">2</a>
                  </p>
                  <h3>
                    <a href="#">
                    Tell Us Your Problem
                    </a>
                  </h3>
                  <h6 className='psech1'>
                    <span>
                    Let us know what type of Writing you need from our experts.
                    </span>
                  </h6>
                </div>
              </div>
              {/* Project Item End */}
              {/* Project Item Start */}
              <div className="project-item">
                <div className="project-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/assets/images/images/eduthree.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <p>
                    <a href="#">3</a>
                  </p>
                  <h3>
                    <a href="#">
                    Choose The Experts
                    </a>
                  </h3>
                  <h6>
                    <span>
                    Select the right Experts for you that matches your requirements.

                    </span>
                  </h6>
                </div>
              </div>
              {/* Project Item End */}
              {/* Project Item Start */}
              <div className="project-item">
                <div className="project-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/assets/images/images/eduforu.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <p>
                    <a href="#">4</a>
                  </p>
                  <h3>
                    <a href="#">
                    Book Your Lesson
                    </a>
                  </h3>
                  <h6>
                    <span>
                    Tell us when you want to meet your experts and pay for that time only.
                    </span>
                  </h6>
                </div>
              </div>
              {/* Project Item End */}
            </div>
            {/* Projects List End */}
            {/* Section Footer Text Start */}
            <div
              className="section-footer-text wow fadeInUp"
              data-wow-delay="0.6s"
            >

            </div>
            {/* Section Footer Text End */}
          </div>
          {/* Our Projects Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Projects Section End */}
</>


  )
}

export default ProjectSection
