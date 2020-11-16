// LOOPS: loop allows to execute something many times as we want
// syntax: 
for (let i = 0; i < 10 ; i++) {
    console.log(i); //it will loop over and print out index 10 times from 0 to 9
}

// FOR LOOPS WITH ARRAYS
const designSkills = ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Indesign', 'Adobe XD', 'Adobe After Effect', 'Figma', 'Procreate']
for (let i = 0 ; i < designSkills.length ; i++) {
    console.log (designSkills[i]) // it will loop over the array
}

//NESTED LOOP
// a nested loop is a loop within a loop (an inner loop within the body of outer one)
// the first part of the outer loop trigger the inner loop which execute the completion
// Once the first loop is executed, it will wait for the second loop to finish executing, 
// and only then loop once more.

// Example: 4 builidings on the street, each building has 3 flats

const buildings = 4 
for (let i=0 ; i < buildings ; i++) {
    console.log ('building ' + (i+1))
    const flats = 3;
    for (let j=0 ; j < flats ; j++) {
        console.log ('flat ' + (j+1))
    }
}

// FOR LOOPS WITH IF STATEMENT 
// **Challenge: RED TEAM VS BLUE TEAM
// Have 9 players. Create a loop that loops over the numbers given to each one of us. 
// If the person has even number, print out the word 'blue team'. 
// If it is odd, print out the word 'red team'.

const players = 9
for (let i = 1 ; i <= players ; i++) {
    if (i % 2 === 0) { 
        console.log('Person number ' + i + ' is on the blue team');
    } else console.log('Person number ' + i + ' is on the red team');
}

// **Challenge: COUNT THE MUSTARD
// you are at your shift at the shop and the owner has left you with a long list of
// things in the inventory. He has asked you to find out how many 'mustard' bottles you have in 
// stock. Use a for loop to count the amount of 'mustard' you have.

const shopInventory = ['milk', 'Cheddar', 'mustard', 'ketchup', 'olive oil', 'cheddar', 'milk',
 'garlic', 'mayo', 'carrots', 'cheddar', 'Mustard', 'mayo', 'orange juice']

let count = 0 
for (let i = 0; i < shopInventory.length ; i++) {
    if (shopInventory[i].toLowerCase() === 'mustard') {
        count = count + 1 
    }
}
console.log ('We have ' + count + ' mustard(s) left in our inventory')

// ** Challenge: NIGHTCLUB MESSAGE
// You are working at a very fancy new nightclub and in charge of letting people in 
// based on their age. If they are not 21 years of age, you cannot let them in. 
// Please send them a nice personalised message letting them know.

const nightClubRegister = [
    {
        name: 'Ahmed',
        lastname: 'Abdool',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Sally',
        lastname: 'Morgan',
        age: 18,
        gender: 'female'
    },
    {
        name: 'Dionne',
        lastname: 'Brown',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Max',
        lastname: 'Forrester',
        age: 20,
        gender: 'male'
    }
]

for (let i=0 ; i < nightClubRegister.length ; i++) {
    if (nightClubRegister[i].age < 21) {
        if (nightClubRegister[i].gender === 'male') {
            console.log ('Sorry mr. ' + nightClubRegister[i].lastname + ' you are not old enough to attend our nightclub party')
        } else  {
            console.log ('Sorry mrs./miss ' + nightClubRegister[i].lastname + ' you are not old enough to atttend our nightclub party')
        }
    } else {
        if (nightClubRegister[i].gender === 'male') {
            console.log ('Hi mr. ' + nightClubRegister[i].lastname + ' you are on the list')
        } else {
             console.log ('Hi mrs./miss ' + nightClubRegister[i].lastname + ' you are on the list')
        }
    }
}