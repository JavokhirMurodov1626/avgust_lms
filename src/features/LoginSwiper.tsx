"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import slideOne from "/public/images/login_page_swiper_img_one.svg";
import slideTwo from "/public/images/login_page_swiper_img_two.svg";
import slideThree from "/public/images/login_page_swiper_img_three.svg";

export const LoginSwiper = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="login-swiper ">
      <SwiperSlide>
        <Image src={slideOne} alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slideTwo} alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slideThree} alt="slide 1" />
      </SwiperSlide>
    </Swiper>
  );
};
