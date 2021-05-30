let counterValue = 0;
const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    spanValue: document.querySelector('#value'),
};
refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick (event) {
    counterValue -= 1;
    refs.spanValue.textContent = counterValue;
};

function onIncrementBtnClick (event) {
    counterValue += 1;
    refs.spanValue.textContent = counterValue;
};

// refs.decrementBtn.addEventListener('click', event => {
//     counterValue -= 1;
//     refs.spanValue.textContent = counterValue;
// });
// refs.incrementBtn.addEventListener('click', event => {
//     counterValue += 1;
//     refs.spanValue.textContent = counterValue;
// });


