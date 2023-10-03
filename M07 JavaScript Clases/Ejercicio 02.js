/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/
class Persona {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
    constructor(nombre,apellido,edad,domicilio,estado){
       this._nombre=nombre;
       this._apellido=apellido;
       this._edad=edad;
       this._domicilio=domicilio;
       this._estado=estado;
    }

    Detalle(){
      console.log('Se llama',this._nombre , this._apellido,'Tiene la edad de :',this._edad,'y su domicilio es:',this._domicilio);
    }   

 }
     var datos1 = new Persona('Juan','Perez',35,'Colombia (city: Cartagena)');
     datos1.Detalle();
 
 function crearInstanciaPersona(nombre, apellido, edad, domicilio,estado) {
    // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
    // Recibirás las propiedades por parámetro.
    // Retornar la instancia creada.
    // Tu código:
    var int= new Persona(nombre,apellido,edad,domicilio,estado);
    return int;
 }
 var x =crearInstanciaPersona('ANA','GOMEZ',40,'MEXICO','MONTERREY');
 console.log(x);

 function agregarMetodo() {
    // La función agrega un método "datos" a la clase "Persona".
    // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
    // Ejemplo: "Juan, 22 años".
    // Tu código:
    datos1.datos= function(){
          console.log ('Su Nombre es: ',this._nombre ,'y tiene la edad de: ',this._edad,'Años');
       }
      datos1.datos();
 }
 agregarMetodo();
 


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
