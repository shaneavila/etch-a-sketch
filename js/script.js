const grid = document.querySelector('.grid');

function generateGrid(squareLength) {
  for (let i = 0; i < squareLength ** 2; i += 1) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    grid.appendChild(square);
    grid.style.gridTemplateColumns = `repeat(${squareLength}, 1fr)`;
  }
}

function clearGrid() {
  const clearButton = document.querySelector('#clear');
  clearButton.addEventListener('click', () => {
    let size = prompt('How big do you want the grid?', 16);
    console.log(size);
    if(size !== null) {
      const squares = document.querySelectorAll('.square');
      for (let i = 0; i < squares.length; i++) {
        grid.removeChild(squares[i]);
      }
      generateGrid(size);
    }
  });
}

function colorSquare() {
  let radioButtons = document.getElementsByName("selection");
  for (let i = 0; i < radioButtons.length; i++) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.addEventListener('mouseover', () => {
        if(radioButtons[i].checked === true) {
          if(radioButtons[i].value === 'random') {
            square.style.backgroundColor = colorRandom();
          } else if(radioButtons[i].value === 'shade') {
            square.style.backgroundColor = colorShade();
          } else if(radioButtons[i].value === 'black') {
            square.style.backgroundColor = colorBlack();
          } else if(radioButtons[i].value === 'erase') {
            square.style.backgroundColor = colorErase();
          }
        }
      });
    });
  }
}

function colorRandom() {
  
}

function colorShade() {

}

function colorBlack() {
  return '#000';
}

function colorErase() {
  return '#FFF';
}

generateGrid(16);
colorSquare();
clearGrid();