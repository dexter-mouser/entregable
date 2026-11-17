import FormularioRegistro from '../../componentes/FormularioRegistro/FormularioRegistro.jsx'
import estilos from './CrearCuenta.module.css'

// Vista de registro (HU-01)
export default function CrearCuenta() {
  return (
    <section className={estilos.tarjeta} aria-labelledby="crear-cuenta-titulo">
      <p className="etiqueta-mono">Registro</p>
      <h1 id="crear-cuenta-titulo" className={estilos.titulo}>Crea tu cuenta</h1>
      <p className={estilos.subtitulo}>Guarda tus recetas, tu despensa y tus preferencias.</p>
      <FormularioRegistro />
    </section>
  )
}
