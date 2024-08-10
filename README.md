# AIMS App

- Se creo que proyecto de Ionic con navegación de tabs.
- Se creo el proyecto de Adonis a modo de API y con auth de Tokens.

## Convención de nombrados

```json
{
  "Camel case": "camelCase",
  "Pascal case": "PascalCase",
  "Snake case": "snake_case",
  "Kebab case": "kebab-case"
}
```

## Trabajo de ramas

- **main**: Rama principal, solo se suben cambios de la rama de desarrollo.
- **develop**: Rama de desarrollo, se suben cambios de las ramas de features.
- **feature**: Rama de funcionalidad, se suben cambios de la rama de desarrollo.
- **hotfix**: Rama de corrección de errores, se suben cambios de la rama de desarrollo.

Las ramas **feature** se crea a partir de la rama **develop**.

Un ejemplo de **feature** sería:

`feature/feature-name`

Cuando la rama **feature** se termine, se hace un **merge** a la rama **develop** y se elimina la rama **feature**.

## Usado de etiquetas de Ionic

Ionic no distingue entre `ion-button` y `IonButton`, asi que en este proyecto se usara `IonButton` para asi poder acceder a los autoimport de VSCode.
