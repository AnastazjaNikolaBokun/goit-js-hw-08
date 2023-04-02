var throttle = require('lodash.throttle');
var throttled = throttle(listenForm, 500, { trailing: false });

const form = document.querySelector('form');

form.addEventListener('input', throttled);
form.addEventListener('submit', updateForm);

function listenForm(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const feedback = {
    email: email.value,
    message: message.value,
  };
  console.log(feedback);
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

const savedSettings = localStorage.getItem('feedback-form-state');
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);

form.email.value = parsedSettings.email;
form.message.value = parsedSettings.message;

function updateForm(event) {
  event.preventDefault();
  console.log({ email: form[0].value, message: form[1].value });
  form.reset();
  localStorage.clear();
}
