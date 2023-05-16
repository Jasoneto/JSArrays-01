const letters = ['a', 'b', 'c'];

const newArray = letters.map(item => item + '++'); //'.map' creates a new array with a transformation

//const  newArray = [];
//for (let index = 0; index < letters.length; index ++) {
//    const element = letters[index];
//    newArray.push(element + '++');
//}
console.log('original', letters);
console.log('new', newArray);

//other example with '.map'

const numbers = [1,2,3,4,5]
const newNumbers1 = numbers.map( function(number){
    return number * 2
})
// o
const newNumbers2 = numbers.map(number => number * 2)

console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]