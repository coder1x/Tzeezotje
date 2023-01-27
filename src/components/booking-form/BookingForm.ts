import { boundMethod } from 'autobind-decorator';
import message from '../message/message';

class BookingForm {
  className: string;

  private fieldName: HTMLInputElement | null = null;

  private fieldEmail: HTMLInputElement | null = null;

  private fieldText: HTMLInputElement | null = null;

  private element: HTMLFormElement | null = null;

  constructor(element: Element) {
    this.className = '.js-booking-form';
    this.element = element as HTMLFormElement;

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

    this.fieldName = this.element.querySelector(
      `${this.className}__name-wrapper input`,
    ) as HTMLInputElement;

    this.fieldEmail = this.element.querySelector(
      `${this.className}__email-wrapper input`,
    ) as HTMLInputElement;

    this.fieldText = this.element.querySelector(
      `${this.className}__textarea-wrapper textarea`,
    ) as HTMLInputElement;

    return true;
  }

  private validationСheck() {
    if (!this.fieldName?.value) {
      message('Введите Имя');
      return false;
    }

    if (!this.fieldEmail?.value) {
      message('Введите Email');
      return false;
    }

    if (!this.fieldText?.value) {
      message('Введите сообщение');
      return false;
    }

    return true;
  }

  private clearField() {
    if (!this.fieldName || !this.fieldEmail || !this.fieldText) {
      return false;
    }

    this.fieldName.value = '';
    this.fieldEmail.value = '';
    this.fieldText.value = '';

    return true;
  }

  @boundMethod
  private handleFormSubmit(event: Event) {
    event.preventDefault();

    if (!this.validationСheck()) {
      return false;
    }

    const fetchForm = async () => {
      if (!this.element) {
        return false;
      }

      try {
        const response = await fetch('https://thylacine.ru/action_ajax_form.php', {
          method: 'POST',
          body: new FormData(this.element),
        });

        if (response.ok && response.status === 200) {
          message('Ваша заявка отправлена');
          this.clearField();
        }
      } catch (error) {
        console.log('Ошибка запроса:', error);
      }

      return true;
    };

    fetchForm();

    return true;
  }

  private bindEvent() {
    if (!this.element) {
      return false;
    }

    this.element.addEventListener('submit', this.handleFormSubmit);

    return true;
  }
}

export default BookingForm;
