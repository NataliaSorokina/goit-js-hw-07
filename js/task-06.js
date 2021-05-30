const inputRef = document.querySelector('#validation-input');
const dataLengthValue = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', event => {
    if (inputRef.value.length === Number(dataLengthValue)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    };
});

// inputRef.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//     if (inputRef.value.length === Number(dataLengthValue)) {
//         inputRef.classList.add('valid');
//         inputRef.classList.remove('invalid');
//     } else {
//         inputRef.classList.add('invalid');
//         inputRef.classList.remove('valid');
//     };
// };