//* ====== EJERCICIO 10 ======

//* Crear 2 (dos) clases con las siguientes características:

//* CLASE 1:
//* a) nombre de la clase: Persona
//* b) parámetros: un objeto con los siguientes atributos: nombre, edad, profesion
//* b) I- los valores por defecto deben ser los siguientes:
//*    nombre: 'Sin nombre'
//*    edad: null
//*    profesion: null
//* c) atributos: ninguno puede ser accesible directamente desde fuera de la clase
//* d) crear los respectivos métodos getters para todos los atributos
//* e) crear 1 método setter para poder modificar la profesión con las siguientes caracterísitcas y/o restricciones:
//* e) I- Si el valor recibido como argumento no es una cadena de texto, retornar "Parámetro inválido, por favor inserte una cadena de texto"
//* e) II- Si la persona ya contaba con una profesion asignada, retornar "Esta persona ya tiene una profesion asignada"
//* e) III- Para los restantes casos, setear la profesión.
//* f) crear 1 método llamado "quienSoy" que retorne un string diciendo "Soy NNN, tengo EEE años y mi profesión es PPP". En caso de no contar con una profesión
//* ...retornar el siguiente string "Soy NNN, tengo EEE años"
//* NNN es el nombre de la persona
//* EEE es la edad de la persona
//* PPP es la profesión de la persona

//* CLASE 2:
//* a) nombre de la clase: Alumno
//* b) debe heredar de la clase Persona
//* c) parámetros: un objeto con los siguientes atributos: nombre, edad, profesion, catedra, nivel
//* d) atributos: ninguno puede ser accesible directamente desde fuera de la clase
//* e) crear los respectivos métodos getters para todos los atributos
//* f) crear 2 métodos setters para poder modificar tanto la catedra como el nivel.
//* f) I- restricciones del método para modificar la catedra:
//*     Si el valor recibido como argumento no es una cadena de texto, retornar "Parámetro inválido, por favor inserte una cadena de texto"
//*     Debe tener una longitud mínimo de 5 caracteres, de lo contrario retornar "La catedrá a asignar debe tener al menos 5 caracteres"
//*     En caso de cumplir con lo anterior, setear la catedra
//* f) II- restricciones del método para modificar el nivel:
//*     Si el valor recibido como argumento no es un número, retornar "Parámetro inválido, por favor inserte un número"
//*     El nivel se debe encontrar en el rango de 1 a 5, caso contrario retornar "Rango inválido"
//*     En caso de cumplir con lo anterior, setear el nivel



class Persona {
    constructor({ nombre = "Sin nombre", edad = null, profesion = null }) {
      this._nombre = nombre;
      this._edad = edad;
      this._profesion = profesion;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    get edad() {
      return this._edad;
    }
  
    get profesion() {
      return this._profesion;
    }
  
    set profesion(nuevaProfesion) {
      if (typeof nuevaProfesion !== "string") {
        return "Parámetro inválido, por favor inserte una cadena de texto";
      }
      if (this._profesion !== null) {
        return "Esta persona ya tiene una profesion asignada";
      }
      this._profesion = nuevaProfesion;
    }
  
    quienSoy() {
      if (this._profesion === null) {
        return `Soy ${this._nombre}, tengo ${this._edad} años`;
      }
      return `Soy ${this._nombre}, tengo ${this._edad} años y mi profesión es ${this._profesion}`;
    }
  }
  
  
  class Alumno extends Persona {
    constructor({ nombre = "Sin nombre", edad = null, profesion = null, catedra, nivel }) {
      super({ nombre, edad, profesion });
      this._catedra = catedra;
      this._nivel = nivel;
    }
  
    get catedra() {
      return this._catedra;
    }
  
    get nivel() {
      return this._nivel;
    }
  
    set catedra(nuevaCatedra) {
      if (typeof nuevaCatedra !== "string") {
        return "Parámetro inválido, por favor inserte una cadena de texto";
      }
      if (nuevaCatedra.length < 5) {
        return "La catedra a asignar debe tener al menos 5 caracteres";
      }
      this._catedra = nuevaCatedra;
    }
  
    set nivel(nuevoNivel) {
      if (typeof nuevoNivel !== "number") {
        return "Parámetro inválido, por favor inserte un número";
      }
      if (nuevoNivel < 1 || nuevoNivel > 5) {
        return "Rango inválido";
      }
      this._nivel = nuevoNivel;
    }
  }
  
  
  const persona1 = new Persona({ nombre: "Kevin", edad: 30 });
  console.log(persona1.nombre);
  console.log(persona1.edad); 
  console.log(persona1.profesion); 
  persona1.profesion = "Ingeniero";
  console.log(persona1.profesion);
  console.log(persona1.quienSoy());
  
  const alumno1 = new Alumno({ nombre: "Yoisell", edad: 38, catedra: "Programación", nivel: 3 });
  console.log(alumno1.nombre);
  console.log(alumno1.edad); 
  console.log(alumno1.profesion);
  console.log(alumno1.catedra);
  console.log(alumno1.nivel);
  alumno1.catedra = "Matemáticas";
  console.log(alumno1.catedra);
  alumno1.nivel = 4;
  console.log(alumno1.nivel);
  console.log(alumno1.quienSoy());
  