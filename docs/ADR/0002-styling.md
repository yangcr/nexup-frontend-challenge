# ADR 0002: Vanilla CSS sobre librería de componentes

Date: 2026-03-10
Status: Accepted

## Context

El challenge requiere estilado de componentes y diseño responsive. Se evaluo el uso de una librería de componentes como Material UI (MUI), TailwindCSS y CSS nativo.

El enunciado valora explícitamente la correcta utilizacion de técnicas de CSS como Flexbox y Grid. El scope de la aplicacion es acotado: un wrapper, una barra de filtros y una grilla de cards.

## Decision

Usar CSS nativo con las siguientes técnicas modernas:

- **CSS Nesting** (nativo, sin preprocesador) para organizar estilos por componente
- **CSS Grid** (`auto-fill` + `minmax`) para la grilla de products responsive sin media queries
- **Flexbox** para el layout general (header/main/footer) y el interior de las cards

Tambien se decidio utilizar CSS Nesting (similar a lo que se realizaba con SASS/SCSS) ya que tiene soporte en todos los browsers desde 2023.

## Consequences

- El evaluador puede ver directamente el dominio de CSS sin que una librería lo abstraiga.
- Sin dependencias adicionales: bundle más liviano y sin lock-in de versión.
- El estilado requiere más código manual que con MUI, pero en este scope es manejable.
