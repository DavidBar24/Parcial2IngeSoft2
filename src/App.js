import { useState, useEffect } from 'react';
import ServicioLista from './servicios/ServicioLista';
import { ObservadorLista } from './nucleo/ObservadorLista';
import FormularioLista from './componentes/FormularioLista';
import ProductosLista from './componentes/ProductosLista';
import EstadisticasLista from './componentes/EstadisticasLista';
import "./App.css";

const observadorLista = new ObservadorLista();

function App() {
   // Código comentado "para futura implementación"
  /* useEffect(() => {
    PrecioService.cargarTiendas();
  }, []); */
  const [productos, setProductos] = useState([]);
  const [estadisticas, setEstadisticas] = useState({ total: 0, comprados: 0 });

// Efecto para Suscripción a Cambios
  useEffect(() => {
    const actualizarLista = () => {
      setProductos(ServicioLista.obtenerProductos());
      setEstadisticas(ServicioLista.obtenerEstadisticas());
    };

    observadorLista.suscribir(actualizarLista); // Registra callback
    actualizarLista(); // Carga inicial

    return () => observadorLista.desuscribir(actualizarLista);
  }, []);

// Handlers que Integran Capas
  const manejarAgregarProducto = (nombre, cantidad) => {
    ServicioLista.agregarProducto(nombre, cantidad); // Capa de Servicios
    observadorLista.notificar();
  };

  const manejarToggleProducto = (id) => {
    ServicioLista.toggleProducto(id);
    observadorLista.notificar(); // Notifica a suscriptores
  };
//Es el UI
  return (
    <div className="aplicacion">
      <h1>Mi Lista de Compras</h1>
      <FormularioLista onAgregarProducto={manejarAgregarProducto} />
      <EstadisticasLista stats={estadisticas} />
      <ProductosLista productos={productos} onToggleProducto={manejarToggleProducto} />
    </div>
  );
}

export default App;