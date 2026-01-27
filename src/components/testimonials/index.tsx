"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./slider.module.scss";
import { Container } from "react-bootstrap";
import { testimonials } from "@/contants/testimonials";

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
