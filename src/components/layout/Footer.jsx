"use client";
import toast from "react-hot-toast";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("website", "Research Proposal Services");

      // const response = await fetch(
      //   "https://skillwritingapi.dev-sh.xyz/api/contact",
      //   {
      //     method: "POST",
      //     headers: { Accept: "application/json" },
      //     body: formData,
      //   }
      // );

      const data = await response?.json();
      toast.success("Congratulations! You've subscribed successfully.");
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
              {/* Footer Header */}
              <div className="footer-header">
                {/* Footer Social Links */}
                <div className="footer-social-links">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/company/skilled-writing1/about/">
                        <FaLinkedinIn className="text-[#89a1c1]" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61573807590248">
                        <FaFacebookF className="text-[#89a1c1]" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_skilledwriting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <FaInstagram className="text-[#89a1c1]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Header End */}
            </div>

            {/* Newsletter Column */}
            <div className="col-lg-4">
              <div className="footer-links footer-newsletter-form">
                <Image
                  src="/assets/images/images/reasearchporposal-logo-blue.webp"
                  alt="logo"
                  width={100}
                  height={50} // yeh estimated hai, original height ka proportion rakhna zaroori hai
                />
                <h3>Subscribe to Research Tips:</h3>
                <p>
                  Get expert advice, academic resources, and insights into
                  writing impactful research proposals—delivered weekly to your
                  inbox.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter Your Email"
                      required
                    />
                    <button type="submit" className="newsletter-btn">
                      <FaPaperPlane />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-links footer-quick-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-links">
                <h3>Research Services</h3>
                <ul>
                  <li>
                    <a href="/services/Essay%20Writing">Essay Writing</a>
                  </li>
                  <li>
                    <a href="/services/Dissertation%20Writing">
                      Dissertation Guidance
                    </a>
                  </li>
                  <li>
                    <a href="/services/Live%20Sessions">Live Sessions</a>
                  </li>
                  <li>
                    <a href="/services/History">History</a>
                  </li>
                  <li>
                    <a href="/services/Dissertation%20Support">
                      Dissertation Support
                    </a>
                  </li>
                  <li>
                    <a href="/services/Project%20Report%20Writing">
                      Academic Project Reports
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-links">
                <h3>Academic Newsletter</h3>
                <ul>
                  <li>
                    Subscribe for proposal templates, expert tips, and research
                    trends—straight to your inbox.
                  </li>
                  <h3>We Accept</h3>
                  <Image
                    src="/assets/images/images/payment.webp"
                    alt="Payments"
                    width={300} // 👈 isay actual image ke according adjust karein
                    height={100} // 👈 yeh bhi actual height ke hisaab se change karein
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-copyright-text">
                 <p>All rights reserved by ResearchProposals.org © 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Main Footer Section End */}
    </>
  );
};

export default Footer;
