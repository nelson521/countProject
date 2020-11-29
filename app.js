const btn = document.querySelector('#click');

const num = document.querySelector('#number');

let count = 1;

btn.addEventListener('click', function () {
  num.innerText = count++;
});
