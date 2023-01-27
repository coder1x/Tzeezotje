import BookingForm from './BookingForm';

function renderCheckboxList(className: string) {
  const components: BookingForm[] = [];
  document.querySelectorAll(className).forEach((element) => {
    components.push(new BookingForm(element));
  });
  return components;
}

renderCheckboxList('.js-booking-form');
