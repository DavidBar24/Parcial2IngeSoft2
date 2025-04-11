export class ObservadorLista {
    constructor() {
      this.suscriptores = [];
    }
  
    suscribir(callback) {
      this.suscriptores.push(callback);
    }
  
    desuscribir(callback) {
      this.suscriptores = this.suscriptores.filter(sub => sub !== callback);
    }
  
    notificar(datos) {
      this.suscriptores.forEach(sub => sub(datos));
    }
  }