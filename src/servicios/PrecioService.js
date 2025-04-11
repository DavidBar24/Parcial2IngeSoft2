class PrecioService {
    constructor() {
      // Campo nunca utilizado
      this.tiendasRegistradas = ['SuperA', 'SuperB']; 
      
      // Método parcialmente implementado
      this.compararPrecios = (productoId) => {
        console.log("Comparando precios..."); // Sin lógica real
      };
    }
  
    // Método deprecado al cambiar de API
    obtenerPrecioHistorico() {
      throw new Error("Método no soportado");
    }
  }
  
  export default new PrecioService(); // Nunca se usa esta instancia