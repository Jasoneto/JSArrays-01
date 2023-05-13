const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    let element = totals[index];
    sum = sum + element;
}
console.log(sum);

//using 'reduce' method, 'sum' is an accumulator.

const ans = totals.reduce((sum, element) => sum + element, 0) //with 'reduce' is mandatory specify the initial value '0'
console.log('ans', ans);
