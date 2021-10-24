//este archivo muestra como crer una clase en Typescript y como instanciar un objeto a partir de ella

//creando la clase
class Persona {

    //propiedades o estado de la clase
    nombre:string;
    edad:number;
    profesion:string;

    //constructor de la clase
    constructor(nombre:string, edad:number, profesion:string){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    //funciones o metodos de la clase
    cambiarNombre(nombre:string){
        this.nombre = nombre;
    }

    cumplirAnos(cantidadAnos:number){
        this.edad += cantidadAnos;
    }

    cambiarProfesion(nuevaProfesion: string){
        this.profesion = nuevaProfesion;
    }
}

///////////Creación de un objeto basado en la clase persona//////////////
const andres = new Persona("Andres", 23, "Abogado");

//////////Imprimiendo a andres/////////////////
console.log(andres);

//////// cambiaandole el nombre a andres ////////
andres.cambiarNombre("Jaime");

///////// haciedo Andres cumpla un año //////////
andres.cumplirAnos(1);

//////// haciendo que Andres cambie de profesion //////////
andres.cambiarProfesion("Policía");

///////imprimiendo al nuevo Andres////////
console.log(andres);


