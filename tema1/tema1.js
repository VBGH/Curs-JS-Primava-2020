console.log('Exercitiu 1');
const PI = 3.14;
let razaCer = 10;

let ariaCerc = PI * razaCer ** 2;

console.log(`Aria cercului cu raza de ${razaCer} cm este: ${ariaCerc}`);


console.log('...........');
console.log('Exercitiu 2');
const filme = [
    'spiderman 1',
    'spiderman 2',
    'spiderman 3',
    'avangers 1',
    'avangers 2'
]

for (let i = 0; i < filme.length; i++) {
    console.log(`Filmul ${filme[i]} se afla pe pozitia ${i}`)
}


console.log('...........');
console.log('Exercitiu 3');

const numere = [5, 3, "1", 7, "9", 30, "45", 7];
let max = 3;
let min = 30;
for (let i = 0; i < numere.length; i++) {
    if (typeof (numere[i]) === 'number') {
        min > numere[i] ? min = numere[i] : '';
        max < numere[i] ? max = numere[i] : '';
    }
}

console.log(`Numarul ninim este:${min} si numarul maxim este:${max}`)
