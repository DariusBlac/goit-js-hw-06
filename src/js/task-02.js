const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListElement = document.querySelector('#ingredients');

const listItems = ingredients.map(item => {
  const liElement = document.createElement('li');
  liElement.textContent = item;
  liElement.classList.add('item');

  return liElement;
})

console.log(listItems);

ingredientsListElement.append(...listItems);