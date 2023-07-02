const listElement = document.querySelector('#categories');

const listCategoriesElement = listElement.children;
console.log(`Number of categories: ${listCategoriesElement.length}`);

const allCategoriesElement = listElement.querySelectorAll('.item');

allCategoriesElement.forEach(element => {
    const firstChild = element.firstElementChild;
    const allLiArray = element.querySelectorAll('li');

    console.log(`Category: ${firstChild.textContent}`);
    console.log(`Elements: ${allLiArray.length}`);
})