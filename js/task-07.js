const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', fontSizeMixer);

function fontSizeMixer(event) {
    const inputSize = event.currentTarget.value;
    spanEl.style.fontSize = `${inputSize}px`;
}