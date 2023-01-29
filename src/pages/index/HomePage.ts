import { Tagline, ModularForm } from '@components/index';

class HomePage {
  private tagline: Tagline | null = null;

  private modularForm: ModularForm | null = null;

  constructor() {
    this.setDomElement();
    this.bindEvent();
  }

  private setDomElement() {
    const elementTagline = document.querySelectorAll('.js-tagline');

    if (elementTagline.length === 1) {
      this.tagline = new Tagline(elementTagline[0]);
    }

    const elementModular = document.querySelectorAll('.js-modular-form');

    if (elementModular.length === 1) {
      this.modularForm = new ModularForm(elementModular[0]);
    }
  }

  private bindEvent() {
    if (!this.tagline) {
      return false;
    }

    this.tagline.onClick = (data) => {
      this.modularForm?.toggle(data);
    };

    return true;
  }
}

export default HomePage;
