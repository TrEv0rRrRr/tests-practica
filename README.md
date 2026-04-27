# Pasos para configurar el proyecto

_Si no vas a usar TS, ignora los 2 primeros pasos y la configuración del tsconfig.json_

## Paso 1: Instalar TS

```bash
pnpm add -D typescript
```

o si prefieres npm

```bash
npm i -D typescript
```

## Paso 2: Inicializa TS

```bash
npx tsc --init
```

## Paso 3: Instala Vitest y sus tipos

```bash
pnpm add -D vitest @types/node
```

o si prefieres npm

```bash
npm i -D vitest @types/node
```

### En caso necesites testear UI

```bash
pnpm add -D jsdom
```

o si prefieres npm

```bash
npm i -D jsdom
```

## Paso 4: Instalar las librerías de test dependiendo del framework

### Para React

```bash
pnpm add -D @testing-library/react @testing-library/jest-dom
```

o si prefieres npm

```bash
npm add -D @testing-library/react @testing-library/jest-dom
```

### Para Vue

```bash
pnpm add -D @testing-library/vue
```

o si prefieres npm

```bash
npm add -D @testing-library/vue
```

## Paso 5: Configura correctamente los package.json, tsconfig.json, vitest.config.ts y de ser necesario para el UI, el setupfile

```json
// package.json
"scripts": {
    "test": "vitest",
    "test:run": "vitest run"
  },
```

```json
// tsconfig.json
"compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "types": ["vitest/globals"]
  }
```

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // environment: "jsdom", si instalaste json para probar UI
    globals: true, // para usar test, expect sin importar
    // setupFiles: "./setupTest.ts", si necesitar testear UI
  },
});
```

```ts
// setupTest.ts
// ! Es para evitar tener q importar esto en todos los archivos
import "@testing-library/jest-dom";
```
