"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel() {
  return (
    <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
      <SwiperSlide>
        <img src="https://cdn.pixabay.com/photo/2024/09/23/21/53/hot-air-balloon-9070079_1280.jpg" alt="Imagem 1" className="rounded-xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.pixabay.com/photo/2024/09/23/21/53/hot-air-balloon-9070079_1280.jpg" alt="Imagem 2" className="rounded-xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.pixabay.com/photo/2024/09/23/21/53/hot-air-balloon-9070079_1280.jpg" alt="Imagem 3" className="rounded-xl" />
      </SwiperSlide>
    </Swiper>
  );
}
