const refs = {
    controlDiv: document.querySelector('#controls'),
    input: document.querySelector('input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxesDiv: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', getGivenAmountOfBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getGivenAmountOfBoxes() {
    const amount = Number(refs.input.value);
    createBoxes(amount);
}

function createBoxes(amount) {
    const boxes = [];

    function getRandomColor(min, max){
       return Math.ceil(Math.random() * (max - min) + min)
    }

    for (let i = 0; i < amount; i+=1) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = `rgb(${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}, ${getRandomColor(0, 255)})`;
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        boxes.push(box);
    };

    refs.boxesDiv.append(...boxes);
}

function destroyBoxes() {
    // const allBoxes = refs.boxesDiv.querySelectorAll('.box');
    // allBoxes.forEach(box => box.remove());
    refs.boxesDiv.innerHTML = '';    
}