const squares = Array.from(document.querySelectorAll('.grid div'))
for (let i=0 ; i < squares.length ; i++) {
    if (i % 2 === 0) {
        squares[i].style.backgroundColor = '#D9A362'
    }
}