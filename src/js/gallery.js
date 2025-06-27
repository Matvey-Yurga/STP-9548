import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiperElements = document.querySelectorAll('[data-swiper]');

  swiperElements.forEach((el) => {
    const dataset = el.dataset;
    const wrapper = el.closest('.swiper-container-wrapper');
    const nextEl = wrapper?.querySelector('[data-swiper-next]');
    const prevEl = wrapper?.querySelector('[data-swiper-prev]');

    const options = {
      modules: [Navigation],
      loop: dataset.loop === 'true',
      slidesPerView: dataset.slidesPerView ? parseInt(dataset.slidesPerView) : 1,
      spaceBetween: dataset.spaceBetween ? parseInt(dataset.spaceBetween) : 0,
      navigation: {
        nextEl,
        prevEl,
      },
    };

    if (dataset.breakpoints) {
      try {
        options.breakpoints = JSON.parse(dataset.breakpoints);
      } catch (e) {
        console.error('⚠️ Invalid JSON in data-breakpoints:', dataset.breakpoints);
      }
    }

    new Swiper(el, options);
  });
});
