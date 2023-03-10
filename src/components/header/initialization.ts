import { Header } from '@components/index';

function initialization(className: string) {
  const layout = document.querySelectorAll(className);

  if (layout.length === 1) {
    new Header();
  }
}

initialization('.js-header');
