export class ObservadorLista {
    constructor() {
      this.suscriptores = []; // Almacena los callbacks de componentes interesados en cambios
    }
  
    suscribir(callback) {
      this.suscriptores.push(callback); // Agrega el callback a la lista
    }
  
    desuscribir(callback) {
      this.suscriptores = this.suscriptores.filter(sub => sub !== callback); // Filtra el callback específico
    }
  
    notificar(datos) {
      this.suscriptores.forEach(sub => sub(datos)); // Ejecuta todos los callbacks con los nuevos datos
    }
  }