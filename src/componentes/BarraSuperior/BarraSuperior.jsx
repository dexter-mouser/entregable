import Logo from '../Logo/Logo.jsx'
import estilos from './BarraSuperior.module.css'

// Barra superior: menú, logo, buscador y perfil
export default function BarraSuperior({ usuario, alAbrirMenu }) {
  return (
    <header className={estilos.barra}>
      <div className={estilos.contenido}>
        <div className={estilos.izquierda}>
          <button type="button" className={estilos.botonMenu} onClick={alAbrirMenu}>
            <i className="bi bi-list" aria-hidden="true"></i>
            <span>Menú</span>
          </button>
          <Logo />
        </div>

        {/* Buscador */}
        <search className={estilos.buscador}>
          <label htmlFor="buscador" className="solo-lectores">Buscar</label>
          <i className="bi bi-search" aria-hidden="true"></i>
          <input id="buscador" type="search" placeholder="Buscar recetas, productos, módulos..." autoComplete="off" />
        </search>

        {/* Perfil */}
        <div className={estilos.derecha}>
          <button type="button" className={estilos.campana} aria-label="Notificaciones">
            <i className="bi bi-bell" aria-hidden="true"></i>
            <span className={estilos.punto}></span>
          </button>
          <div className={estilos.perfil}>
            <span className={estilos.avatar} aria-hidden="true">{usuario.iniciales}</span>
            <span className={estilos.datos}>
              <span className={estilos.nombre}>{usuario.nombre}</span>
              <span className={estilos.rol}>{usuario.rol}</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
