import storageAPI from './storage';
var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const FORM_DATA = 'feedback-form-state';

const throttleOnFormInput = throttle(onFormInput, 500);

formEl.addEventListener('input', throttleOnFormInput);
formEl.addEventListener('submit', onFormSubmit);

initPage();

function initPage() {
  const savedData = storageAPI.load(FORM_DATA);
  if (!savedData) {
    return;
  }
  Object.entries(savedData).forEach(([name, value]) => {
    formEl.elements[name].value = value;
  });
}

function onFormInput(event) {
  const { name, value } = event.target;

  let savedData = storageAPI.load(FORM_DATA);
  savedData = savedData ? savedData : {};
  savedData[name] = value;
  storageAPI.save(FORM_DATA, savedData);
}

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Заповніть, будь-ласка, поля "Email" та "Message" !');
  }

  console.log({ email: email.value, message: message.value });

  event.currentTarget.reset();
  storageAPI.remove(FORM_DATA);
}
