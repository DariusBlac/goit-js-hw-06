function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector('#boxes');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const quantityBoxes = inputEl.value;
  const boxesArray = [];
  for (let i = 0; i < quantityBoxes; i += 1) {
    const box = document.createElement('div');
    const boxSize = 30 + (i * 10);
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    boxesArray.push(box);
  }
  divEl.append(...boxesArray);
};

function destroyBoxes() {
  divEl.innerHTML = '';
}
