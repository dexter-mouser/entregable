import estilos from './Hero.module.css'

// Banner principal de bienvenida
export default function Hero() {
  return (
    <section className={estilos.hero} aria-labelledby="hero-titulo">
      <span className={estilos.insignia}>
        <i className="bi bi-stars" aria-hidden="true"></i> Ecosistema digital 2026
      </span>
      <h1 id="hero-titulo" className={estilos.titulo}>El sabor que nos une en familia</h1>
      <p className={estilos.texto}>
        Plataforma de nutrición, recetas, despensa inteligente y planificación culinaria respaldada por las marcas de Grupo Nutresa.
      </p>
      <div className={estilos.acciones}>
        <button type="button" className={estilos.principal}>
          <i className="bi bi-grid" aria-hidden="true"></i> Explorar módulos
        </button>
        <button type="button" className={estilos.secundario}>
          <i className="bi bi-person-plus" aria-hidden="true"></i> Crear cuenta
        </button>
      </div>
    </section>
  )
}
