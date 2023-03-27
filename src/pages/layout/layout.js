import gsap from '@shared/lib/gsap.min.js';
import ScrollTrigger from '@shared/lib/ScrollTrigger.min.js';
import ScrollSmoother from '@shared/lib/ScrollSmoother.min.js';

(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollTrigger.normalizeScroll(true);

  const content = document.querySelector('.content');

  if (!content) {
    return false;
  }

  ScrollSmoother.create({
    wrapper: '.wrapper',
    content,
    smooth: 1.5,
    effects: true,
  });

  const tagline = document.querySelector('.js-tagline');

  if (tagline && window.innerWidth > 1199) {
    gsap.fromTo(
      tagline,
      {
        scale: 1,
        opacity: 1,
      },
      {
        scale: 1.3,
        opacity: 0.5,
        scrollTrigger: {
          trigger: tagline,
          start: 'top',
          end: 'bottom',
          scrub: true,
        },
      },
    );
  }

  const foodMenu = document.querySelector('.food-menu');

  if (foodMenu) {
    gsap.fromTo(
      foodMenu,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: foodMenu,
          start: '-1000',
          end: '-100',
          scrub: true,
        },
      },
    );
  }

  const interiorPresentation = document.querySelector('.interior-presentation');

  if (interiorPresentation) {
    gsap.fromTo(
      interiorPresentation,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: interiorPresentation,
          start: '-1000',
          end: 'top',
          scrub: true,
        },
      },
    );
  }

  const quoteSlider = document.querySelector('.js-quote-slider');

  if (quoteSlider) {
    gsap.fromTo(
      quoteSlider,
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: quoteSlider,
          start: '-1100',
          end: 'top',
          scrub: true,
        },
      },
    );
  }

  const items = gsap.utils.toArray('.features__item');

  if (Array.isArray(items)) {
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 ? 700 : -700,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-1000',
            end: 'top',
            scrub: true,
          },
        },
      );
    });
  }

  const interiorSliderPanelWrapper = document.querySelector('.interior-slider__panel-wrapper');

  if (interiorSliderPanelWrapper) {
    gsap.fromTo(
      interiorSliderPanelWrapper,
      {
        x: 50,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: interiorSliderPanelWrapper,
          start: '-1100',
          end: 'top',
          scrub: true,
        },
      },
    );
  }

  const footerContactsWrapper = document.querySelector('.footer__contacts-wrapper');

  if (footerContactsWrapper) {
    gsap.fromTo(
      footerContactsWrapper,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: footerContactsWrapper,
          start: '-1100',
          end: 'top',
          scrub: true,
        },
      },
    );
  }

  const footerBookingFormWrapper = document.querySelector('.footer__booking-form-wrapper');

  if (footerBookingFormWrapper) {
    gsap.fromTo(
      footerBookingFormWrapper,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: footerBookingFormWrapper,
          start: '-1100',
          end: 'top',
          scrub: true,
        },
      },
    );
  }

  return true;
})();
