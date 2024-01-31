export class Modul {
    cicle;
    nom;
    num;
    hores = 0;
    constructor(cicle, nom, num, hores) {
        this.cicle = cicle;
        this.nom = nom;
        this.num = num;
        this.hores = hores;
    }
    toString() {
        console.log(
            `MP ${this.num}. ${this.nom}(${this.hores}h)`
        );
    }
}