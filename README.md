# Pràctica UF2. Classes i objectes
## Introducció
Aquesta activitat pretén que l’alumne practiqui la sintaxi d’objectes de Javascript de les darreres
especificacions on s’utilitza una aproximació sintàctica més semblant a altres llenguatges com Java.

## Enunciat
Per treballar amb aquest projecte necessites descarregar-te aquest codi de partida
El primer que has de fer es crear l’estructura de carpetes habitual:
- index.html
- js/script.js

I refactoritzar les referències antigues.

## Classe Cicle
1. Crea la classe Cicle

2. Crea el constructor de la classe cicle i modifica la manera de crear l’objecte al codi donat

3. Al constructor de la classe cicle afegeix-li una variable que sigui numEdicions. El seu valor serà 0 inicialment i no se rep al constructor.

4. Crea el mètode setNumEdicions i fes que aquest valor incrementi cada vegada que edites el cicle.

5. Guarda la data de l’última vegada que has editat el cicle.

6. Crea una funció toString() que imprimeixi tota la informació del cicle

7. Al constructor crea l’array de mòduls, inicialment buida

8. Crea una funció que permeti afegir un mòdul a la llista de mòduls

9. Modifica la funció toString per a que també imprimeixi els mòduls de cada cicle, fes que aquests apareguin ordenats pel seu número

10. Crea una funció que calculi les hores que té el cicle en funció dels mòduls afegits

## Classe Mòdul
2. Crea el constructor de la classe
3. Crea una funció toString() que imprimeixi la informació d’un mòdul en el següent format

        MP{num}. {Nom del mòdul} ({hores}h)

### script.js
1. Fes que quan cliquis el botó d’afegir mòdul, afegeixi el mòdul al cicle que pertoqui

2. Fes que quan cliqui el botó d’Eliminar elimini el cicle del llistat

3. Fes que quan cliqui el botó d’Editar modifiqui les dades del cicle. Cada vegada que edites un cicle fes que es mostri, per console.log, el nombre d’edicions i la darrera data d’edició.

4. Fes que quan cliqui el botó de càlcul d’hores et mostri un alert amb les hores del cicle

### cicles.js
```
export class Cicle{
    constructor(){}
}
```

### script.js
```
import {...} from './Cicle.js';
...
document.getElementById("btnAfegirCicle").addEventListener("click", afegirCicle);
document.getElementById("btnAfegirModul").addEventListener("click", afegirModul);
//Afegir els addEventListener per als altres botons
```

### index.html
- Eliminar onClick() dels botons
- Afegir id al botó d’afegir cicle (btnAfegirCicle)
- Afegir id al botó d’afegir mòdul (btnAfegirModul)
- Afegir el tipus modal al script
```
<script src="script.js" type="module"></script>
```