const fornamn: string = 'Atwan';
const efternamn: string = 'Shaaban';
let x: number = 80;
let y: number = 20;
console.log(`${fornamn} ${efternamn} loves Typescript!`);
console.log(x + y);

let ifnum: number = 12;
if (ifnum > 10) {
	console.log('stort! 🌍');
} else {
	console.log('litet ⚾');
}

for (let i = 1; i <= 5; i++) {
	console.log(i);
}

function timesTwo(num: number) {
	return num * 2;
}

const powerOfTwo = (num: number) => num ** 2;

console.log(timesTwo(2), powerOfTwo(2));

