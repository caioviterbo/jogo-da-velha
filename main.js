const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('#reset');
let player = 'X';

function handleCellClick(event) {
  const cell = event.target;
  if (cell.textContent === '') {
    cell.textContent = player;
    player = player === 'X' ? 'O' : 'X';
  }
}

function handleResetClick() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  player = 'X';
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', handleResetClick)