'use strict'

function createResetButton() {
  const resetButton = document.createElement('button');
  resetButton.classList.add('reset-button')
  resetButton.textContent = 'Reset grid';
  resetButton.addEventListener('click', (e) => {
    resetGrid(e.target.parentElement)
  })
  return resetButton
}

function fillGrid(gridSize, gridContainer) {

  // Populate main container with divs
  for (let i = 0; i < gridSize; i++) {
    const newDivNode = document.createElement('div')
    newDivNode.classList.add('grid-item')
    newDivNode.style.minWidth = `${100 / Math.sqrt(gridSize)}%`

    // Mouseover coloring event (Happens only once!)
    newDivNode.addEventListener('mouseover', (e) => {
      let randomColorHex = Math.floor(Math.random()*16777215).toString(16);
      newDivNode.style.backgroundColor = '#' + randomColorHex
      newDivNode.style.opacity = '0'
      console.log(newDivNode.style.opacity)
    }, {once: true})
    // Mouseover opacity stacking (Happens 10x)
    newDivNode.addEventListener('mouseover', function (evt) {
      newDivNode.style.opacity = String(+newDivNode.style.opacity + 0.1)
    })


    gridContainer.appendChild(newDivNode)
  }
  // Add the reset button
  gridContainer.appendChild(createResetButton());
}


function getGridSize() {// Get user input
  let userInput = ''
  while (isNaN(parseInt(userInput, 10)) || userInput.trim() === '' || userInput >
  100 || userInput < 1) {
    userInput = prompt('Input grid square size (1-100)')
  }

  return parseInt(userInput, 10);
}


function resetGrid(gridContainer) {
  gridContainer.replaceChildren();
  const gridSize = getGridSize();
  fillGrid(gridSize * gridSize, gridContainer)
}




// Create the main container
const mainContainer = document.createElement('div')
mainContainer.classList.add('main-container')

// append container to body
document.body.appendChild(mainContainer)

//Run the script on init
resetGrid(mainContainer)







