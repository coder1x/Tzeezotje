import { boundMethod } from 'autobind-decorator';

class Tagline {
  className: string;

  private element: HTMLElement | null = null;

  private button: HTMLButtonElement | null = null;

  onClick = (data = false) => { };

  constructor(element: Element) {
    this.className = '.js-tagline';
    this.element = element as HTMLElement;

    this.init();
  }

  private init() {
    this.setDomElement();
    this.bindEvent();
  }

  private setDomElement() {
    if (!this.element) {
      return false;
    }

    this.button = this.element.querySelector(`${this.className} button`) as HTMLButtonElement;

    return true;
  }

  @boundMethod
  private handleButtonClick() {
    this.onClick();
  }

  @boundMethod
  private handleButtonKeyDown(event: KeyboardEvent) {
    const { key } = event;

    const isEnter = key === 'Enter';
    const isSpace = key === ' ';

    if (isEnter || isSpace) {
      event.preventDefault();
      this.onClick();
    } else if (key === 'Escape') {
      event.preventDefault();
      this.onClick(true);
    }
  }

  private bindEvent() {
    if (!this.button) {
      return false;
    }

    this.button.addEventListener('click', this.handleButtonClick);
    this.button.addEventListener('keydown', this.handleButtonKeyDown);

    return true;
  }
}

export default Tagline;
