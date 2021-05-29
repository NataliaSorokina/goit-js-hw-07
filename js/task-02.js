const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemsRef = ingredients.map(ingredient => {
    const elRef = document.createElement('li');
    elRef.textContent = ingredient;
    return elRef;
});

const list = document.querySelector('#ingredients');

list.append(...itemsRef);
