# ADR 0004: Namespace import de React sobre destructuring

Date: 2026-03-10
Status: Accepted

## Context

En React existen dos formas de importar y usar hooks:

**Namespace import:**

```ts
import React from 'react';
React.useState(...)
React.useEffect(...)
```

**Destructuring:**

```ts
import { useState, useEffect } from 'react';
useState(...)
useEffect(...)
```

El cdodigo base heredado del proyecto utiliza `React.FC` para tipar los componentes, lo que ya requiere el namespace import de React. Mezclar ambos estilos en el mismo codebase genera inconsistencia visual sin beneficio técnico.

## Decision

Usar exclusivamente namespace import (`import React from 'react'`) en todos los archivos del proyecto.

## Consequences

- Consistencia visual en todos los archivos: un único estilo de import.
- `React.useState`, `React.useEffect`, etc. dejan explícito el origen de cada hook sin necesidad de revisar el bloque de imports.
- El import crece en largo pero no en cantidad de líneas, ya que es siempre una sola línea.
