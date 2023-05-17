//EXAMPLE 1, exercise with an algorithm used in jobs interviews
const matrix = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matrix.length; i++) {
    const array = matrix[i];
    for (let j = 0; j < array.length; j++) {
        const element = matrix[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);

//using 'flat' we specify until which level we want to flat, in this example, 3 levels:
const ans = matrix.flat(3)
console.log('flat', ans);

//we use 'infinity' to flat the array in one dimension