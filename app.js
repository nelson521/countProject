const addCount = document.querySelector('#addCount');

const lowerCount = document.querySelector('#lowerCount');

const num = document.querySelector('#number');

let count = 0;

addCount.addEventListener('click', add);

function add() {
  count += 1;
  num.innerText = count;
  console.log(count);
}

lowerCount.addEventListener('click', minus);

function minus() {
  count -= 1;
  num.innerText = count;
  console.log(count);
}
