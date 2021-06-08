const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.input.value.trim() === '' ? refs.span.textContent = 'незнакомец' : refs.span.textContent = event.currentTarget.value;
};


// refs.input.addEventListener('input', event => {
//     refs.input.value.trim() === "" ? refs.span.textContent = 'незнакомец' : refs.span.textContent = event.currentTarget.value;
// });
