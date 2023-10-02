// Хрестики - нулики

const container = document.querySelector('.js-content');
// console.log(container);

const nameWinner = document.querySelector('.js-winner')
let player = 'O';
let historyX = [];
let historyO = [];

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function createMarkup() {
  let markup = '';
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }

  // console.log(markup);
  container.innerHTML = markup;
}
createMarkup();

container.addEventListener('click', onClick);

function onClick(evt) {
  const { target } = evt;
  if (!target.classList.contains('js-item') || target.textContent) {
    return;
  }
  //   console.log(evt.currentTarget);
  //   console.log(evt.target);

  const isGameEnd = historyO.length + historyX.length === 9;
  const id = Number(target.dataset.id);
  let result = false;

  if (player === 'O') {
    historyO.push(id);
    result = isWinner(historyO);
  } else {
    historyX.push(id);
    result = isWinner(historyX);
  }
  //   console.log(isWinner(historyX));

  target.textContent = player;

  if (result) {
    nameWinner.textContent = `Winner ${player} (◕‿◕)`;
    console.log(`Winner ${player} (◕‿◕)`);
    resetGame();
    return;
  } else if (isGameEnd) {
    console.log(`Try again`);
    resetGame();
    return;
  }
  player = player === 'O' ? 'X' : 'O';
}

function isWinner(arr) {
  return wins.some(item => item.every(id => arr.includes(id)));
}

function resetGame() {
  createMarkup();
  historyX = [];
  historyO = [];
  player = 'O';
}
