import estilos from './PiePagina.module.css'

// Footer con equipo y marcas
export default function PiePagina({ marcas }) {
  return (
    <footer className={estilos.pie}>
      <div className={estilos.contenido}>
        <div>
          <p className={estilos.equipo}>Equipo de Desarrollo Sa·zón</p>
          <p className={estilos.derechos}>Copyright © 2026 Grupo Nutresa · Todos los derechos reservados</p>
        </div>
        <ul className={estilos.marcas}>
          {marcas.map((marca) => (
            <li key={marca.nombre} className={estilos.marca}>
              <img src={marca.imagen} alt={marca.nombre} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
