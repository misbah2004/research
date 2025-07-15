import React from 'react'

const TestimonialsSection = () => {
  return (
    <>
  {/* Our Testimonials Section Start */}
  <div className="our-testimonials">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 className="wow fadeInUp">testimonials</h3>
            <h2
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              data-cursor="-opaque"
            >
              Our clients <span>are saying</span>
            </h2>
          </div>
          {/* Section Title End */}
        </div>
        <div className="col-lg-12">
          {/* Testimonial Box Start */}
          <div className="testimonial-box parallaxie">
            {/* Testimonial Video Button Start */}
            <div className="testimonial-video-button">
              <a
                href="#"
                className="popup-video"
                data-cursor-text="Play"
              >
                <i className="fa-solid fa-play" />
              </a>
              <h3>Watch video</h3>
            </div>
            {/* Testimonial Video Button End */}
            {/* Testimonial Slide Box Start */}
            <div className="testimonial-slider-box">
              {/* Testimonial Slide Start */}
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-company-logo">
                            <img src="/assets/images/company-logo.svg" alt="" />
                          </div>
                          <div className="testimonial-quote">
                            <img src="/assets/images/testimonial-quote.svg" alt="" />
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p>
                            "This cybersecurity service has been a game-changer
                            for my business. The Basic Plan keeps my data
                            secure, and I no longer worry about online threats.
                            The setup was simple, and the team provided
                            excellent support. Highly recommend!"
                          </p>
                          <p>
                            "I love how easy it is to use this service. It's
                            affordable and gives me the confidence to work
                            online without fear of breaches. A must-have for
                            anyone who values their online safety!"
                          </p>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/assets/images/author-1.jpg" alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Alex J.</h3>
                            <p>IT manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
                    {/* Testimonial Slide Start */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-company-logo">
                            <img src="/assets/images/company-logo.svg" alt="" />
                          </div>
                          <div className="testimonial-quote">
                            <img src="/assets/images/testimonial-quote.svg" alt="" />
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p>
                            "This cybersecurity service has been a game-changer
                            for my business. The Basic Plan keeps my data
                            secure, and I no longer worry about online threats.
                            The setup was simple, and the team provided
                            excellent support. Highly recommend!"
                          </p>
                          <p>
                            "I love how easy it is to use this service. It's
                            affordable and gives me the confidence to work
                            online without fear of breaches. A must-have for
                            anyone who values their online safety!"
                          </p>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/assets/images/author-2.jpg" alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Sarah Mitchell</h3>
                            <p>Cloud manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Slide End */}
                  </div>
                  <div className="testimonial-btn">
                    <div className="testimonial-button-prev" />
                    
                    <div className="testimonial-button-next" />
                  </div>
                </div>
              </div>
              {/* Testimonial Slide End */}
              {/* Testimnoial Contact Info Start */}
              <div className="testimonial-contact-info">
                {/* Testimonial Contact Box Start */}
                <div className="testimonial-contact-box">
                  <div className="icon-box">
                    <img src="/assets/images/icon-phone.svg" alt="" />
                  </div>
                  <div className="testimonial-contact-content">
                    <p>
                      If you any questions or need help contact with team.{" "}
                      <span>
                        <a href="#">+91-000 000 000</a>
                      </span>
                    </p>
                  </div>
                </div>
                {/* Testimonial Contact Box End */}
                {/* Testimonial Contact Button Start */}
                <div className="testimonial-contact-btn">
                  <a href="#" className="btn-default">
                    contact us
                  </a>
                </div>
                {/* Testimonial Contact Button End */}
              </div>
              {/* Testimnoial Contact Info End */}
            </div>
            {/* Testimonial Slide Box End */}
          </div>
          {/* Testimonials Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Testimonials Section End */}
</>


  )
}

export default TestimonialsSection
