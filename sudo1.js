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


//frequency distribution
//https://www3.nd.edu/~busiforc/handouts/cryptography/letterfrequencies.html

var distLetters = ""
// E	11.1607% 56.88
distLetters += "e".repeat(5688)
// M	3.0129%	15.36
distLetters += "m".repeat(1536)
// A	8.4966%	43.31
distLetters += "a".repeat(4331)
// H	3.0034%	15.31
distLetters += "h".repeat(1531)
// R	7.5809%	38.64
distLetters += "r".repeat(3864)
// G	2.4705%	12.59
distLetters += "g".repeat(1259)
// I	7.5448%	38.45
distLetters += "i".repeat(3845)
// B	2.0720%	10.56
distLetters += "g".repeat(1056)
// O	7.1635%	36.51
distLetters += "o".repeat(3651)
// F	1.8121%	9.24
distLetters += "f".repeat(924)
// T	6.9509%	35.43
distLetters += "t".repeat(3543)
// Y	1.7779%	9.06
distLetters += "y".repeat(906)
// N	6.6544%	33.92
distLetters += "n".repeat(3392)
// W	1.2899%	6.57
distLetters += "w".repeat(657)
// S	5.7351%	29.23
distLetters += "s".repeat(2923)
// K	1.1016%	5.61
distLetters += "k".repeat(561)
// L	5.4893%	27.98
distLetters += "l".repeat(2798)
// V	1.0074%	5.13
distLetters += "v".repeat(513)
// C	4.5388%	23.13
distLetters += "c".repeat(2313)
// X	0.2902%	1.48
distLetters += "x".repeat(148)
// U	3.6308%	18.51
distLetters += "u".repeat(1851)
// Z	0.2722%	1.39
distLetters += "z".repeat(139)
// D	3.3844%	17.25
distLetters += "d".repeat(1725)
// J	0.1965%	1.00
distLetters += "j".repeat(100)
// P	3.1671%	16.14
distLetters += "p".repeat(1614)
// Q	0.1962%	(1)
distLetters += "q".repeat(100)


// create model
console.log('it works')
const gridSize = 15
//const letters = ['a','b','c','d','e','f','g','j','i','j','k','l','m','n','o','p','q','r','s','t','v','u','w','x','y','z']
const grid = []
for (let i=0;i<gridSize;i++){
    var row = []
    for (let j=0;j<gridSize;j++){
        row.push(distLetters[getRandomInt(distLetters.length)])
    }
    grid.push(row)
}

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
