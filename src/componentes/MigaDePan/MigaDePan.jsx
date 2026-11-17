import estilos from './MigaDePan.module.css'

// Miga de pan: el último elemento es la página actual
export default function MigaDePan({ elementos }) {
  return (
    <nav className={estilos.miga} aria-label="Miga de pan">
      <ol className={estilos.lista}>
        {elementos.map((elemento, indice) => {
          const esActual = indice === elementos.length - 1
          return (
            <li key={elemento.texto} className={estilos.item}>
              <span className={`${estilos.chip} ${esActual ? estilos.actual : ''}`} aria-current={esActual ? 'page' : undefined}>
                <i className={`bi ${elemento.icono}`} aria-hidden="true"></i> {elemento.texto}
              </span>
              {!esActual && <i className={`bi bi-chevron-right ${estilos.separador}`} aria-hidden="true"></i>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
