
export class Cicle {
    #nom;
    #categoria;
    #numAlumnes;
    #abreviatura;
    #numEdicions;
    #dataUtimEdicio;
    constructor(nom, categoria, numAlumnes, abreviatura) {
        this.#nom = nom;
        this.#categoria = categoria;
        this.#numAlumnes = numAlumnes;
        this.#abreviatura = abreviatura;
        let numEdicions = 0;
    }

    setNumEdicions() {
        this.#numEdicions++;
        let date = new Date();
        this.#dataUtimEdicio = date.getDate() + "/"+ date.getMonth()+"/"+date.getFullYear();
    }
}