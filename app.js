const addCount = document.querySelector('#addCount');

const lowerCount = document.querySelector('#lowerCount');

const num = document.querySelector('#number');

let count = 0;

addCount.addEventListener('click', add);

function add() {
  num.innerText = count++;
  console.log(count);
}

lowerCount.addEventListener('click', minus);

function minus() {
  num.innerText = count--;
  console.log(count);
}
