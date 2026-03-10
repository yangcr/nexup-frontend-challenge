# ADR 0001: CategoryFilter no es un Select generico reutilizable

Date: 2026-03-10
Status: Accepted

## Context

El challenge requiere un selector de categorddias (CategoryFilter) para filtrar el listado de productos. Durante el diseño surgio la posibilidad de abstraer el elemento en un componente Select generico que reciba opciones, onChange y otras props, para poder reutilizarse en distintos contextos.

Dentro del alcance actual del challenge, CategoryFilter es el único selector en la aplicación. Los demas filtros opcionales (búsqueda por texto, stock) se implementan con input y checkbox, no con selects.

## Decision

Implementar CategoryFilter como un componente especddifico acoplado a su caso de uso, sin crear una abstracción Select generica.

## Consequences

- El componente es simple y directo, sin props genericas que aumenten la carga cognitiva.
- Queda acoplado a ProductCategory; si en el futuro aparecen mas selectores similares, debera refactorizarse hacia una abstracción reutilizable.
