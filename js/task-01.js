const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории.`);
itemsRef.forEach(item => {
    const titleRef = item.querySelector('h2');
    console.log(`Категория: ${titleRef.textContent}`);
    const itemsEl = item.querySelectorAll('li');
    console.log(`Количество элементов: ${itemsEl.length}`);

});

