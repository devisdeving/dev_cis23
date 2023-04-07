function cToF (celsius) {
    return (celsius * 9 / 5) + 32;
};

const c = cToF(23);
console.log(c);

function fToC (farenheit) {
    return (farenheit -32) * 5 / 9;
};

const f = fToC(23);
console.log(f);

const convertToCEl = document.querySelector(".convertToC");

console.log(convertToCEl);

convertToCEl.addEventListener("click", function(){
    const userInputEl = document.querySelector(".userInput");
    const inputValue = userInputEl.getAttribute('value');

    let convertedValue = fToC(inputValue);

    const resultEl = document.querySelector(".result");

    resultEl.innerHTML = convertedValue;
})

const convertToFEl = document.querySelector(".convertToF");

console.log(convertToFEl);

convertToFEl.addEventListener("click", function(){
    const userInputEl = document.querySelector(".userInput");

    const inputValue = userInputEl.getAttribute('value');
    console.log(inputValue);

    let convertedValue = cToF(inputValue);

    const resultEl = document.querySelector(".result");

    resultEl.innerHTML = convertedValue;
})

