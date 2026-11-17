import estilos from './Logo.module.css'

// Logo: isotipo + nombre (variante clara para fondos verdes)
export default function Logo({ subtitulo, esClaro = false }) {
  return (
    <span className={`${estilos.logo} ${esClaro ? estilos.claro : ''}`}>
      <span className={estilos.isotipo} aria-hidden="true">
        <i className="bi bi-info-circle-fill"></i>
      </span>
      <span className={estilos.textos}>
        <span className={estilos.nombre}>Sa·zón</span>
        {subtitulo && <span className={estilos.subtitulo}>{subtitulo}</span>}
      </span>
    </span>
  )
}
