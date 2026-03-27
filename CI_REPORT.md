# Reporte de Integración Continua (CI) - Actividad 3

# Video en Youtube https://www.youtube.com/watch?v=VYxZQPx8N9U&t=50s
[![](https://markdown-videos.deta.dev/youtube/watch?v=VYxZQPx8N9U&t=50s)](https://youtu.be/watch?v=VYxZQPx8N9U&t=50s)

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


