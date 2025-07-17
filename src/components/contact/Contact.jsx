'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [submetSucess, setSubmetSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    pnum: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const formToSend = new FormData();
      formToSend.append("fname", formData.fname);
      formToSend.append("lname", formData.lname);
      formToSend.append("email", formData.email);
      formToSend.append("phone", formData.pnum);
      formToSend.append("website","ResearchPorposal");

      // const response = await fetch("https://skillwritingapi.dev-sh.xyz/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Accept": "application/json",
      //   },
      //   body: formToSend,
      // });

      const data = await response.json();
      if(data.success){
        setSubmetSuccess(true);
      }
      toast.success("Submit Successfully");
      setFormData({
        fname: '',
        lname: '',
        email: '',
        pnum: '',
      });
    } catch (error) {
      console.log("Form submit error", error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <>
     {loading && (
        <div className="preloader1">
          <div className="loading-container">
            <div className="loading" />
            <div id="loading-icon">
              <img src="/assets/images/icon.png" alt="Loading..." />
            </div>
          </div>
        </div>
      )}
      {/* Page Header Start */}
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">
                  Contact us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      


      <div className="page-contact-us">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="page-contact-box parallaxie">
                {/* Contact Info List Start */}
                <div className="contact-info-list">
                  <div className="contact-info-item wow fadeInUp">
                    <div className="icon-box">
                      <img src="/assets/images/images/icon-phone-accent.svg" alt="" />
                    </div>
                    <div className="contact-info-content">
                      <h3>UK Call And WhatsApp</h3>
                      <p><a target='_blank' href="tel:+447440451891">+44-7440451891</a></p>
                    </div>
                  </div>

                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon-box">
                      <img src="/assets/images/images/icon-mail-accent.svg" alt="" />
                    </div>
                    <div className="contact-info-content">
                      <h3>e-mail us</h3>
                      <p>
                        <a href="mailto:info@researchporposal.co.uk">
                          info@researchporposal.co.uk
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img src="/assets/images/images/icon-phone-accent.svg" alt="" />
                    </div>
                    <div className="contact-info-content">
                      <h3>WhatsApp Chat</h3>
                      <p><a href="tel:+447440451891" target='_blank'>+44-7440451891</a></p>
                    </div>
                  </div>
                </div>
                {/* Contact Info List End */}

                <div className="contact-us-form">
                  <div className="section-title dark-section wow fadeInUp">
                    <h2 className="wow fadeInUp" data-cursor="-opaque">
                      Get A Quote
                    </h2>
                  </div>

                  <div className="member-contact-form contact-form">
                    <form
                      id="contactForm"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="row">
                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="fname"
                            className="form-control"
                            id="fname"
                            onChange={handleChange}
                            value={formData.fname}
                            placeholder="First name"
                            required
                          />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="lname"
                            className="form-control"
                            id="lname"
                            onChange={handleChange}
                            value={formData.lname}
                            placeholder="Last name"
                            required
                          />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="pnum"
                            className="form-control"
                            id="phone"
                            onChange={handleChange}
                            value={formData.pnum}
                            placeholder="Enter Your Phone No."
                            required
                          />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder="Enter Your E-mail"
                            required
                          />
                        </div>

                        <div className="form-group col-md-12 mb-5">
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            rows={4}
                            placeholder="Write Message"
                          />
                        </div>

                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn-default btn-highlighted"
                          >
                            <span>GET IN TOUCH</span>
                          </button>
                          <div id="msgSubmit" className="h3 hidden" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Page Contact Box End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
