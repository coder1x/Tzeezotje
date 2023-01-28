import InteriorSlider from './InteriorSlider';

function initialization(className) {
  const layout = document.querySelectorAll(className);

  if (layout.length === 1) {
    new InteriorSlider();
  }
}

initialization('.js-interior-slider');
