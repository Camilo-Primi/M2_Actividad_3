# Reporte de Integración Continua (CI) - Actividad 3

## 1. Diagrama del Pipeline
Este diagrama representa el flujo automatizado configurado en GitHub Actions para asegurar la calidad del software.

```mermaid
graph TD
    A[Push / Pull Request] --> B[Stage: Install]
    B --> C[Stage: Linting]
    C --> D[Stage: Test & Coverage]
    D --> E[Stage: SonarCloud Scan]
    E --> F{Calidad Aprobada?}
    F -- Sí --> G[Generar Artefactos]
    F -- No --> H[Notificar Error]
    G --> I[Despliegue / Build]


> actividad-3-ingenieria-web@1.0.0 test
> npx jest --coverage --passWithNoTests

PASS tests/unitarios.test.js
PASS tests/app.test.js
PASS tests/integracion.test.js
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   93.93 |       75 |    90.9 |    92.3 |                   
 app.js   |      90 |       75 |      80 |   89.47 | 40-41             
 logic.js |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        1.027 s
Ran all test suites.
