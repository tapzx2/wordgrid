// get user input for grid size (10x10 minimum 100x100 maximum - could be a slider?)
// fill with random letters
// grid = [
//     [a, b, c, d, d, e, a, f, a],
//     [f, a, q, e, z, g, a, d, a],
//     ...etc
// ]

// The same word is allowed to appear more than once in list if in the grid more than once.

// Search grid in 4 directions for matches from dictionary

// for direction in directions
//   for coord in coords
//     for length in lenghts
//       if length and direction fits in grid
//         if check dictionary word matches(starting with first letter)
//           add word, startloc, endloc to find dictionary




// lengths = word length Range: 3 to grid max length



// create model
console.log('it works')
const gridSize = 15
const letters = ['a','b','c','d','e','f','g','j','i','j','k','l','m','n','o','p','q','r','s','t','v','u','w','x','y','z']
const grid = []
for (let i=0;i<gridSize;i++){
    var row = []
    for (let j=0;j<gridSize;j++){
        row.push(letters[getRandomInt(letters.length)])
    }
    grid.push(row)
}
console.log(letters.length)
console.log(grid)

  // get random letter helpers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// display grid in dom

function printGrid(gridSize) {
    const body = document.querySelector("body")
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid");
    gridContainer.style.display = "grid"
    gridContainer.style.backgroundColor = "grey "
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 25px)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 25px)`
    body.appendChild(gridContainer);
    for (let i=0;i<gridSize;i++){
        for (let j=0;j<gridSize;j++){
            const gridElement = document.createElement("div");
            const node = document.createTextNode(grid[i][j]);
            gridElement.appendChild(node);
            gridContainer.appendChild(gridElement);
        }
    }
    
}

printGrid(gridSize)