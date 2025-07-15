'use client'
import toast  from "react-hot-toast";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { Link } from "react-router";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("website", "Skilled Writting");
      const response = await fetch(
        "https://skillwritingapi.dev-sh.xyz/api/contact",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
          },
          body: formData,
        }
      );
      const data = await response?.json();
      // console.log(data);
      toast.success('Congratulation You Subscribe Succesfully');
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Main Footer Section Start */}
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Footer Header Start */}
              <div className="footer-header">
                {/* Footer Logo Start */}
                {/* <div className="footer-logo">
                  <img src="images/footer-logo.svg" alt="" />
                </div> */}
                {/* Footer Logo End */}
                {/* Footer Social Links Start */}
                <div className="footer-social-links">
                  <ul>
                    {/* <li>
                  <a href="">
                    <FaPinterestP/>
                  </a>
                </li> */}
                    <li>
                      <a href="https://www.linkedin.com/company/skilled-writing1/about/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61573807590248">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_skilledwriting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Social Links End */}
              </div>
              {/* Footer Header End */}
            </div>
            <div className="col-lg-4">
              {/* Footer Newsletter Form Start */}
              <div className="footer-links footer-newsletter-form">
                <img src="/assets/images/logo.png" alt="" width={100} />
                <h3>Subscribe our newsletter:</h3>
                <p>
                  We are a group of skilled Writting Writingers with several
                  years of experience ..
                </p>
                <form
                  id="newsletterForm"
                  action=""
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="mail"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter Your Email"
                      required=""
                    />
                    <button type="submit" className="newsletter-btn">
                      <FaPaperPlane />
                    </button>
                  </div>
                </form>
              </div>
              {/* Footer Newsletter Form End */}
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              {/* Footer Links Start */}
              <div className="footer-links footer-quick-links">
                <h3>Quick link</h3>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  {/* <li>
                    <a href="/faqs">FAQ</a>
                  </li> */}
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Services</h3>
                <ul>
                  {/* <li>
                    <a href="/services/skilled%20writing">Skilled Writing</a>
                  </li> */}
                  <li>
                    <a href="/services/Dissertation%20Writing">
                      Dessertation Writing
                    </a>
                  </li>
                  <li>
                    <a href="/services/Essay%20Writing">Eassy Writing</a>
                  </li>
                  <li>
                    <a href="/services/Live%20Sessions">Live Sessions</a>
                  </li>
                  <li>
                    <a href="/services/Presentation%20Writing">
                      Presentation Writting
                    </a>
                  </li>
                  <li>
                    <a href="/services/Project%20Report%20Writing">
                      Project Report
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Newsletter</h3>
                <ul>
                  {/* <li>
                <a href="#">+000 000 000</a>
              </li>
              <li>
                <a href="#">ABC@domain.com</a>
              </li> */}
                  <li>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </li>
                  <h3>We Accept</h3>
                  <img src="/assets/images/payment.png" alt="" />
                </ul>
              </div>
              {/* Footer Links End */}
            </div>
          </div>
        </div>
        {/* Footer Copyright Start */}
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* Footer Copyright Text Start */}
                <div className="footer-copyright-text">
                  <p>All Rights Reserved by skilledwriting.org 2025</p>
                </div>
                {/* Footer Copyright Text End */}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Copyright End */}
      </footer>
      {/* Main Footer Section End */}
    </>
  );
};

export default Footer;
