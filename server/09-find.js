//EXAMPLE 1
const numbers = [1, 30, 49, 29, 10, 13];

//'.find' implicit long way
let ans = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        ans = element;
        break;
    }
}
console.log('for', ans);

//'.find' one code line
const ans2 = numbers.find(item => item === 30);
console.log('find', ans2);

//EXAMPLE 2

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const ans3 = products.find(item => item.id === '🍔');
console.log('find-emoji', ans3);

//with 'findIndex' don't return the complete object, just it position
//it returns '-1' if the method doesn't find the object
const ans4 = products.findIndex(item => item.id === '🍔');
console.log('findIndex', ans4);





