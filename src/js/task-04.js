let counterValue = 0;

const btnDecrEl = document.querySelector('button[data-action="decrement"]');
const btnIncrEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

btnDecrEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});
btnIncrEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});


