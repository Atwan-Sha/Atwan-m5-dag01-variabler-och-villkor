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
// TODO: skapa veckodag (string, "lördag") och klockslag (number, 15)
// TODO: avgör om kaféet är öppet (boolean): vardagar 7–18, helger 9–16
// TODO: skriv ut "Öppet just nu: ja" eller "Öppet just nu: nej"



// STEG 7 ------------------------------------------------------------
// TODO: se README. Gissa först, kör sedan.
