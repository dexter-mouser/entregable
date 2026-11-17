import { useEffect, useState } from 'react'
import { MODULOS, MIGA_INICIO, USUARIO } from './datos/modulos.js'
import { MARCAS } from './datos/marcas.js'
import BarraSuperior from './componentes/BarraSuperior/BarraSuperior.jsx'
import MenuLateral from './componentes/MenuLateral/MenuLateral.jsx'
import MigaDePan from './componentes/MigaDePan/MigaDePan.jsx'
import PiePagina from './componentes/PiePagina/PiePagina.jsx'
import BotonTema from './componentes/BotonTema/BotonTema.jsx'
import Inicio from './vistas/Inicio/Inicio.jsx'

const CLAVE_TEMA = 'sazon-tema'

// Tema guardado; si no hay o falla, claro
function leerTema() {
  try {
    return localStorage.getItem(CLAVE_TEMA) === 'oscuro' ? 'oscuro' : 'claro'
  } catch {
    return 'claro'
  }
}

export default function App() {
  const [tema, setTema] = useState(leerTema)
  const [menuAbierto, setMenuAbierto] = useState(false)

  // Aplicar y guardar el tema
  useEffect(() => {
    document.documentElement.dataset.tema = tema
    try {
      localStorage.setItem(CLAVE_TEMA, tema)
    } catch {
      // Sin almacenamiento: el tema solo dura esta visita
    }
  }, [tema])

  // Menú abierto: bloquear scroll y cerrar con Escape
  useEffect(() => {
    if (!menuAbierto) return
    const cerrarConEscape = (evento) => evento.key === 'Escape' && setMenuAbierto(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', cerrarConEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', cerrarConEscape)
    }
  }, [menuAbierto])

  return (
    <>
      <MenuLateral modulos={MODULOS} estaAbierto={menuAbierto} alCerrar={() => setMenuAbierto(false)} />
      <BarraSuperior usuario={USUARIO} alAbrirMenu={() => setMenuAbierto(true)} />
      <MigaDePan elementos={MIGA_INICIO} />

      <main className="contenedor">
        <Inicio />
      </main>

      <PiePagina marcas={MARCAS} />
      <BotonTema tema={tema} alCambiar={setTema} />
    </>
  )
}
