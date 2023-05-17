//EXAMPLE 1
const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

//Long implicit way with 'concat'

const newArray = [...elements];//with spread operation '...' the array 'elements' won't clone its content for the data saved in memory.
//with '...' we copy all the elements of the array without the reference in memory
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);
//One line code 'concat':

const ans = elements.concat(othersElements); //'concat' is immutable
console.log('concat', ans);

//EXAMPLE 2
//we obtain the same result but using the spread operation '...', but is only functional with arrays, let's see the example 3
const ans2 = [...elements, ...othersElements];
console.log('...', ans2);

//EXAMPLE 3
const ans3 = [...elements, 'random'];
console.log('ans3', ans3);

//EXAMPLE 4
const ans4 = [...elements, ...'random'];
console.log('ans4', ans4);

//EXAMPLE 5, if I want to change original array
elements.push(...othersElements);
console.log('elements', elements);

