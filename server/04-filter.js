const words = ['spray', 'limit', 'elite', 'exuberant'];

//long way but not using 'filter'

const newArray =  [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words);

//one line code using the method 'filter'

const ans = words.filter(item => item.length >= 6)
console.log('ans', ans);
console.log('original', words);

//an application case of 'filter' with a boolean

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName:'Taylor',
        total: 240,
        delivered: true,
    },
];

const ans2 = orders.filter(item => item.delivered && item.total >= 100);
console.log('ans2', ans2);