const elements = ['fire', 'Air', 'water'];

//EXAMPLE 1
let finalAns = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    finalAns = finalAns + element + separator;
}

const ans = elements.join('--');
console.log('for', finalAns);
console.log('join', ans);

//EXAMPLE 2 with 'split':
const title = 'Arrays manipulation course';

const finalUrl = title.split(' ').join('-').toLowerCase(); //if I don't put a space into the '.split(' '), it separate letter to letter LOL
console.log(finalUrl);

//Curious aport, we can use 'replaceAll' to do the same xD

function solution(title) {
	return title.replaceAll(" ", "-").toLowerCase();
};
