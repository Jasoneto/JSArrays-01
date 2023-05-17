//EXAMPLE 1

const numbers = [1, 30, 49, 29, 10, 13];
//'every' evaluate that all the elements fulfill with the condition
//long way 'every'
let ans = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        ans = false
    }
}
console.log('for', ans);
const ans2 = numbers.every(item => item <= 40)
console.log('ans2', ans2);

//EXAMPLE 2

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const admit = team.every(employee => employee.age > 15);
console.log('admitted', admit);