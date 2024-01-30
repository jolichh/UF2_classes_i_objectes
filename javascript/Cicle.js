export class Cicle {
    nom;
    categoria;
    numAlumnes;
    abreviatura;
    numEdicions;
    dataUtimEdicio;
    moduls;
    horesTotals;
    constructor(nom, categoria, numAlumnes, abreviatura) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0;
        this.moduls = [];
        this.horesTotals = 0;
    }

    setNumEdicions() {
        let date = new Date();              
        this.dataUtimEdicio = date.getDate() + "/"+ (date.getMonth()+1)+"/"+date.getFullYear();
        this.numEdicions = this.numEdicions + 1;
        //this.toString();
        console.log(`Última modificació: ${this.dataUtimEdicio}. Total modificacions: ${this.numEdicions}`);
    }
    toString() {
        console.log(
            "Cicle: "+this.nom+
            "\nCategoria: "+this.categoria+
            "\nAlumnes: "+this.numAlumnes+
            "\nAbreviatura: "+this.abreviatura+
            "\nModuls: "+JSON.stringify(this.moduls, null, 2)
        );
    }
    afegirModulAlCicle(modul) {
        this.moduls.push(modul);
        this.orderByNumModuls();
        this.calcularHoresCicle();
        console.log(this.moduls);
    }
    orderByNumModuls() {
        this.moduls.sort(function(a,b) {
            if (a.num>b.num) {return 1};
            if (a.num<b.num) {return -1};
            return 0;
        })
        return this.moduls;
    }
    calcularHoresCicle() {
        this.moduls.forEach(element => {
            this.horesTotals = this.horesTotals + parseInt(element.hores, 10); //sistema decimal
        })
    }
}