import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('[data-swiper-container="testimonials"]');

  if (!container) return;

  const swiperEl = container.querySelector('[data-swiper-wrapper]');
  const wrapperEl = container.querySelector('.testi-swiper-wrapper');
  const slides = wrapperEl.querySelectorAll('[data-swiper-slide]');
  const nextBtn = container.querySelector('[data-swiper-next]');
  const prevBtn = container.querySelector('[data-swiper-prev]');
  swiperEl.classList.add('swiper');
  wrapperEl.classList.add('swiper-wrapper');
  slides.forEach(slide => slide.classList.add('swiper-slide'));
  new Swiper(swiperEl, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
    },
  });
});
