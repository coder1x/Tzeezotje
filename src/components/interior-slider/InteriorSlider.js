import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

class InteriorSlider {
  constructor() {
    InteriorSlider.initSwiper();
  }

  static initSwiper() {
    const swiper = new Swiper('.js-interior-slider', {
      modules: [Navigation],
      slidesPerView: 'auto',
      loop: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      navigation: {
        nextEl: '.js-interior-slider__next',
        prevEl: '.js-interior-slider__prev',
      },
    });

    swiper.activeIndex = 1;
  }
}

export default InteriorSlider;
