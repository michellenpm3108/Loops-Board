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

// **Challenge: you are at your shift at the shop and the owner has left you with a long list of
//things in the inventory. He has asked you to find out how many 'mustard' bottles you have in 
//stock. Use a for loop to count the amount of 'mustard' you have.

const shopInventory = ['milk', 'Cheddar', 'mustard', 'ketchup', 'olive oil', 'cheddar', 'milk',
 'garlic', 'mayo', 'carrots', 'cheddar', 'Mustard', 'mayo', 'orange juice']

let count = 0 
for (let i = 0; i < shopInventory.length ; i++) {
    if (shopInventory[i].toLowerCase() === 'mustard') {
        count = count + 1 
    }
}
console.log ('We have ' + count + ' mustard(s) left in our inventory')