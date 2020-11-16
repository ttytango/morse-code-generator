const submitButton = document.querySelector('#translate-input');
let outputArea = document.querySelector(".output");
let myInput = document.querySelector('#myinput');

function translate(event) {
    event.preventDefault();
    if (myInput.value.length > 0) {
        outputArea.innerHTML = "";
        let lowerString = "";
        let inputArray = [];
        let str = myInput.value;
        lowerString += str.toLowerCase();
        inputArray = lowerString.split('');
        console.log(lowerString, inputArray);
        outputArea.classList.remove('hide');
        outputArea.textContent += `${str}:\t\t\t\t`;
        for (let index = 0; index < inputArray.length; index++) {
            if (inputArray[index] === 'a') {
                outputArea.textContent += '.-   ';
            }
            if (inputArray[index] === 'b') {
                outputArea.textContent += '-...   ';
            }
            if (inputArray[index] === 'c') {
                outputArea.textContent += '-.-.   ';
            }
            if (inputArray[index] === 'd') {
                outputArea.textContent += '-..   ';
            }
            if (inputArray[index] === 'e') {
                outputArea.textContent += '.   ';
            }
            if (inputArray[index] === 'f') {
                outputArea.textContent += '..-.   ';
            }
            if (inputArray[index] === 'g') {
                outputArea.textContent += '--.   ';
            }
            if (inputArray[index] === 'h') {
                outputArea.textContent += '....   ';
            }
            if (inputArray[index] === 'i') {
                outputArea.textContent += '..   ';
            }
            if (inputArray[index] === 'j') {
                outputArea.textContent += '.---   ';
            }
            if (inputArray[index] === 'k') {
                outputArea.textContent += '-.-   ';
            }
            if (inputArray[index] === 'l') {
                outputArea.textContent += '.-..   ';
            }
            if (inputArray[index] == 'm') {
                outputArea.innerHTML += '--   ';
            }
            if (inputArray[index] == 'n') {
                outputArea.textContent += '-.   ';
            }
            if (inputArray[index] == 'o') {
                outputArea.textContent += '---   ';
            }
            if (inputArray[index] == 'p') {
                outputArea.textContent += '.--.   ';
            }
            if (inputArray[index] === 'q') {
                outputArea.textContent += '--.-   ';
            }
            if (inputArray[index] === 'r') {
                outputArea.textContent += '.-.   ';
            }
            if (inputArray[index] === 's') {
                outputArea.textContent += '...   ';
            }
            if (inputArray[index] === 't') {
                outputArea.textContent += '-   ';
            }
            if (inputArray[index] === 'u') {
                outputArea.textContent += '..-   ';
            }
            if (inputArray[index] === 'v') {
                outputArea.textContent += '...-   ';
            }
            if (inputArray[index] === 'w') {
                outputArea.textContent += '.--   ';
            }
            if (inputArray[index] === 'x') {
                outputArea.textContent += '-..-   ';
            }
            if (inputArray[index] === 'y') {
                outputArea.textContent += '-.--   ';
            }
            if (inputArray[index] === 'z') {
                outputArea.textContent += '--..   ';
            }
            if (inputArray[index] === '1') {
                outputArea.textContent += '.----   ';
            }
            if (inputArray[index] === '2') {
                outputArea.textContent += '..---   ';
            }
            if (inputArray[index] === '3') {
                outputArea.textContent += '...--   ';
            }
            if (inputArray[index] === '4') {
                outputArea.textContent += '....-   ';
            }
            if (inputArray[index] === '5') {
                outputArea.textContent += '.....   ';
            }
            if (inputArray[index] === '6') {
                outputArea.textContent += '-....   ';
            }
            if (inputArray[index] === '7') {
                outputArea.textContent += '--...   ';
            }
            if (inputArray[index] === '8') {
                outputArea.textContent += '---..   ';
            }
            if (inputArray[index] === '9') {
                outputArea.textContent += '----.   ';
            }
            if (inputArray[index] === '0') {
                outputArea.textContent += '-----   ';
            }
            if (inputArray[index] === '.') {
                outputArea.textContent += '.-.-.-   ';
            }
            if (inputArray[index] === ',') {
                outputArea.textContent += '--..--   ';
            }
            if (inputArray[index] === '?') {
                outputArea.textContent += '..--..   ';
            }
            if (inputArray[index] === "'") {
                outputArea.textContent += '.----.   ';
            }
            if (inputArray[index] === '/') {
                outputArea.textContent += '-..-.   ';
            }
            if (inputArray[index] === '(') {
                outputArea.textContent += '-.--.   ';
            }
            if (inputArray[index] === ')') {
                outputArea.textContent += '-.--.-   ';
            }
            if (inputArray[index] === '&') {
                outputArea.textContent += '.-...   ';
            }
            if (inputArray[index] === ':') {
                outputArea.textContent += '---...   ';
            }
            if (inputArray[index] === ';') {
                outputArea.textContent += '-.-.-.   ';
            }
            if (inputArray[index] === '=') {
                outputArea.textContent += '-...-   ';
            }
            if (inputArray[index] === '+') {
                outputArea.textContent += '.-.-.   ';
            }
            if (inputArray[index] === '-') {
                outputArea.textContent += '-....-   ';
            }
            if (inputArray[index] === '_') {
                outputArea.textContent += '..--.-   ';
            }
            if (inputArray[index] === "'") {
                outputArea.textContent += '.-..-.   ';
            }
            if (inputArray[index] === '$') {
                outputArea.textContent += '...-..-   ';
            }
            if (inputArray[index] === '!') {
                outputArea.textContent += '-.-.--   ';
            }
            if (inputArray[index] === '@') {
                outputArea.textContent += '.--.-.   ';
            }
            if (inputArray[index] === ' ') {
                outputArea.textContent += '/   ';
            }
            myInput.value = "";
        };
    }

};

document.querySelector('.form-group').addEventListener('submit', translate);

// let dict = {
//     'a': '.-',
//     'b': '-...',
//     'c': '-.-.',
//     'd': '-..',
//     'e': '.',
//     'f': '..-.',
//     'g': '--.',
//     'h': '....',
//     'i': '..',
//     'j': '.---',
//     'k': '-.-',
//     'l': '.-..',
//     'm': '--',
//     'n': '-.',
//     'o': '---',
//     'p': '.--.',
//     'q': '--.-',
//     'r': '.-.',
//     's': '...',
//     't': '-',
//     'u': '..-',
//     'v': '...-',
//     'w': '.--',
//     'x': '-..-',
//     'y': '-.--',
//     'z': '--..',
//     '1': '.----',
//     '2': '..---',
//     '3': '...--',
//     '4': '....-',
//     '5': '.....',
//     '6': '-....',
//     '7': '--...',
//     '8': '---..',
//     '9': '----.',
//     '0': '-----',
//     '.': '.-.-.-',
//     ',': '--..--',
//     '?': '..--..',
//     "'": '.----.',
//     '/': '-..-.',
//     '(': '-.--.',
//     ')': '-.--.-',
//     '&': '.-...',
//     ':': '---...',
//     ';': '-.-.-.',
//     '=': '-...-',
//     '+': '.-.-.',
//     '-': '-....-',
//     '_': '..--.-',
//     "'": '.-..-.',
//     '$': '...-..-',
//     '!': '-.-.--',
//     '@': '.--.-.',
//     ' ': '/',
// };

// let mydict = [];
// mydict += Object.entries(dict);
// console.log(mydict);
// console.log(mydict.values());