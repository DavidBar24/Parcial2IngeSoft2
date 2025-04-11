export default function ProductosLista({ productos, onToggleProducto }) {
    return (
      <ul className="lista-productos">
        {productos.map(producto => (
          <li key={producto.id} className={producto.comprado ? 'comprado' : ''}>
            <span>
              {producto.nombre} - {producto.cantidad}
            </span>
            <button onClick={() => onToggleProducto(producto.id)}>
              {producto.comprado ? 'Desmarcar' : 'Comprar'}
            </button>
          </li>
        ))}
      </ul>
    );
  }