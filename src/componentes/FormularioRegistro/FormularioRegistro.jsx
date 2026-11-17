import estilos from './FormularioRegistro.module.css'

// Formulario de registro (solo visual)
export default function FormularioRegistro() {
  return (
    <form className={estilos.formulario} onSubmit={(evento) => evento.preventDefault()}>
      <Campo id="nombre" etiqueta="Nombre completo" tipo="text" autocompletar="name" />
      <Campo id="correo" etiqueta="Correo electrónico" tipo="email" autocompletar="email" />

      <div className={estilos.fila}>
        <Campo id="contrasena" etiqueta="Contraseña" tipo="password" autocompletar="new-password" />
        <Campo id="confirmacion" etiqueta="Confirmar contraseña" tipo="password" autocompletar="new-password" />
      </div>

      {/* Términos */}
      <label className={estilos.terminos}>
        <input name="aceptaTerminos" type="checkbox" />
        Acepto los términos y la política de datos
      </label>

      <button type="submit" className={estilos.boton}>
        <i className="bi bi-person-plus" aria-hidden="true"></i> Crear cuenta
      </button>
    </form>
  )
}

// Campo con etiqueta
function Campo({ id, etiqueta, tipo, autocompletar }) {
  return (
    <div className={estilos.campo}>
      <label htmlFor={id}>{etiqueta}</label>
      <input id={id} name={id} type={tipo} autoComplete={autocompletar} />
    </div>
  )
}
