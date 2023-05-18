const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for' ,element);
}

//the same thing above but in one line
letters.forEach(item => console.log('forEach' ,item))
