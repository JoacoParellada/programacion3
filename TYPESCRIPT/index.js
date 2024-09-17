"use strict";
//Ejercicio 3
let stringVar = "Hola mundo desde typescript";
let numberVar = 20;
let booleanVar = true;
let dateVar = new Date(2003, 9, 30);
const boxDatos = document.getElementById("box-tipoDatos");
boxDatos.innerHTML = `
<p>Texto: ${stringVar}</p>
<p>Numero: ${numberVar}</p>
<p>Booleano: ${booleanVar}</p>
<p>Fecha: ${dateVar.toLocaleDateString()}</p>
`;
//Ejercicio 4
function numberToSring(num) {
    let numberConverted;
    numberConverted = num.toString();
    return numberConverted;
}
const boxNumString = document.getElementById("box-numToString");
boxNumString.innerHTML = `
<p>Numero convertido a cadena: ${numberToSring(777)}</p>
`;
//Ejercicio 5
let arrayNumbers = [15, 30, 40];
function sumArray(arrayNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        sum = sum + arrayNumbers[i];
    }
    return sum;
}
const boxSumArray = document.getElementById("box-sumaArray");
boxSumArray.innerHTML = `
<p>Suma de array: ${sumArray(arrayNumbers)}</p>
`;
//Ejercicio 6
const student = {
    name: "Joaquin Parellada",
    age: 20,
    curse: "Programacion III",
};
const boxObject = document.getElementById("box-objetoEstudiante");
boxObject.innerHTML = `
<p>Nombre: ${student.name}</p>
<p>Edad: ${student.age}</p>
<p>Curso: ${student.curse}</p>
`;
const myAddress = {
    street: "Av. Ocean Drive 777",
    city: "Miami, Florida",
    zipCode: 33166,
};
const boxType = document.getElementById("box-typePersonalizado");
boxType.innerHTML = `
<p>Calle: ${myAddress.street}</p>
<p>Ciudad: ${myAddress.city}</p>
<p>CP: ${myAddress.zipCode}</p>
`;
const user1 = {
    name: "Joaquin Parellada",
    email: "joaco@gmail.com",
    greet() {
        return `Hola, mi nombre es ${this.name} y mi correo es: ${this.email}`;
    },
};
const boxInterface = document.getElementById("box-interface");
boxInterface.innerHTML = user1.greet();
//Ejercicio 9
class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduceYourself() {
        return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
    }
}
const person1 = new Persona("Agustin Tapia", 25);
const boxClass = document.getElementById("box-class");
boxClass.innerHTML = person1.introduceYourself();
//Ejercicio 10
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    getValor() {
        return this.valor;
    }
}
const boxString = new Caja("Mensaje secreto");
const boxNumber = new Caja(23);
const stringElement = document.getElementById("stringValue");
const numberElement = document.getElementById("numberValue");
if (stringElement)
    stringElement.textContent = `Contenido de cajaDeTexto: ${boxString.getValor()}`;
if (numberElement)
    numberElement.textContent = `Contenido de cajaDeNumero: ${boxNumber.getValor()}`;
//Ejercicio 11
function identidad(valor) {
    return valor;
}
const valueString = identidad("jelou");
const valueNumber = identidad(321);
const stringElement2 = document.getElementById("stringIdentity");
const numberElement2 = document.getElementById("numberIdentity");
if (stringElement2)
    stringElement2.textContent = `Identidad del texto: ${valueString}`;
if (numberElement2)
    numberElement2.textContent = `Identidad del número: ${valueNumber}`;
//Ejercicio 12
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Azul"] = "Azul";
    Color["Verde"] = "Verde";
})(Color || (Color = {}));
const favColor = Color.Verde;
const colorElement = document.getElementById("color");
if (colorElement)
    colorElement.textContent = `Color favorito: ${favColor}`;
