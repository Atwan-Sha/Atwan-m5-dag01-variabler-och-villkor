// import './kalibrering'

// STEG 1 ------------------------------------------------------------
console.log('Hej från Kafé Kardemumma');

// STEG 2 ------------------------------------------------------------
const kafeNamn: string = 'Kafé Kardemumma';
const prisBulle: number = 35;
const prisKaffe: number = 32;
let antalBullar: number = 2;
let antalKaffe: number = 1;
console.log(kafeNamn);
// prisBulle = 20;

// STEG 3 ------------------------------------------------------------
let str: string = 'some text';
let num: number = 123;
let bln: boolean = true;
let x: undefined;
let empty = null;
console.log(typeof str, typeof num, typeof bln, typeof x);
console.log(typeof empty); // object
// num = '123' // Error: Type 'string' is not assignable to type 'number'.

// STEG 4 ------------------------------------------------------------
let summa = antalBullar * prisBulle + antalKaffe * prisKaffe;
let momsDel = (summa * 0.12) / 1.12;
console.log(`Summa: ${summa} kr`);
// typeof momsDel.toFixed(2) // string
console.log(`Varav moms (12 %): ${momsDel.toFixed(2)} kr`);

// STEG 5 ------------------------------------------------------------
let ärStudent: boolean = true;
// ärStudent = false;
let attBetala = summa;
if (ärStudent === true) {
	attBetala = summa * 0.9;
}
console.log(`Att betala: ${attBetala.toFixed(2)} kr`);

// STEG 6 ------------------------------------------------------------
let veckodag: string = 'måndag';
let klockslag: number = 17;
let isOpen: string = 'nej';
// test: lördag 8, lördag 15, måndag 6, måndag 17
if (
	(veckodag === 'lördag' || veckodag === 'söndag') &&
	klockslag >= 9 &&
	klockslag <= 16
) {
	isOpen = 'ja';
} else if (
	!(veckodag === 'lördag' || veckodag === 'söndag') &&
	klockslag >= 7 &&
	klockslag <= 18
) {
	isOpen = 'ja';
}

console.log(`Öppet just nu: ${isOpen}`);

// STEG 7 ------------------------------------------------------------
// TODO: se README. Gissa först, kör sedan.
