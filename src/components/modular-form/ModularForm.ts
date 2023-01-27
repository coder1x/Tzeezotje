import { boundMethod } from 'autobind-decorator';

class ModularForm {
  className: string;

  private element: HTMLElement | null = null;

  private buttonClose: HTMLButtonElement | null = null;

  constructor(element: Element) {
    this.className = '.js-modular-form';
    this.element = element as HTMLElement;

    this.init();
  }

  toggle(show = false) {
    if (!this.element) {
      return false;
    }

    const classNameWithModifier = `${this.className.replace(/^\.js-/, '')}_visible`;
    const { classList } = this.element;

    if (show && !classList.contains(classNameWithModifier)) {
      return false;
    }

    classList.toggle(classNameWithModifier);

    return true;
  }

  private init() {
    this.setDomElement();
    this.bindEvent();
  }

  private setDomElement() {
    if (!this.element) {
      return false;
    }

    this.buttonClose = this.element.querySelector(`${this.className}__close`) as HTMLButtonElement;

    return true;
  }

  @boundMethod
  private handleButtonClick() {
    this.toggle();
  }

  @boundMethod
  private handleButtonKeyDown(event: KeyboardEvent) {
    const { key } = event;

    const isEnter = key === 'Enter';
    const isSpace = key === ' ';

    if (isEnter || isSpace) {
      event.preventDefault();
      this.toggle();
    } else if (key === 'Escape') {
      event.preventDefault();
      this.toggle(true);
    }
  }

  private bindEvent() {
    if (!this.buttonClose) {
      return false;
    }

    this.buttonClose.addEventListener('click', this.handleButtonClick);
    this.buttonClose.addEventListener('keydown', this.handleButtonKeyDown);

    return true;
  }
}

export default ModularForm;
