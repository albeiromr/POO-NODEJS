//una clase abstracta no se puede instanciar, solo se puede extender, sin embargo es muy parecida a una interfaz, obliga a sus clases
// hijas a implementar y sobreescribir sus métodos y propiedades marcadas con la palabra reservada abstract
//las propiedades y métodos de la clase abstracta que no son marcados con la palabra reservada abstract se heredan a la clase hija de 
//Forma normal usando el metodo super para transferir la información a la clase abstracta

//creando una clase abstracta con metodos y propiedades, algunos abstractos y otros no

//si todos los métodos y propiedades de la clase abstracta son abstractos no se necesita un constructor, solo es requerido que las clases hijas
//implementen el método super dentro del constructor

abstract class Animal {
  
  dieta:string;  

  abstract nombre: string;

  constructor(dieta: string){
    this.dieta = dieta;
  }
  
  abstract ruido(ruido:string): string;
}

// a continuación se crea una clase que extiende su clase abstracta, esta tiene que reescribir los metodos y propiedades abstractos
// y debe pasar con el metodo super las propiedades o metodos no abstractos hacia su clase abstracta o clase padre
class Mamifero extends Animal {

    nombre: string;

    constructor (nombre:string, dieta: string){
        super(dieta)
        this.nombre = nombre;
    }

    ruido(ruido: string):string{
        return ruido
    }
}

//instanciando un objeto desde la clase Mamifero
const sebra = new Mamifero("sebra", "Hervivoro");

//imprimiendo sebra
console.log(sebra, sebra.ruido("ruido de sebra"));


