import { useState } from 'react';

export default function FormularioLista({ onAgregarProducto }) { // Recibe callback del padre
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(1);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre.trim()) {
      onAgregarProducto(nombre, cantidad); // Comunica con el servicio (Singleton)
      setNombre('');
      setCantidad(1);
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario-lista">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} // Binding bidireccional
        placeholder="Ej: Leche, Pan..."
        required
      />
      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={(e) => setCantidad(parseInt(e.target.value) || 1)} // Garantiza número válido
      />
      <button type="submit">Añadir</button>
    </form>
  );
}