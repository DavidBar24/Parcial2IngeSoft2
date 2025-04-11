export class Producto {
    constructor(nombre, cantidad = 1) {
      this.id = Date.now();
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.comprado = false;
    }
  }