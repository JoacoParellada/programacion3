console.log("---INTRODUCCION A JS---");
console.log("---EJERCICIO 1---");
{
  let a = 20;
  let b = 30;
  let c = a + b;
  console.log(`a + b = ${c}`);
}
{
  console.log("---EJERCICIO 2---");
  //let userName = prompt("Ingresa tu nombre de usuario:");
  //console.log(`Hola, ${userName}`);
}
console.log("---OPERADORES LOGICOS Y CONDICIONALES---");
console.log("---EJERCICIO 1---");
{
  let a = 22;
  let b = 37;
  let c = 12;
  let mayor = null;

  if (a > b && a > c) {
    mayor = a;
  } else if (b > a && b > c) {
    mayor = b;
    5;
  } else {
    mayor = c;
  }
  console.log(`El mayor numero ingresado es: ${mayor}`);
}
console.log("---EJERCICIO 2---");
/*
{
  let parImpar = prompt("Ingresa un numero:");
  if (parImpar % 2 == 0) {
    console.log(`El numero ${parImpar} es par.`);
  } else {
    console.log(`El numero ${parImpar} es impar.`);
  }
}
*/
console.log("---OPERADORES DE ASIGNACION Y BUCLES---");
console.log("---EJERCICIO 1---");
{
  let i = 10;
  while (i > 0) {
    console.log(i);
    i--;
  }
}
console.log("---EJERCICIO 2---");
/*
{
  let number;
  do {
    number = prompt("Ingresa un numero mayor a 100:");
  } while (number <= 100);
}
*/
console.log("---FUNCIONES EN JS---");
console.log("---EJERCICIO 1---");
function isPair(a) {
  let result;
  if (a % 2 == 0) {
    result = true;
    console.log(`El numero ${a} es par: ${result}`);
  } else {
    result = false;
    console.log(`El numero ${a} es par: ${result}`);
  }
}
isPair(0);

console.log("---EJERCICIO 2---");
function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return console.log(`${celsius}°C equivalen a ${fahrenheit}°F`);
}
convertCelsiusToFahrenheit(24);

console.log("---OBJETOS EN JS---");
console.log("---EJERCICIO 1---");
let person = {
  name: "Joaquin",
  age: 20,
  city: "Mendoza",

  changeCity: function (newCity) {
    this.city = newCity;
  },
};

console.log(
  `Nombre: ${person.name}, Edad: ${person.age}, Ciudad: ${person.city}`
);

person.changeCity("Miami");

console.log(
  `Nombre: ${person.name}, Edad: ${person.age}, Ciudad: ${person.city}`
);

console.log("---EJERCICIO 2---");

let book = {
  title: "Viaje Al Centro De La Tierra",
  author: "Julio Verne",
  year: 1864,

  oldOrRecent: function () {
    let actualYear = new Date().getFullYear();
    let isOld = true;
    if (actualYear - this.year > 10) {
      return console.log(`El libro "${this.title}" es antiguo: ${isOld}`);
    } else {
      isOld = false;
      return console.log(`El libro "${this.title}" es antiguo: ${isOld}`);
    }
  },
};

book.oldOrRecent();

console.log("---ARRAYS EN JS---");
console.log("---EJERCICIO 1---");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
  numbers2.push(numbers[i] * 2); //El metodo push añade los numeros multiplicados al nuevo array
}
console.log(numbers);
console.log(numbers2);

console.log("---EJERCICIO 2---");

let pairs = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    pairs.push(i);
  }
}
console.log(pairs);

console.log("---INTRODUCCION AL DOM---");
console.log("---EJERCICIO 1---");

const p = document.getElementsByClassName("parrafos");
const button = document.getElementById("button");

const handleStlyeButton = () => {
  if (p[0].classList.contains("prf")) {
    for (let i = 0; i < p.length; i++) {
      p[i].classList.remove("prf");
    }
  } else {
    for (let i = 0; i < p.length; i++) {
      p[i].classList.add("prf");
    }
  }
};
button.addEventListener("click", () => {
  handleStlyeButton();
});

console.log("---EJERCICIO 2---");

const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");

const showName = () => {
  const nameValue = nameInput.value;
  if (nameValue) {
    alert(`El nombre ingresado es: ${nameValue}`);
  } else {
    alert("Por favor, ingresa tu nombre");
  }
};

btn.addEventListener("click", () => {
  showName();
});

console.log("---EVENTOS EN EL DOM---");
console.log("---EJERCICIO 1---");

const elements = document.getElementsByTagName("li");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", () => {
    console.log(elements[i].textContent);
  });
}

console.log("---Ejercicio 2---");

const textField = document.getElementById("input");
const buttonActive = document.getElementById("activeButton");
const buttonDeactivated = document.getElementById("deactivatedButton");

buttonDeactivated.addEventListener("click", () => {
  textField.classList.add("deactivated");
});
buttonActive.addEventListener("click", () => {
  textField.classList.remove("deactivated");
});

const sendButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");
const saveEmail = document.getElementById("saveEmail");

const getDataInput = () => {
  const emailInput = document.getElementById("mail").value;
  localStorage.setItem("emails", JSON.stringify({ emailInput }));
  if (emailInput) {
    saveEmail.innerHTML = `<p>Correo guardado: ${emailInput}</p>`;
  }
};

const deleteDataInput = () => {
  localStorage.removeItem("emails");
  saveEmail.innerHTML = "";
};

sendButton.addEventListener("click", () => {
  getDataInput();
});

deleteButton.addEventListener("click", () => {
  deleteDataInput();
});
