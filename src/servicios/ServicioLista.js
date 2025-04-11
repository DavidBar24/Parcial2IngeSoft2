import { Producto } from '../nucleo/Producto';

class ServicioLista {
  constructor() {
    if (!ServicioLista.instancia) {
      this.productos = [];
      ServicioLista.instancia = this;
    }
    return ServicioLista.instancia;
  }

  agregarProducto(nombre, cantidad) {
    const producto = new Producto(nombre, cantidad);
    this.productos.push(producto);
    return producto;
  }

  toggleProducto(id) {
    const producto = this.productos.find(p => p.id === id);
    if (producto) {
      producto.comprado = !producto.comprado;
    }
    return producto;
  }

  obtenerProductos() {
    return [...this.productos];
  }

  obtenerEstadisticas() {
    const total = this.productos.length;
    const comprados = this.productos.filter(p => p.comprado).length;
    return { total, comprados };
  }
}

const instancia = new ServicioLista();
Object.freeze(instancia);

export default instancia;