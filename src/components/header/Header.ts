import { boundMethod } from 'autobind-decorator';

class Header {
  element: HTMLElement | null = null;

  className: string = '';

  private classHeader: string = '';

  private button: HTMLButtonElement | null = null;

  private toggleLine: HTMLSpanElement | null = null;

  private sidePanel: HTMLButtonElement | null = null;

  private menu: HTMLElement | null = null;

  private toggleMenuActive = '';

  private menuVisible = '';

  constructor() {
    this.className = 'js-header';
    this.classHeader = 'header';

    this.init();
  }

  private init() {
    this.toggleMenuActive = `${this.classHeader}__toggle-line_active`;
    this.menuVisible = `${this.classHeader}__menu_visible`;

    if (this.setDomElement()) {
      this.bindEvent();
      this.setAriaExpanded();
    }
  }

  private setDomElement() {
    const header = document.querySelector(`.${this.className}`);

    this.element = header as HTMLElement;

    if (!this.element) {
      return false;
    }

    this.toggleLine = this.element.querySelector(`.${this.className}__toggle-line`);
    this.menu = this.element.querySelector(`.${this.className}__menu`);
    this.button = this.element.querySelector(`.${this.className}__toggle-menu`);

    return true;
  }

  private setAriaExpanded() {
    if (!this.button || !this.sidePanel) {
      return false;
    }

    const observerButton = new MutationObserver((mutation) => {
      mutation.forEach((item) => {
        const element = item.target as HTMLButtonElement;
        let isOpen = !!element.classList.contains('header__toggle-menu_active');

        if (!isOpen) {
          isOpen = !!element.classList.contains('header__toggle-side-panel_active');
        }

        element.setAttribute('aria-expanded', `${isOpen}`);
      });
    });

    observerButton.observe(this.button, { attributeFilter: ['class'] });
    observerButton.observe(this.sidePanel, { attributeFilter: ['class'] });

    return true;
  }

  private closeMenu() {
    if (!this.toggleLine || !this.menu) {
      return false;
    }
    this.toggleLine.classList.remove(this.toggleMenuActive);
    this.menu.classList.remove(this.menuVisible);

    return true;
  }

  private bindEvent() {
    if (!this.button) {
      return false;
    }

    this.button.addEventListener('keydown', this.handleButtonKeyDown);
    this.button.addEventListener('click', this.handleButtonClick);

    if (!this.sidePanel) {
      return false;
    }

    return true;
  }

  @boundMethod
  private handleButtonClick() {
    if (!this.toggleLine || !this.menu) {
      return false;
    }

    this.toggleLine.classList.toggle(this.toggleMenuActive);
    this.menu.classList.toggle(this.menuVisible);

    return true;
  }

  @boundMethod
  private handleButtonKeyDown(event: KeyboardEvent) {
    if (!this.button || !this.menu) {
      return false;
    }

    if (event.key === 'Escape') {
      this.closeMenu();
    }

    return true;
  }
}

export default Header;
