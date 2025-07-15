import Link from 'next/link'
import React from 'react'
// import { Link } from 'react-router'

const FeatureSection = () => {
  return (
    <>
  {/* Our Feature Section Start */}
  <div className="our-feature">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          {/* Our Feature Images Start */}
          <div className="our-feature-images">
            {/* Feature Image Start */}
            <div className="feature-image">
              <figure className="image-anime">
                <img src="/assets/images/images/ordernowimg.jpg" alt="" />
              </figure>
            </div>
            {/* Feature Image End */}
            {/* Company Experience Info Start */}
            <div className="company-experience-info">
                <div className="our-client-images company-client-images">
              </div>
              {/* Company Experience Box End */}
            </div>
            {/* Company Experience Info End */}
          </div>
          {/* Our Feature Images End */}
        </div>
        <div className="col-lg-6">
          {/* Our Feature Content Start */}
          <div className="our-feature-content">
            {/* Section Title Start */}
            <div className="section-title">
              {/* <h3 className="wow fadeInUp">our feature</h3> */}
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Cool Add-Ones Of Our Academic Writing Services Which You Shouldn’t Miss!
              </h2>
            </div>
            {/* Section Title End */}
            {/* Feature List Start */}
            <div className="ferature-list">
              {/* Feature List Item Start */}
              <div
                className="ferature-list-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* <div className="icon-box">
                  <img src="/assets/images/icon-ferature-1.svg" alt="" />
                </div> */}
                <div className="ferature-list-content">
                  <h3>Cool Add-Ones Of Our Academic Writing Services Which You Shouldn’t Miss!</h3>
                  <p>
                    <li>Access to Free Material</li>
                    <li>Editing & Proofreading</li>
                    <li>Exclusive Discounts</li>
                    <li>Higher Grades</li>
                    <li>Personalized Learning</li>
                    <li>Sample Provisions</li>
                  </p>
                  <div className="about-footer-btn ">
                  <Link href="/contact" className="btn-default ordernowbtn">
                    Order Now
                  </Link>
                </div>
                </div>
              </div>
              {/* Feature List Item End */}
              {/* Feature List Item Start */}
              {/* <div
                className="ferature-list-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="icon-box">
                  <img src="/assets/images/icon-ferature-2.svg" alt="" />
                </div>
                <div className="ferature-list-content">
                  <h3>malware and virus prevention</h3>
                  <p>
                    malware and virus prevention provides instant monitoring
                    &amp; response to cyber threats, ensuring your devices and
                    data remain secure.
                  </p>
                </div>
              </div> */}
              {/* Feature List Item End */}
              {/* Feature List Item Start */}
              {/* <div
                className="ferature-list-item wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="icon-box">
                  <img src="/assets/images/icon-ferature-3.svg" alt="" />
                </div>
                <div className="ferature-list-content">
                  <h3>24/7 monitoring and support</h3>
                  <p>
                    24/7 monitoring and support provides instant monitoring
                    &amp; response to cyber threats, ensuring your devices and
                    data remain secure.
                  </p>
                </div>
              </div> */}
              {/* Feature List Item End */}
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


  )
}

export default FeatureSection
