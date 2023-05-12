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

//with '.map' I can transform my array in other thing that my algorithm
//permit, in this case I'm calling only the '.total' into the const
// 'ans'.

console.log('original', orders);
const ans = orders.map((item) => item.total);
console.log('ans', ans);

//const ans2 = orders.map((item) => {
//    item.tax = 0.19;
//    return item;
//});
//console.log('ans2', ans2);
//console.log('original', orders);

//'.map' brings data from memory, so, the const 'orders'
// bring in the new attribute 'item.tax', we can fix this
//with: (only the the object save the references in memory
//not the primitive data like strings or numbers)

const ans3 = orders.map((item) => {
    return {
        ...item, //with '...' we copy the object without the info saved in memory
        tax: 0.19,
    };
});
console.log('ans3', ans3);
console.log('original', orders);

