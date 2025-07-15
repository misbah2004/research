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
          {/* Page Header Box Start */}
          <div className="page-header-box">
            <h1 className="wow fadeInUp" data-cursor="-opaque">
               Blogs
            </h1>
            {/* <nav className="wow fadeInUp" data-wow-delay="0.2s">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index-2.html">home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  blog
                </li>
              </ol>
            </nav> */}
          </div>
          {/* Page Header Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Page Blog Start */}
  <div className="page-blog">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          {/* Post Item Start */}
          <div className="post-item wow fadeInUp">
            {/* Post Featured Image Start*/}
            <div className="post-featured-image">
              <a href="blog-single.html" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/blogimg1.jpg" alt="" />
                </figure>
              </a>
            </div>
            {/* Post Featured Image End */}
            {/* post Item Content Start */}
            <div className="post-item-content">
              {/* post Item Body Start */}
              <div className="post-item-body">
                <h2>
                  <a href="blog-single.html">
                    Understanding React Components
                  </a>
                </h2>
              </div>
              {/* Post Item Body End*/}
              {/* Post Item Button Start*/}
              <div className="post-item-btn">
                <Link href="/blog-detail" className="post-btn">
                  Read More
                </Link>
              </div>
              {/* Post Item Button End*/}
            </div>
            {/* post Item Content End */}
          </div>
          {/* Post Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Post Item Start */}
          <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
            {/* Post Featured Image Start*/}
            <div className="post-featured-image">
              <a href="blog-single.html" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/blogimg2.jpg" alt="" />
                </figure>
              </a>
            </div>
            {/* Post Featured Image End */}
            {/* post Item Content Start */}
            <div className="post-item-content">
              {/* post Item Body Start */}
              <div className="post-item-body">
                <h2>
                  <a href="blog-single.html">
                  A Guide to Modern Web Development
                  </a>
                </h2>
              </div>
              {/* Post Item Body End*/}
              {/* Post Item Button Start*/}
              <div className="post-item-btn">
                <Link href="/blog-detail" className="post-btn">
                  Read More
                </Link>
              </div>
              {/* Post Item Button End*/}
            </div>
            {/* post Item Content End */}
          </div>
          {/* Post Item End */}
        </div>
        <div className="col-lg-4 col-md-6">
          {/* Post Item Start */}
          <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
            {/* Post Featured Image Start*/}
            <div className="post-featured-image">
              <a href="blog-single.html" data-cursor-text="View">
                <figure className="image-anime">
                  <img src="/assets/images/blogimg3.jpeg" alt="" />
                </figure>
              </a>
            </div>
            {/* Post Featured Image End */}
            {/* post Item Content Start */}
            <div className="post-item-content">
              {/* post Item Body Start */}
              <div className="post-item-body">
                <h2>
                  <a href="blog-single.html">
                  The Importance of UI/UX Design
                  </a>
                </h2>
              </div>
              {/* Post Item Body End*/}
              {/* Post Item Button Start*/}
              <div className="post-item-btn">
                <Link href="/blog-detail" className="post-btn">
                  Read More
                </Link>
              </div>
              {/* Post Item Button End*/}
            </div>
            {/* post Item Content End */}
          </div>
          {/* Post Item End */}
        </div>

      </div>
    </div>
  </div>
  {/* Page Blog End */}
</>

  )
}

export default BlogSection
