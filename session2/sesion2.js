let obiect = {
    'marca': 'Audi',
    'model': 'RS',
    'year': '2015',
    'mileage': '20000',
    'color': 'blue',
}

console.log(obiect);

let randomNumber = Math.floor(Math.random() * 11);
let secretNumber = Math.floor(Math.random() * 11);
// console.log(secretNumber);

// while (secretNumber !== randomNumber) {
//     console.log(`am incercat numaru ${randomNumber}`);
//     randomNumber = Math.floor(Math.random() * 11);
// }

function functieTest(x, y) {
    console.log(x + y);
}

// functieTest(1, 2);

function produs(x, y) {
    return x * y
}

class Car {
    constructor(marca) {
        this.marca = marca;
    }

    setTrasnmision() {
        this.trasnmision = 'manual'
    }
}

masinaMea = new Car('Pejo');

console.log(masinaMea);
masinaMea.setTrasnmision();
console.log(masinaMea);
