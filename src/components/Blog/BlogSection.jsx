import Link from 'next/link'
import React from 'react'
// import { Link } from 'react-router'

const BlogSection = () => {
  return (
    <>
  {/* Page Header Start */}
  <div className="page-header parallaxie">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="page-header-box">
            <h1 className="wow fadeInUp" data-cursor="-opaque">
               Blogs
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="page-blog">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="post-item wow fadeInUp">
            <div className="post-featured-image">
              <a href="blog-single.html" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/images/blogimg1.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div className="post-item-content">
              <div className="post-item-body">
                <h2>
                  <a href="blog-single.html">
                    Understanding React Components
                  </a>
                </h2>
              </div>
              <div className="post-item-btn">
                <Link href="/blog-detail" className="post-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
            <div className="post-featured-image">
              <a href="blog-single.html" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/images/blogimg2.jpg" alt="" />
                </figure>
              </a>
            </div>
            <div className="post-item-content">
              <div className="post-item-body">
                <h2>
                  <a href="blog-single.html">
                  A Guide to Modern Web Development
                  </a>
                </h2>
              </div>
              <div className="post-item-btn">
                <Link href="/blog-detail" className="post-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
            <div className="post-featured-image">
              <a href="blog-single.html" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/images/blogimg3.jpeg" alt="" />
                </figure>
              </a>
            </div>
            <div className="post-item-content">
              <div className="post-item-body">
                <h2>
                  <a href="blog-single.html">
                  The Importance of UI/UX Design
                  </a>
                </h2>
              </div>
              <div className="post-item-btn">
                <Link href="/blog-detail" className="post-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default BlogSection
