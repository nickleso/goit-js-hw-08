const formEl = document.querySelector('.feedback-form');

const formData = {
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const FORM_DATA = 'feedback-form-state';
// const FORM_DATA_EMAIL = 'user email';
// const FORM_DATA_TEXTAREA = 'user message';

console.dir(formData.form);
console.dir(formData.email);
console.dir(formData.textarea);

formEl.addEventListener('submit', onFormSubmit);
formData.email.addEventListener('input', onFormInput);

function onFormSubmit(evt) {
  evt.preventDefault();

  if (formData.email.value === '' || formData.textarea.value === '') {
    return alert('Заповніть, будь-ласка, поля "Email" та "Message" !');
  }

  console.log(`Форма надіслана!`);
  evt.currentTarget.reset();

  localStorage.removeItem(FORM_DATA);
}

function onFormInput(evt) {
  //   const formElements = evt.currentTarget.elements;

  //   const email = formData.email.value;
  //   const message = formData.textarea.value;
  formData[evt.target.name] = evt.target.value;

  //   const feedbackData = {
  //     email,
  //     message,
  //   };

  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
}

// function onEmailInput(evt) {
//   const email = evt.target.value;
//   console.log(email);
//   localStorage.setItem(FORM_DATA_EMAIL, email);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   console.log(message);
//   localStorage.setItem(FORM_DATA_TEXTAREA, message);
// }
