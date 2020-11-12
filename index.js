// THEORY
// in JS you can store values in something called variable 
// when you DECLARE a variable, its name must be unique. 
// You can ASSIGN a VALUE to your VARIABLE. The value can be string, array or boolean

//LET
let age = 22
// value here is 23, variable is age
// variable can be varied, by grabbing the variable and assign it a new value
age = 30

// CONST
// Const works in the same way as let does, however it is constant. 
// Once you have defined it, you cannot change it later on
const name = 'Mai'

//SCOPE
// Variable has 2 types of scope
// Global scope: can be access in the whole JS file
// Function scope: can only be access inside var function

function functionScope() {
    let age = 23
    const name = 'Ania'
    console.log('I, ' + name + ' can confirm, I am currently ' + age + ' years of age.');
} 

function globalScope(){
    console.log('I, ' + name + ' can confirm, I am currently ' + age + ' years of age.');
}

functionScope() //invoque the function
globalScope()

// CHALLENGE:  BOOOK STORE 

let bookCount = 0 
function increment() {
    bookCount +=1
    console.log('The number of book in our store is ' + bookCount + ' books')
}
increment ()

function bookReplace() {
    let bookSold = ['Gulp', ' The Life of Pi', ' Quiet Power']
    console.log ('We have just sold ' + bookSold.length + ' books: ' + bookSold)

    let newBook = ['Moby Dick', ' Alice in Wonderland', ' Hungry Caterpillar']
    console.log ( newBook.length + ' new books available in our store are: ' + newBook)
}
bookReplace ()

function textCustomer() {
    const firstName = 'Mai'
    console.log ('Hi ' + firstName + ', your book is now in')
}
textCustomer()