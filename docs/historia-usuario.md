# Historia de usuario: Crear cuenta

Proyecto Sa·zón · Historia propia de José Manuel Botero Giraldo.

## HU-01 · Crear cuenta en Sa·zón

**Como** visitante de Sa·zón,
**quiero** crear una cuenta con mis datos,
**para** acceder a los módulos y guardar mis preferencias.

### Criterios de aceptación

1. Desde la página inicial, el botón «Crear cuenta» abre la vista de registro.
2. El formulario pide: nombre completo, correo, contraseña, confirmación de contraseña y aceptación de términos.
3. Cada campo tiene su etiqueta visible y el botón «Crear cuenta» cierra el formulario.
4. El logo de la barra superior regresa a la página inicial.
5. La vista usa el kit de marca Sa·zón, funciona en tema Día y Noche, en móvil y escritorio, y con teclado.

Alcance de este momento: solo componentes visuales. La validación y el envío de datos quedan para cuando haya backend.

## Ubicación de los componentes

```
App
├── MenuLateral
├── BarraSuperior
│   └── Logo
├── MigaDePan
├── <vista>
│   ├── Inicio
│   │   └── Hero
│   └── CrearCuenta                HU-01
│       └── FormularioRegistro
├── PiePagina
└── BotonTema
```

| Componente | Carpeta | Para qué |
| --- | --- | --- |
| `BarraSuperior`, `MenuLateral`, `MigaDePan`, `PiePagina`, `BotonTema`, `Logo` | `src/componentes/` | Estructura común |
| `Hero` | `src/componentes/` | Página inicial |
| `FormularioRegistro` | `src/componentes/` | HU-01 |
| `Inicio`, `CrearCuenta` | `src/vistas/` | Vistas |
| `modulos.js`, `marcas.js` | `src/datos/` | Datos simulados |
