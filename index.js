function rand(par) {
  return Math.floor(Math.random() * par);
}

function isEven(value) {
  return value % 2 == 0
}

let times;

function brandName(times, firstLetter, length) {
  firstLetter = firstLetter.toUpperCase();
  let brands = [];
  length = length - firstLetter.toString().length;
  let consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','w','x','z'];
  let vowel = ['a','e','i','o','u','y'];
  let i = 0;
  let a = 0;
  for (a = 0; a < times; a++) { 
    let brand = '';
    for (i = 0; i < length; i++) {
      if (isEven(i))
        brand += consonant[rand(consonant.length)];
      else
        brand += vowel[rand(vowel.length)];
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