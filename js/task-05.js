const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', setup);

function setup(event) {
    spanEl.textContent = event.currentTarget.value;
    if (spanEl.textContent === '') { spanEl.textContent = 'Anonymous' };
}