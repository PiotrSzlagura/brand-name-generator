let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','w','x','z'];
let vowels = ['a','e','i','o','u','y'];

function rand(par) {
  return Math.floor(Math.random() * par);
}

function isEven(value) {
  return value % 2 == 0
}

let times;

function isVowel(letter) {
  return vowels.indexOf(letter.toLowerCase()) !== -1
}

function brandName(times, firstLetter, length) {
  const firstLetterIsVowel = isVowel(firstLetter);
  let brands = [];

  firstLetter = firstLetter.toUpperCase();
  length = length - firstLetter.toString().length;

  for (let a = 0; a < times; a++) {
    let brand = '';

    for (let i = 0; i < length; i++) {
      let letterSource = [];

      if(firstLetterIsVowel) {
        if(isEven(i)) {
          letterSource = consonants;
        } else {
          letterSource = vowels;
        }
      } else {
        if(isEven(i)) {
          letterSource = vowels;
        } else {
          letterSource = consonants;
        }
      }

      brand += letterSource[rand(letterSource.length)];
    }

    brands.push(firstLetter + brand);
  }
  return brands;
}

function run() {
  const form = document.querySelector(".config-form");
  const resultContainer = document.querySelector(".result-container");

  const {first_letter: firstLetterInput, length: lengthInput, count: countInput} = form;
  const firstLetter = firstLetterInput.value;
  const length = lengthInput.value;
  const count = countInput.value;

  const brands = brandName(count, firstLetter, length);

  resultContainer.innerHTML = brands.join("<br>");
}

document.querySelector(".generate-button").addEventListener("click", () => {
  run();
})
