# Nexup Frontend Challenge

Gestor de productos construido con React + TypeScript como parte del challenge técnico de Nexup.

## Instalación y ejecución

```bash
npm install
npm start
```

## Funcionalidades

### Requeridas

- **Filtro por categoría** — selector con "Todos" como valor por defecto; filtra la lista al cambiar
- **Listado de productos** — muestra cada producto con indicador de estado, nombre, categoría y precio (`$X.XX`)
- **Indicador de estado** — pill badge con color (verde: Active / rojo: Inactive)
- **Diseño responsive** — CSS Grid con `auto-fill` + `minmax`; se adapta a cualquier ancho sin media queries

### Opcionales (todos implementados)

- **Simulación de API async** — `getProductList()` retorna una `Promise` con delay aleatorio (200–1000ms) para simular un endpoint REST
- **Filtro fulltext** — coincidencia parcial case-insensitive sobre el nombre del producto, con debounce de 300ms
- **Stock** — cantidad de stock visible en cada card; checkbox para mostrar solo productos con stock disponible

## Decisiones técnicas

Las decisiones de arquitectura están documentadas en [`docs/ADR/`](docs/ADR/):

| ADR                                              | Decisión                                                                                  |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [0001](docs/ADR/0001-category-select.md)         | `CategoryFilter` como componente específico de dominio, sin abstracción `Select` genérica |
| [0002](docs/ADR/0002-styling.md)                 | Vanilla CSS con nesting por sobre MUI o Tailwind                                          |
| [0003](docs/ADR/0003-mock-api-call.md)           | Fetch-once con filtrado client-side por sobre server-side filtering con query params      |
| [0004](docs/ADR/0004-react-import-convention.md) | Namespace imports (`React.useState`) por sobre destructuring                              |
