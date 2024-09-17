//Ejercicio 3

let stringVar: String = "Hola mundo desde typescript";
let numberVar: number = 20;
let booleanVar: Boolean = true;
let dateVar: Date = new Date(2003, 9, 30);

const boxDatos = document.getElementById("box-tipoDatos");

boxDatos!.innerHTML = `
<p>Texto: ${stringVar}</p>
<p>Numero: ${numberVar}</p>
<p>Booleano: ${booleanVar}</p>
<p>Fecha: ${dateVar.toLocaleDateString()}</p>
`;

//Ejercicio 4

function numberToSring(num: number) {
  let numberConverted: String;
  numberConverted = num.toString();
  return numberConverted;
}
const boxNumString = document.getElementById("box-numToString");

boxNumString!.innerHTML = `
<p>Numero convertido a cadena: ${numberToSring(777)}</p>
`;

//Ejercicio 5
let arrayNumbers: number[] = [15, 30, 40];

function sumArray(arrayNumbers: number[]) {
  let sum: number = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    sum = sum + arrayNumbers[i];
  }
  return sum;
}

const boxSumArray = document.getElementById("box-sumaArray");

boxSumArray!.innerHTML = `
<p>Suma de array: ${sumArray(arrayNumbers)}</p>
`;

//Ejercicio 6

const student = {
  name: "Joaquin Parellada",
  age: 20,
  curse: "Programacion III",
};

const boxObject = document.getElementById("box-objetoEstudiante");

boxObject!.innerHTML = `
<p>Nombre: ${student.name}</p>
<p>Edad: ${student.age}</p>
<p>Curso: ${student.curse}</p>
`;

//Ejercicio 7

type address = {
  street: string;
  city: string;
  zipCode: number;
};

const myAddress: address = {
  street: "Av. Ocean Drive 777",
  city: "Miami, Florida",
  zipCode: 33166,
};

const boxType = document.getElementById("box-typePersonalizado");

boxType!.innerHTML = `
<p>Calle: ${myAddress.street}</p>
<p>Ciudad: ${myAddress.city}</p>
<p>CP: ${myAddress.zipCode}</p>
`;

//Ejercicio 8

interface User {
  name: string;
  email: string;
  greet(): string;
}

const user1: User = {
  name: "Joaquin Parellada",
  email: "joaco@gmail.com",
  greet() {
    return `Hola, mi nombre es ${this.name} y mi correo es: ${this.email}`;
  },
};

const boxInterface = document.getElementById("box-interface");

boxInterface!.innerHTML = user1.greet();

//Ejercicio 9

class Persona {
  constructor(public name: string, public age: number) {}
  introduceYourself() {
    return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
  }
}

const person1 = new Persona("Agustin Tapia", 25);
const boxClass = document.getElementById("box-class");

boxClass!.innerHTML = person1.introduceYourself();

//Ejercicio 10

class Caja<T> {
  private valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }

  getValor(): T {
    return this.valor;
  }
}

const boxString = new Caja<string>("Mensaje secreto");
const boxNumber = new Caja<number>(23);

const stringElement = document.getElementById("stringValue");
const numberElement = document.getElementById("numberValue");

if (stringElement)
  stringElement.textContent = `Contenido de cajaDeTexto: ${boxString.getValor()}`;
if (numberElement)
  numberElement.textContent = `Contenido de cajaDeNumero: ${boxNumber.getValor()}`;

//Ejercicio 11
function identidad<T>(valor: T): T {
  return valor;
}

const valueString = identidad<string>("jelou");
const valueNumber = identidad<number>(321);

const stringElement2 = document.getElementById("stringIdentity");
const numberElement2 = document.getElementById("numberIdentity");

if (stringElement2)
  stringElement2.textContent = `Identidad del texto: ${valueString}`;
if (numberElement2)
  numberElement2.textContent = `Identidad del número: ${valueNumber}`;

//Ejercicio 12
enum Color {
  Rojo = "Rojo",
  Azul = "Azul",
  Verde = "Verde",
}

const favColor: Color = Color.Verde;

const colorElement = document.getElementById("color");

if (colorElement) colorElement.textContent = `Color favorito: ${favColor}`;
