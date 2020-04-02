class Triunghi {
    constructor(lataru1, latura2, latura3) {
        this.lataru1 = lataru1;
        this.lataru2 = latura2;
        this.lataru3 = latura3;
    }

    calculeazaPerimetru() {
        return this.lataru1 + this.lataru2 + this.lataru3
    }

}

class TriunghiEchilalteral extends Triunghi {
    constructor(latura) {
        super(latura, latura, latura);
        this.latura = latura;
    }

    arie() {
        return (this.latura ** 2 * Math.sqrt(3)) / 4
    }
}

const triunghi1 = new Triunghi(2, 5, 4);

console.log(triunghi1.calculeazaPerimetru());


const triunghiEchilateral = new TriunghiEchilalteral(3);

console.log(triunghiEchilateral.calculeazaPerimetru())
console.log(triunghiEchilateral.arie())