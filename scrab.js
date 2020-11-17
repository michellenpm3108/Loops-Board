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

for (let i=0; i < squares.length; i++) {
    let letter = layout[i]
    for (let j=0; j < layout.length ; j++) {
        if (letter !=='') {
            squares[i].innerHTML = letter
        }
    }
}