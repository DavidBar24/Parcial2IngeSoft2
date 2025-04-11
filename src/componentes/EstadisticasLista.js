export default function EstadisticasLista({ stats }) {
    return (
      <div className="estadisticas-lista">
        <p>Total: {stats.total}</p>
        <p>Comprados: {stats.comprados}</p>
        <p>Pendientes: {stats.total - stats.comprados}</p>
      </div>
    );
  }