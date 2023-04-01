const form = document.querySelector('form');

form.addEventListener('input', listenForm);
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
console.log(parsedSettings); // settings object

form.email.value = parsedSettings.email;
form.message.value = parsedSettings.message;

function updateForm(event) {}
