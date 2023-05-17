const pets = ['cat', 'dog', 'bat'];

//long implicit way '.includes' method
let includeInArray = false; //for default it begins with 'false'
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog') {
        includeInArray = true;
        break
    }
}
console.log('for', includeInArray);

//short way with array:
const ans = pets.includes('dog');
console.log('includes', ans);