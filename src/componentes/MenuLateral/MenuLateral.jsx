import Logo from '../Logo/Logo.jsx'
import estilos from './MenuLateral.module.css'

// Menú lateral desplegable con los módulos
export default function MenuLateral({ modulos, estaAbierto, alCerrar }) {
  return (
    <>
      {estaAbierto && <div className={estilos.fondo} onClick={alCerrar} aria-hidden="true"></div>}

      <aside className={`${estilos.menu} ${estaAbierto ? estilos.abierto : ''}`} aria-hidden={!estaAbierto} inert={!estaAbierto}>
        <div className={estilos.cabecera}>
          <Logo subtitulo="Ecosistema Nutresa" esClaro />
          <button type="button" className={estilos.cerrar} onClick={alCerrar} aria-label="Cerrar menú">
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>

        <p className={estilos.etiqueta}>Módulos del sistema</p>
        <nav aria-label="Módulos">
          <ul className={estilos.lista}>
            <li>
              <button type="button" className={`${estilos.enlace} ${estilos.activo}`} aria-current="page">
                <i className="bi bi-speedometer2" aria-hidden="true"></i> Dashboard principal
              </button>
            </li>
            {modulos.map((modulo) => (
              <li key={modulo.id}>
                <button type="button" className={estilos.enlace}>
                  <i className={`bi ${modulo.icono}`} aria-hidden="true"></i> {modulo.titulo}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className={estilos.botonCerrar} onClick={alCerrar}>
          <i className="bi bi-x-circle" aria-hidden="true"></i> Cerrar menú
        </button>
      </aside>
    </>
  )
}
