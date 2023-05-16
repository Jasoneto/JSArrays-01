//EXAMPLE 1
const items = [1, 3, 2, 3, 3, 1, 10];

const ans = items.reduce ((obj, item) => { //'obj' is the final value we expect, and 'item' the values we see in the iterations
    if (!obj[item]) { //if the object don't exist
        obj[item] = 1;
    } else { //if the object exist
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
//output= what I expect
console.log(ans);

//EXAMPLE 2
const data = [
    {
        name: 'Nicolas',
        level: 'low',
    },
    {
        name: 'Andrea',
        level: 'medium',
    },
    {
        name: 'Bertha',
        level: 'high',
    },
    {
        name: 'Santiago',
        level: 'low',
    },
    {
        name: 'Lucia',
        level: 'high',
    },
    {
        name: 'Taylor',
        level: 'medium',
    },
];

const ans2 = data
.map(item => item.level)
.reduce ((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(ans2)

//EXAMPLE 3

function solution(numbers) {
    return numbers.reduce((sum, i) => sum + i, 0)
};