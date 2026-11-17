import estilos from './BotonTema.module.css'

// Botón claro/oscuro
export default function BotonTema({ tema, alCambiar }) {
  return (
    <div className={estilos.selector} role="group" aria-label="Tema">
      <button
        type="button"
        className={`${estilos.opcion} ${tema === 'claro' ? estilos.activa : ''}`}
        aria-pressed={tema === 'claro'}
        onClick={() => alCambiar('claro')}
      >
        <i className="bi bi-sun-fill" aria-hidden="true"></i> Día
      </button>
      <button
        type="button"
        className={`${estilos.opcion} ${tema === 'oscuro' ? estilos.activa : ''}`}
        aria-pressed={tema === 'oscuro'}
        onClick={() => alCambiar('oscuro')}
      >
        <i className="bi bi-moon-stars-fill" aria-hidden="true"></i> Noche
      </button>
    </div>
  )
}
