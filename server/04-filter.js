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
