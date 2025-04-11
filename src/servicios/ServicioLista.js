import { Producto } from '../nucleo/Producto';

class ServicioLista {
  constructor() {
    if (!ServicioLista.instancia) { // Verifica si ya existe una instancia
      this.productos = []; // Inicializa el estado privado de productos
      ServicioLista.instancia = this;
    }
    return ServicioLista.instancia;
  }

// Método para crear y almacenar productos
  agregarProducto(nombre, cantidad) {
    const producto = new Producto(nombre, cantidad);
    this.productos.push(producto);
    return producto; // Retorna el producto creado (útil para UI)
  }

// Cambia el estado de comprado/no comprado
  toggleProducto(id) {
    const producto = this.productos.find(p => p.id === id);
    if (producto) {
      producto.comprado = !producto.comprado; // Actualiza el estado
    }
    return producto;
  }

// Devuelve copia del array para evitar mutaciones externas
  obtenerProductos() {
    return [...this.productos];
  }

// Genera estadísticas en tiempo real (Explicado en el informe)
  obtenerEstadisticas() {
    const total = this.productos.length;
    const comprados = this.productos.filter(p => p.comprado).length;
    return { total, comprados };
  }
}

// Garantiza el Singleton y previene modificaciones
const instancia = new ServicioLista();
Object.freeze(instancia);

export default instancia;