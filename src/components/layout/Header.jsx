"use client";
import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaChevronDown,
  FaWhatsapp,
} from "react-icons/fa";
// import { servicesData } from "../../../public/assets/js/servicesdata";
// import { Link } from "react-router";
import Link from "next/link";
import { servicesData } from "@/lib/servicesdata";
import Image from "next/image";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="main-header bg-[#f2f2f5]">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" href="/">
                <Image
                  src="/assets/images/images/reasearchporposal-logo-blue.webp"
                  alt="Logo"
                  width={200} // Replace with actual width
                  height={100} // Replace with actual height
                  className="object-contain"
                />
              </Link>

              <div className="hidden lg:block navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item ">
                      <Link className="nav-link" href="/">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link !flex justify-center items-center"
                        href="#"
                      >
                        Services <FaChevronDown className="h-[13px]" />
                      </Link>
                      <ul className="mega-dropdown">
                        {Object.keys(servicesData).map((title) => (
                          <li className="nav-item" key={title}>
                            <Link
                              className="nav-link"
                              href={`/services/${title}`}
                            >
                              {title}
                            </Link>
                          </li>
                        ))}

                        {/* You can add more items here */}
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blog">
                        Blog
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" href="faqs">
                        FAQs
                      </Link>
                    </li> */}
                  </ul>
                </div>
                {/* Header Btn Start */}
                <div className="header-btn">
                  <Link
                    href="https://wa.me/+447440451891?text=Referral%20link%20website%3A%20www.skilledWritings.org%22"
                    className="btn-default !flex"
                  >
                    Whatsapp
                    <FaWhatsapp />
                  </Link>
                </div>
                {/* Header Btn End */}
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle">
                <Link
                  href="#"
                  aria-haspopup="true"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShow(!show)}
                  className={
                    show
                      ? "slicknav_btn slicknav_open"
                      : "slicknav_btn slicknav_collapsed"
                  }
                  style={{ outline: "none" }}
                >
                  <span className="slicknav_menutxt" />
                  <span className="slicknav_icon slicknav_no-text">
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                  </span>
                </Link>
              </div>
            </div>
          </nav>
          <div className="responsive-menu">
            <div className="slicknav_menu">
              <ul
                className="slicknav_nav slicknav_hidden"
                aria-hidden="true"
                role="menu"
                style={{ display: show ? "" : "none" }}
              >
                <li className="nav-item submenu slicknav_collapsed slicknav_parent">
                  <Link
                    href="#"
                    role="menuitem"
                    aria-haspopup="true"
                    tabIndex={-1}
                    className="slicknav_item slicknav_row"
                    style={{ outline: "none" }}
                  />
                  <Link className="nav-link" href="/" tabIndex={-1}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href=""
                    role="menuitem"
                    tabIndex={-1}
                  >
                    Services
                  </Link>
                  <ul className="mega-dropdown">
                    {Object.keys(servicesData).map((title) => (
                      <li className="nav-item" key={title}>
                        <Link className="nav-link" href={`/services/${title}`}>
                          {title}
                        </Link>
                      </li>
                    ))}

                    {/* You can add more items here */}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/blog"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/contact"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    Contact Us
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/faqs"
                    role="menuitem"
                    tabIndex={-1}
                  >
                    FAQs
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
