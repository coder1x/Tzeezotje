import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

class QuoteSlider {
  constructor() {
    QuoteSlider.initSwiper();
  }

  static initSwiper() {
    new Swiper('.js-quote-slider__wrapper', {
      modules: [Navigation],
      loop: 'auto',
      navigation: {
        nextEl: '.js-quote-slider__next',
        prevEl: '.js-quote-slider__prev',
      },
    });
  }
}

export default QuoteSlider;
