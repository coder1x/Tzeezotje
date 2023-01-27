function handleButtonClick(event: MouseEvent) {
  const element = event.target;

  if (element instanceof HTMLButtonElement) {
    element.parentElement?.remove();
  }
}

function handleButtonKeyDown(event: KeyboardEvent) {
  const { key } = event;
  if (key === 'Escape') {
    event.preventDefault();

    const element = event.target;

    if (element instanceof HTMLButtonElement) {
      element.parentElement?.remove();
    }
  }
}

function message(text: string) {
  const BASE_CLASS = 'message-tzeezotje';

  const popUp = document.querySelector(`.${BASE_CLASS}__pop-up`);
  if (popUp) {
    return false;
  }

  const wrapper = document.createElement('div');
  wrapper.classList.add(`${BASE_CLASS}__pop-up`);

  const buttonClose = document.createElement('button');
  buttonClose.innerText = '✖';
  buttonClose.classList.add(`${BASE_CLASS}__close`);
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  paragraph.classList.add(`${BASE_CLASS}__text`);

  wrapper.appendChild(buttonClose);
  wrapper.appendChild(paragraph);

  const bodyElement = document.querySelector(`.js-${BASE_CLASS}`);
  bodyElement?.appendChild(wrapper);

  buttonClose.addEventListener('click', handleButtonClick);
  buttonClose.addEventListener('keydown', handleButtonKeyDown);

  return true;
}

export default message;
