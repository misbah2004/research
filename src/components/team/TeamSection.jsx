/*  src/components/OurTeam.jsx  */
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const universityCards = [
  { src: '/assets/images/imageone.jpg',      title: 'Kennesaw State University' },
  { src: '/assets/images/imagetwo.jpg',      title: 'Duke University' },
  { src: '/assets/images/imagethree.webp',   title: 'Central Michigan University' },
  { src: '/assets/images/victoriauni.webp',  title: 'Victoria University' },
  { src: '/assets/images/notheranuni.jpg',   title: 'Northern Illinois University' },
  { src: '/assets/images/californiauni.jpg', title: 'University of California' },
  { src: '/assets/images/miamiuni.jpg',      title: 'Miami University' },
  { src: '/assets/images/oxforduni.jpg',     title: 'Oxford University' },
  { src: '/assets/images/chicagouni.jpg',    title: 'The University of Chicago' },
  { src: '/assets/images/georgia.webp',      title: 'University of Georgia' },
];

export default function OurTeam() {
  return (
    <div className="our-team">
      <div className="container">
        {/* ----- headings ----- */}
        <div className="section-title dark-section text-center">
          <h3>We Are The Most Trusted Tuition Hub In the World.</h3>
          <h2>
            Students with Our Hard Core Efforts Are Now Studying in World’s Top
            Universities.
          </h2>
          <h3>
            Skilled writing is recognized as the best place to learn and grow.
            Until now, we have guided countless students to build their careers.
            Hire us now and shape your career the way you want!
          </h3>
        </div>

        {/* ----- Swiper slider ----- */}
        <Swiper
          modules={[Autoplay, Pagination]}
          className="team-swiper owl-theme"      /* keep your theme classes if needed */
          spaceBetween={10}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0:   { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000:{ slidesPerView: 3 },
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
                  <div className="team-social-icon">{/* icons if any */}</div>
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
