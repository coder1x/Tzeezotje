import QuoteSlider from './QuoteSlider';

function initialization(className) {
  const layout = document.querySelectorAll(className);

  if (layout.length === 1) {
    new QuoteSlider();
  }
}

initialization('.js-quote-slider');
