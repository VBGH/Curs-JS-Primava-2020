console.log(`******** exercitiul 1 ********`);

const baniiMeiInRon = 749;

// functie care ia 2 parametrii, valoarea care trubuie schimbata si moneda in care se doreste
// a se face schimbul
const schimbValutart = function (valoareInRon, monedeInCareSchimba) {
    let rezultat = `suma de ${valoareInRon} Ron schimbata in ${monedeInCareSchimba} este: `;

    // functie care alege cate zecimale sa aiba trazactia 
    const zecimale = function (numar) {
        return numar.toFixed(2)
    }

    // switch case pentru cele 3 monede pentru care se poate face schimbul valutar
    switch (monedeInCareSchimba.toUpperCase()) {
        case 'EUR':
            rezultat = `${rezultat} ${zecimale(valoareInRon / 4.5)} `;
            break;
        case 'USD':
            rezultat = `${rezultat} ${zecimale(valoareInRon / 4.2)} `;
            break;
        case 'HUF':
            rezultat = `${rezultat} ${zecimale(valoareInRon / 0.03)} `;
            break;
        default:
            rezultat = `nu schimbam in aceasta moneda '${monedeInCareSchimba}'`
    }

    return rezultat;
}

console.log(schimbValutart(baniiMeiInRon, 'eur'));
console.log(schimbValutart(baniiMeiInRon, 'usd'));
console.log(schimbValutart(baniiMeiInRon, 'huf'));
console.log(schimbValutart(baniiMeiInRon, 'gbp'));

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

console.log(`******** exercitiul 2 ********`);

const whatTypeIsThis = function (data) {
    return typeof (data)
}

console.log(whatTypeIsThis('i am a string'));
console.log(whatTypeIsThis(12));
console.log(whatTypeIsThis({}));

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

console.log(`******** exercitiul 3 ********`);

const demoString = 'Universitatea Tehnica Cluj Napoca';

// Function that return first letter from each word from string
const firstLetter = function (string) {
    if (typeof (string) === 'string') {
        const strings = string.split(' ');
        let result = '';

        for (let i = 0; i < strings.length; i++) {
            result = result + strings[i][0];
        }

        return result;
    } else {
        return `your input '${string}' is not a string or a sentance`;
    }
}

console.log(firstLetter(demoString));

const listOfStrings = [
    "Quisque faucibus ipsum id nibh egestas bibendum.",
    "Phasellus tincidunt sapien nec est tempus lacinia.",
    "Curabitur ac elit at turpis ultrices hendrerit at et tellus.",
    "Praesent a magna a ligula gravida sodales eu ut erat.",
    "Ut eleifend velit vitae ipsum mattis viverra."
];

// loop through each sentace (from the list above) and use the function FirstLetter
for (let i = 0; i < listOfStrings.length; i++) {
    console.log(firstLetter(listOfStrings[i]));
}


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

console.log(`******** exercitiul 4 ********`);

// class that creates a geometrica shape
// calculate the perimetre
// calculate semi peritemtre
// check what type of poligon it is (triagle, square, etc)
class Shape {
    constructor(color, sides) {
        this.color = color;
        this.sides = sides;
    }

    perimetru() {
        let perimetru = 0;

        for (let i = 0; i < this.sides.length; i++) {
            perimetru += this.sides[i]
        }

        return perimetru;
    }

    semiPerimetru() {
        const semiPerimetru = this.perimetru() / 2;

        return semiPerimetru;
    }

    tipPologon() {
        switch (this.sides.length) {
            case 3:
                return 'Triunghi';
            case 4:
                return 'Patrulater';
            case 5:
                return 'Pentagon';
            case 6:
                return 'Hexagon';
            default:
                return 'WORK IN PROGRESS';
        }
    }


}

let newShape = new Shape('red', [4, 3, 5, 4]);
console.log(newShape.tipPologon());
console.log(newShape.color);
console.log(newShape.perimetru());
console.log(newShape.semiPerimetru());

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

console.log(`******** exercitiul 5 ********`);

class Patrat extends Shape {
    // pentru ca este un patrat toate laturile sunt egale,
    // este suficient un singur numar
    constructor(color, side) {
        super(color, [side, side, side, side]);
    }

    tipPologon() {
        return 'Patrat';
    }

    aria() {
        const aria = this.sides[0] ** 2;
        return aria;
    }
}

class Triunghi extends Shape {
    constructor(color, sides) {
        super(color, sides);

        // verifica daca are 3 laturi
        if (sides.length !== 3) {
            throw 'it has to have 3 sides';
        }

        // verifica daca cele 3 laturi indeplinesc conditiile de a fi un triunghi
        const a = this.sides[0];
        const b = this.sides[1];
        const c = this.sides[2];

        const isItTriangle =
            (a < (b + c)) &&
            (b < (c + a)) &&
            (c < (b + a));

        if (!isItTriangle) {
            throw 'the 3 values do not create a triangle.'
        }
    }

    aria() {
        const sp = this.semiPerimetru();

        const aria = parseFloat
            (Math.sqrt(sp * (sp - this.sides[0]) * (sp - this.sides[1]) * (sp - this.sides[2]))
                .toFixed(2));

        return aria;
    }
}

const newTriunghi = new Triunghi('red', [3, 2, 3]);
console.log(newTriunghi.tipPologon());
console.log(newTriunghi.perimetru());
console.log(newTriunghi.semiPerimetru());
console.log(newTriunghi.aria());
console.log(newTriunghi.color);

const newPatrat = new Patrat('purple', 5);
console.log(newPatrat.tipPologon());
console.log(newPatrat.perimetru());
console.log(newPatrat.semiPerimetru());
console.log(newPatrat.aria());
console.log(newPatrat.color);