import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
// import { Link } from 'react-router'

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
            {/* <h3 className="wow fadeInUp">our services</h3> */}
            <h2
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              data-cursor="-opaque"
            >
              <span>Find A Experts For Any Academic Task You Want</span><br />
              {/* <br /> */}
              <div className='asigmenttxt'><h6 className=''>Reach out to Assignment Writing and get a range of services to seek <br /> Writing. Let’s learn together and Writing you succeed in your <br /> academic life.</h6></div>
            </h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          {/* Service Item Start */}
          <div className="service-item wow fadeInUp">
            <div className="icon-box">
              <img src="/assets/images/card.png" alt="" />
            </div>
            <div className="service-title-box">
              <div className="service-title">
                <h3>
                  <Link href="/contact">
                    Skilled Writing 
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
              Find answers to even the most complicated questions of your skill with the Writing of our experts and score more.
              </p>
            </div>
          </div>
          {/* Service Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Service Item Start */}
          <div className="service-item wow fadeInUp">
            <div className="icon-box">
              <img src="/assets/images/card.png" alt="" />
            </div>
            <div className="service-title-box">
              <div className="service-title">
                <h3>
                  <a href="/contact">
                    Easy Writing 
                  </a>
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
              Our essayists will Writing you to learn the art of writing excellent essays and unique tips to impress your teachers with your words.
              </p>
            </div>
          </div>
          {/* Service Item End */}
        </div>
        
        <div className="col-lg-4 col-md-6">
          {/* Service Item Start */}
          <div className="service-item wow fadeInUp">
            <div className="icon-box">
              <img src="/assets/images/card.png" alt="" />
            </div>
            <div className="service-title-box">
              <div className="service-title">
                <h3>
                  <a href="/contact">
                    Dissertation Writing 
                  </a>
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
              We have a team of PH.D. research writers who can guide you to impress your supervisors by Writinging you compose a winning dissertation.
              </p>
            </div>
          </div>
          {/* Service Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Service Item Start */}
          <div className="service-item wow fadeInUp">
            <div className="icon-box">
              <img src="/assets/images/card.png" alt="" />
            </div>
            <div className="service-title-box">
              <div className="service-title">
                <h3>
                  <a href="/contact">
                    lab Report Writing 
                  </a>
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
              Take Writing from our professional experts to write 100% accurate, genuine, scientific and properly formatted lab reports.
              </p>
            </div>
          </div>
          {/* Service Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Service Item Start */}
          <div className="service-item wow fadeInUp">
            <div className="icon-box">
              <img src="/assets/images/card.png" alt="" />
            </div>
            <div className="service-title-box">
              <div className="service-title">
                <h3>
                  <a href="/contact">
                    Project Report Writing 
                  </a>
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
              Let our experts Writing you to get your project approved by assisting you in writing a detailed and outstanding project report.
              </p>
            </div>
          </div>
          {/* Service Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Service Item Start */}
          <div className="service-item wow fadeInUp">
            <div className="icon-box">
              <img src="/assets/images/card.png" alt="" />
            </div>
            <div className="service-title-box">
              <div className="service-title">
                <h3>
                  <a href="/contact">
                    Speech Writing 
                  </a>
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
              Want to impress your audience with your speech writing skills? Hire our experts and make your audience say ‘wow’.
              </p>
            </div>
          </div>
          {/* Service Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Service Item Start */}
          <div className="service-item wow fadeInUp">
            <div className="icon-box">
              <img src="/assets/images/card.png" alt="" />
            </div>
            <div className="service-title-box">
              <div className="service-title">
                <h3>
                  <a href="/contact">
                    Presentation Writing 
                  </a>
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
              We will not only Writing you with the making of your presentations but will also teach you how to give presentation with amazing tips.
              </p>
            </div>
          </div>
          {/* Service Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Service Item Start */}
          <div className="service-item wow fadeInUp">
            <div className="icon-box">
              <img src="/assets/images/card.png" alt="" />
            </div>
            <div className="service-title-box">
              <div className="service-title">
                <h3>
                  <a href="/contact">
                   Video Solutions
                  </a>
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
              Aid your learning and find answers to your academic problems by enrolling yourself for skilled writing’s video sessions.
              </p>
            </div>
          </div>
          {/* Service Item End */}
        </div>
        
      </div>
    </div>
  </div>
  {/* Our Services Section End */}
</>


  )
}

export default ServicesSection
