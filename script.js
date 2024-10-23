const capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smallLetter = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+~{}[]:;<>?/';

const lengthInput = document.querySelector('#length');
const capitalBox = document.querySelector('#capitalLetter');
const smallBox = document.querySelector('#smallLetter');  // Corrección aquí
const numberBox = document.querySelector('#number');
const symbolBox = document.querySelector('#symbol');
const generateBtn = document.querySelector('#generateBtn');
const showInput = document.querySelector('#showInput');
const copyBtn = document.querySelector('#copyBtn');

const generatePassword = () => {
    let availableCharacters = "";
    let generatedPassword = "";

    const length = parseInt(lengthInput.value);

    if (capitalBox.checked) availableCharacters += capitalLetter;
    if (smallBox.checked) availableCharacters += smallLetter;
    if (numberBox.checked) availableCharacters += number;
    if (symbolBox.checked) availableCharacters += symbol;

    if (availableCharacters.length === 0) {
        alert('Invalid option, please select at least one option');
        return;
    }


    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        generatedPassword += availableCharacters[randomIndex];
    }

    showInput.value = generatedPassword;

    Toastify({
        text: "Password generated",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #042f7e, #687ddb)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Botones
generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    const password = showInput.value;
    if (!password) {
        alert('First generate password');
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        Toastify({
            text: "Password copied",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #10bd10, #0f940ab9)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }).catch(err => {
        alert('There has been a problem');
    });

});
