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
3. Justificación de Thresholds (Umbrales)
Se han establecido los siguientes límites para garantizar la mantenibilidad del proyecto:
Cobertura (80%): Se eligió este estándar de industria porque garantiza que la lógica crítica y los caminos de error están probados, reduciendo bugs en producción sin sobrecargar el tiempo de desarrollo.
Branches (70%): Se ajustó debido a que ciertas condiciones de inicio del servidor (app.listen) son procesos de infraestructura que no afectan la lógica de negocio principal.
