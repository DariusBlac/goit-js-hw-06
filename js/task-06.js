const inputEl = document.querySelector('#validation-input');
const inputDataAtr = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', validator);

function validator(event) {
    const inputLength = event.currentTarget.value.length;
    if (inputLength === inputDataAtr) {
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.replace('invalid', 'valid')
        } else {
            inputEl.classList.add('valid');
        }
    } else {
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.replace('valid', 'invalid')
        } else {
            inputEl.classList.add('invalid');
        }
    }
}