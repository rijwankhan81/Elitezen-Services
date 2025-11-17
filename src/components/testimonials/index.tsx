"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./slider.module.scss";
import { Container } from "react-bootstrap";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Daniel Carter",
    role: "Freelance Designer, UK",
    image: "/images/user.svg",
    review:
      "PeddyPay makes receiving international payments so much easier. The transfers are fast, fees are low, and I finally get paid on time without the usual complications.",
    rating: 5,
  },
  {
    id: 2,
    name: "Aisha Khan",
    role: "Travel Enthusiast, UAE",
    image: "/images/user.svg",
    review:
      "I love how simple it is to manage different currencies in one place. PeddyPay helped me avoid conversion hassles during my recent trip—just tap and pay!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jonathan Miller",
    role: "E-Commerce Store Owner, USA",
    image: "/images/user.svg",
    review:
      "Integrating PeddyPay into my store was straightforward. Customers appreciate the smooth checkout, and my international sales have noticeably increased.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Sofia Rodriguez",
    role: "Student, Spain",
    image: "/images/user.svg",
    review:
      "Sending money to friends or paying online has never felt this easy. The app is clean, fast, and reliable. I also love the smart spending insights!",
    rating: 4,
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Restaurant Owner, India",
    image: "/images/user.svg",
    review:
      "We switched to PeddyPay for accepting digital payments, and it’s been fantastic. QR payments are smooth, and the real-time analytics help me track daily income effortlessly.",
    rating: 4.5,
  },
];

const Testimonials: FC = () => {
  return (
    <section className={styles.testimonials}>
      <Container>
        <div className={styles.head}>
          <h2>What Our Users Say</h2>
          <p>Join millions of satisfied customers</p>
        </div>
        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className={styles.card}>
                  <div className={styles.header}>
                    <img src={t.image} alt={t.name} className={styles.avatar} />
                    <div>
                      <h3>{t.name}</h3>

                      <div className={styles.rating}>
                        {"★".repeat(Math.floor(t.rating))}
                        {t.rating % 1 !== 0 ? "☆" : ""}
                      </div>
                    </div>
                  </div>
                  <p className={styles.review}>"{t.review}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
