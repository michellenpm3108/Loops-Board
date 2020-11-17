const squares = Array.from (document.querySelectorAll('.scrab-grid div'))
console.log(squares);
const layout = [
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','I','C','A','N','','','',
    '','','','','','','','','','',
    '','','','D','0','I','T','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
]
const color = [
    1,1,1,1,1,1,1,1,1,1,
    3,3,3,3,3,3,3,3,3,3,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    3,3,3,3,3,3,3,3,3,3,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
]

for (let i=0; i < squares.length; i++) {
    let letter = layout[i] 
    squares[i].innerHTML = letter
    if (letter !== '') {
        squares[i].classList.add('yellow')
    }
}
for (let i=0; i < squares.length ; i++) {
    if (color[i] === 3) {
        squares[i].classList.add ('pattern')
    }
}