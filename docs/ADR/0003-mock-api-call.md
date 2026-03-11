# ADR 0003: Fetch-once con filtrado client-side sobre server-side filtering

Date: 2026-03-10
Status: Accepted

## Context

El challenge requiere simular que el listado de productos proviene de una API REST. Al implementarlo surgieron dos enfoques posibles:

**Fetch-once (client-side filtering):** un unico llamado async al montar el componente que trae todos los productos. Los filtros operan sobre los datos ya en memoria.

**Server-side filtering:** cada cambio de filtro dispara un nuevo llamado a la API con query params (`GET /products?category=Fruit&name=apple`). El debounce pasaria a ser critico para no disparar un request por cada keystroke.

## Decision

Se optó por fetch-once con filtrado client-side.

## Consequences

- Un unico estado de loading al iniciar la app; los filtros responden de forma inmediata.
- El debounce del filtro de texto evita re-renders innecesarios en cada keystroke, aunque no hay red de por medio.
- El enfoque no escala a catálogos grandes con paginación server-side. En ese escenario los filtros deberian enviarse como query params y cada cambio dispararia un nuevo request.
- La simulación async (`Promise` + `setTimeout` con delay aleatorio) es suficiente para demostrar el patrón de carga asincrona sin complejidad adicional.
