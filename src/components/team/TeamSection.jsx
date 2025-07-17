'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Link from 'next/link';

const universityCards = [
  { src: '/assets/images/images/imageone.webp',      title: 'Research Accepted at Kennesaw State University' },
  { src: '/assets/images/images/imagetwo.webp',      title: 'PhD Proposal Approved at Duke University' },
  { src: '/assets/images/images/imagethree.webp',   title: 'Masters Research Submitted to Central Michigan University' },
  { src: '/assets/images/images/victoriauni.webp',  title: 'Victoria University Accepted Dissertation Proposal' },
  { src: '/assets/images/images/notheranuni.webp',   title: 'Northern Illinois University Thesis Approval' },
  { src: '/assets/images/images/californiauni.webp', title: 'University of California Research Draft Cleared' },
  { src: '/assets/images/images/miamiuni.webp',      title: 'Miami University Research Supervision Secured' },
  { src: '/assets/images/images/oxforduni.webp',     title: 'Oxford University Research Application Reviewed' },
  { src: '/assets/images/images/chicagouni.webp',    title: 'Chicago University Proposal Endorsed' },
  { src: '/assets/images/images/georgia.webp',      title: 'University of Georgia Research Plan Approved' },
];

export default function OurTeam() {
  return (
    <div className="our-team">
      <div className="container">
        {/* ----- Headings ----- */}
        <div className="section-title dark-section text-center">
          <h3>We’ve Helped Students Get Their Research Proposals Approved Worldwide</h3>
          <h2>
            Our Research Guidance Has Successfully Enabled Admissions to Top Universities.
          </h2>
          <h3>
            From research topic selection to final proposal structuring, we’ve mentored students 
            in securing academic research opportunities across global institutions.
          </h3>
        </div>

        {/* ----- Swiper Slider ----- */}
        <Swiper
          modules={[Autoplay, Pagination]}
          className="team-swiper owl-theme"
          spaceBetween={10}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0:    { slidesPerView: 1 },
            600:  { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
        >
          {universityCards.map(({ src, title }, idx) => (
            <SwiperSlide key={idx}>
              <div className="team-item">
                <div className="team-image">
                  <Link href="#">
                    <figure className="image-anime">
                      <img src={src} alt={title} />
                    </figure>
                  </Link>
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="#">{title}</Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
