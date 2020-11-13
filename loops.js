// LOOPS
// loop allows to execute something many times as we want
// syntax: 
for (let i = 0; i < 10 ; i++) {
    console.log(i); //it will loop over and print out index 10 times from 0 to 9
}

// FOR LOOPS WITH ARRAYS
const designSkills = ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Indesign', 'Adobe XD', 'Adobe After Effect', 'Figma', 'Procreate']
for (let i = 0 ; i < designSkills.length ; i++) {
    console.log (designSkills[i]) // it will loop over the array
}

// FOR LOOPS WITH IF STATEMENT 
// **Challenge: Have 9 players. Create a loop that loops over the numbers given to each one of us. 
// If the person has even number, print out the word 'blue team'. 
// If it is odd, print out the word 'red team'.

const players = 9
for (let i = 1 ; i <= players ; i++) {
    if (i % 2 === 0) { 
        console.log('Person number ' + i + ' is on the blue team');
    } else console.log('Person number ' + i + ' is on the red team');
}
