let squares = Array.from(document.querySelectorAll('.pacman-grid div'))
let layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,2,1,3,3,3,1,1,1,1,1,1,3,3,3,3,2,1,
    1,3,3,3,1,3,3,3,3,3,3,3,3,1,1,1,3,1,
    1,1,1,1,1,3,1,1,1,1,1,1,3,1,1,1,1,1,
    1,3,3,3,3,3,4,4,4,4,4,4,3,3,3,3,3,1,
    1,1,1,1,3,1,1,1,1,4,1,1,1,3,1,1,1,1,
    1,1,3,1,3,1,1,1,5,4,6,1,1,3,1,3,1,1,
    1,1,3,3,3,1,1,1,7,4,8,1,1,3,3,3,1,1,
    1,1,1,3,1,1,1,1,1,1,1,1,1,1,3,1,1,1,
    3,3,3,3,3,3,3,3,3,9,3,3,3,3,3,3,3,3,
    1,1,3,1,1,1,1,1,1,3,1,1,1,1,1,3,1,1,
    1,3,3,3,3,3,3,1,1,3,1,3,3,3,3,3,3,1,
    1,3,1,3,1,1,3,1,1,3,1,1,3,1,1,1,3,1,
    1,3,1,3,1,1,3,1,1,3,3,3,3,1,3,1,3,1,
    1,3,1,3,1,1,3,1,1,3,1,1,3,1,3,1,3,1,
    1,3,1,3,1,1,3,1,1,3,1,1,1,1,3,1,3,1,
    1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

for (let i=0 ; i < squares.length ; i++) {
    if (layout[i] === 1) {
        squares[i].classList.add('one');
    } 
    if (layout[i] === 2) {
        squares[i].classList.add('two');
    }
    if (layout[i] === 3) {
        squares[i].classList.add('three')
    }
    if (layout[i] === 4) {
        squares[i].classList.add('four')
    }
    if (layout[i] === 5) {
        squares[i].classList.add('five')
    }
    if (layout[i] === 6) {
        squares[i].classList.add('six')
    }
    if (layout[i] === 7) {
        squares[i].classList.add('seven')
    }
    if (layout[i] === 8) {
        squares[i].classList.add('eight')
    }
    if (layout[i] === 9) {
        squares[i].classList.add('nine')
    }
}