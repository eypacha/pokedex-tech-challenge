# Pokédex

## Tarea: Front End Developer (Vue.js) para Global66

### Consigna

La prueba consiste en crear una lista de Pokémon favoritos siguiendo las especificaciones de diseño proporcionadas en el documento de [Figma](https://figma.com/design/RxextQHeFs98SQKdpTrahk/Pokédex).

### Planificación

Después de analizar los requisitos y el documento de diseño, decidí realizar algunas modificaciones al documento original. El documento contenía imprecisiones en UI/UX que dificultaban cumplir con la consigna y entregar un proyecto de calidad.

El nuevo documento actualizado está disponible en este [link](https://figma.com/design/LpJ72b9fSt8yfqOguKCFaW/Pokédex).

### Stack Elegido

- **Nuxt 3**: Framework de desarrollo elegido por su configuración sencilla, uso de módulos y soporte para Vite, lo cual facilita la compilación y el desarrollo ágil.
- **Pinia**: Utilizado para la gestión de estados. Aunque se podría haber usado directamente el composable `useState` provisto por Nuxt, Pinia ofrece una mejor integración con las DevTools y facilita la extensión mediante la creación de stores con responsabilidades separadas, ideal si la aplicación escala.
- **Tailwind CSS**: Seleccionado por su rapidez y flexibilidad para generar los componentes propuestos en el documento de diseño, sin necesidad de hacer overrides sobre componentes de otras librerías.
- **Shadcn-vue**: Permite usar componentes como base sin depender de librerías adicionales, utilizando solo los necesarios para este proyecto y facilitando su modificación.
- **FontAwesome**: Utilizado para los íconos, ya que parecen ser los íconos del documento de diseño original. Aunque añade peso adicional al proyecto, permite un desarrollo rápido y consistente en esta etapa.

### Configuración

Instala las dependencias:

```bash
yarn install
```

#### Servidor de desarrollo

Para iniciar el servidor de desarrollo:

```bash
yarn dev
```

#### Producción

Hacer el build de la aplicación para producción:

```bash
yarn build
```

Previsualiza el build de producción localmente:

```bash
yarn preview
```