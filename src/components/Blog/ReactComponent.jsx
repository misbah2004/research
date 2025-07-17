import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ReactComponent = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">
                  Skills Writing Services
                </h1>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Single Post Start */}
      <div className="page-single-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Post Featured Image Start */}
              <div className="post-image">
                <figure className="image-anime">
                  <Image
                    src="/assets/images/images/eduforu.jpg"
                    alt="Skills Writing"
                    width={600}
                    height={400}
                  />
                </figure>
              </div>
              {/* Post Featured Image End */}

              {/* Post Single Content Start */}
              <div className="post-content">
                {/* Post Entry Start */}
                <div className="post-entry">
                  <p className="wow fadeInUp">
                    In a world where personal branding and professional clarity
                    matter more than ever, well-written skills can be the key to
                    unlocking new opportunities. Whether you’re a student, job
                    seeker, freelancer, or professional, having clearly
                    articulated skills can set you apart from the competition.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Our skills writing service is designed to help you express
                    your expertise effectively. We craft personalized,
                    compelling content that highlights your strengths, showcases
                    your value, and aligns with your career goals.
                  </p>
                  <blockquote className="wow fadeInUp" data-wow-delay="0.4s">
                    <p>
                      Whether you're building a resume, a portfolio, or an
                      online profile, we make sure your skills shine with
                      confidence and clarity. Let your words work as hard as you
                      do.
                    </p>
                  </blockquote>
                  <p className="wow fadeInUp" data-wow-delay="0.6s">
                    We believe that every individual has unique strengths, and
                    our mission is to put those into words that speak powerfully
                    to employers, clients, and collaborators.
                  </p>
                  <h2 className="wow fadeInUp" data-wow-delay="0.8s">
                    What We Offer
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="1s">
                    We offer custom skills writing services for a variety of
                    purposes. Whether you're targeting a specific job, industry,
                    or niche, we tailor your content accordingly.
                  </p>
                  <ul className="wow fadeInUp" data-wow-delay="1.2s">
                    <li>
                      Professionally written skill descriptions for resumes and
                      CVs
                    </li>
                    <li>Customized LinkedIn skill section writing</li>
                    <li>Skills content for personal websites and portfolios</li>
                    <li>
                      Freelancer profile optimization (Upwork, Fiverr, etc.)
                    </li>
                    <li>
                      Business skill content for teams and company profiles
                    </li>
                  </ul>
                  <p className="wow fadeInUp" data-wow-delay="1.4s">
                    Let us help you present your strengths with confidence.
                    Contact us today and take the first step toward making your
                    skills stand out in a crowded world.
                  </p>
                </div>
                {/* Post Entry End */}

                {/* Post Tag Links Start */}
                <div className="post-tag-links">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      {/* Post Tags Start */}
                      <div
                        className="post-tags wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <span className="tag-links">
                          Tags:
                          <a href="#">skills</a>
                          <a href="#">writing</a>
                          <a href="#">branding</a>
                        </span>
                      </div>
                      {/* Post Tags End */}
                    </div>
                    <div className="col-lg-4">
                      {/* Post Social Links Start */}
                      <div
                        className="post-social-sharing wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/profile.php?id=61573807590248">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/company/skilled-writing1/about/">
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/_skilledwriting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                              <FaInstagram />
                            </a>
                          </li>
                          {/* <li>
                            <a href="#"><FaXTwitter /></a>
                          </li> */}
                        </ul>
                      </div>
                      {/* Post Social Links End */}
                    </div>
                  </div>
                </div>
                {/* Post Tag Links End */}
              </div>
              {/* Post Single Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Single Post End */}
    </>
  );
};

export default ReactComponent;
