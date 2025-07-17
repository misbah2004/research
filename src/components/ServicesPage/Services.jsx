import React from 'react'

const Services = () => {
  return (
    <>
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
              {/* <h3 className="wow fadeInUp">welcome cyber security</h3> */}
              <h1
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Secure your world, effortlessly today!
              </h1>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Protect your digital world with seamless, cutting-edge
                cybersecurity solutions designed to safeguard your data,
                systems, and peace of mind.
              </p>
            </div>
            <div
              className="hero-content-body wow fadeInUp"
              data-wow-delay="0.6s"
            >
              {/* Hero Button Start */}
              <div className="hero-btn">
                <a href="contact.html" className="btn-default btn-highlighted">
                  learn more
                </a>
              </div>
            </div>
            <div className="hero-content-footer">
              {/* Hero List Start */}
              <div className="hero-list wow fadeInUp" data-wow-delay="0.8s">
                <ul>
                  <li>Access control management</li>
                  <li>Security awareness training</li>
                </ul>
              </div>
              {/* Hero List End */}
              {/* Hero Client Box Start */}
              <div className="hero-client-box">
                {/* Our Client Image Start */}
                <div className="our-client-images">
                  {/* Client Image Start */}
                  <div className="client-image">
                    <figure className="image-anime">
                      <img src="images/client-image-1.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default Services
