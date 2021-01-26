// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputNameRef = document.querySelector('#name-input');
const spanNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', () => {
  if (inputNameRef.value === '') {
    spanNameRef.textContent = 'незнакомец';
  } else {
    spanNameRef.textContent = inputNameRef.value;
  }
});