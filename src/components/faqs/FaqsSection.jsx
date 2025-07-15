import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const FaqsSection = () => {
  return (
    <>
  {/* Our Faqs Section Start */}
  <div className="our-faqs home-our-faqs">
    <div className="container">
            {/* Section Title Start */}
            <div className="section-title">
              {/* <h3 className="wow fadeInUp">faq</h3> */}
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                What parts skilled writing From Others?
              </h2>
            </div>
            {/* Section Title End */}
      <div className="faq-accordion" id="accordion">
      <div className="row">
        
      <div className="col-lg-6">
          {/* FAQ Accordion Start */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp">
              <h2 className="accordion-header" id="heading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  Brilliant Ideas
                </button>
              </h2>
              <div
                id="collapse1"
                className="accordion-collapse collapse show"
                aria-labelledby="heading1"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                  Our PH.D. experts always deliver unique and smart solutions
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Timely Assistance
                </button> 
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                  We make sure that our students receive timely and best assistance.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
              <h2 className="accordion-header" id="heading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  Privace Guaranteed
                </button>
              </h2>
              <div
                id="collapse3"
                className="accordion-collapse collapse"
                aria-labelledby="heading3"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                  We are a safe and secured company and value our customers’ privacy.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
          </div>
          {/* FAQ Accordion End */}
        
        <div className="col-lg-6">
          {/* FAQ Accordion Start */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp">
              <h2 className="accordion-header" id="heading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="true"
                  aria-controls="collapse4"
                >
                  24/7 Availability
                </button>
              </h2>
              <div
                id="collapse4"
                className="accordion-collapse collapse show"
                aria-labelledby="heading1"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                  We are here to address your concerns and problems 24/7.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  Customer Satisfication
                </button> 
              </h2>
              <div
                id="collapse5"
                className="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                  We try our level best to Writing our customers with everything.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
              <h2 className="accordion-header" id="heading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  Boost Grades
                </button>
              </h2>
              <div
                id="collapse6"
                className="accordion-collapse collapse"
                aria-labelledby="heading3"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                  Our team put all their efforts to level up the students’ grades.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
          
          {/* FAQ Accordion End */}
        </div>
        </div>
      </div>
    </div>
  </div>
  {/* Our Faqs Section End */}
</>

  )
}

export default FaqsSection
