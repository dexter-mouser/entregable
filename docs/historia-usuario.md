# Historia de usuario: Crear cuenta

Proyecto Sa·zón · Historia propia de José Manuel Botero Giraldo.

## HU-01 · Crear cuenta en Sa·zón

**Como** visitante de Sa·zón,
**quiero** crear una cuenta con mis datos,
**para** acceder a los módulos y guardar mis preferencias.

### Criterios de aceptación

1. Desde la página inicial, el botón «Crear cuenta» abre la vista de registro.
2. El formulario pide: nombre completo, correo, contraseña, confirmación de contraseña y aceptación de términos.
3. Todos los campos son obligatorios; el correo debe tener formato válido y la contraseña al menos 8 caracteres.
4. Si las contraseñas no coinciden o falta un dato, se muestra el error junto al campo y no se envía.
5. Al enviar con datos válidos, aparece un mensaje de bienvenida con el nombre (datos simulados, sin backend).
6. La vista usa el kit de marca Sa·zón, funciona en tema Día y Noche, en móvil y escritorio, y con teclado.

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
