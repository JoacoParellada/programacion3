"use strict";
class Coche {
    constructor(velocidad, modelo, marca) {
        this.velocidad = velocidad;
        this.modelo = modelo;
        this.marca = marca;
    }
    acelerar() {
        this.velocidad += 10;
        return `Vehiculo ${this.marca} acelerando a: ${this.velocidad}km/h`;
    }
    frenar() {
        this.velocidad -= 10;
        if (this.velocidad <= 0) {
            this.velocidad = 0;
        }
        return `Vehiculo ${this.marca} frenando a: ${this.velocidad}km/h`;
    }
}
//Instancia de clase Coche
const coche1 = new Coche(80, 2012, "Volkswagen");
console.log(coche1.acelerar());
console.log(coche1.frenar());
