export default function ComparadorPrecios() {
    // Estado fantasma
    const [modoComparacion] = useState(false); 
  
    // Lógica nunca completada
    const mostrarTiendas = () => {
      return <div>En desarrollo...</div>;
    };
  
    return (
      <div className="comparador-fantasma">
        {mostrarTiendas()}
      </div>
    );
  }