import HomePage from './index';

function initialization(className: string) {
  const layout = document.querySelectorAll(className);

  if (layout.length === 1) {
    new HomePage();
  }
}

initialization('.js-index-content');
