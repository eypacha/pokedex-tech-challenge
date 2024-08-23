# Pokédex Tech Challenge
![Pikachu te saluda](https://github.com/eypacha/pokedex-tech-challenge/blob/master/public/img/pikachu.webp)
### Consigna

La prueba consiste utilizar **Vue.js** para crear una lista de Pokémons favoritos siguiendo las especificaciones de diseño proporcionadas en el documento de [Figma](https://figma.com/design/RxextQHeFs98SQKdpTrahk/Pokédex).

### Planificación

Después de revisar los requisitos y el diseño, realicé algunas modificaciones al documento original debido a imprecisiones en la UI/UX que dificultaban entregar un proyecto de calidad. El documento actualizado está disponible en este [link](https://figma.com/design/LpJ72b9fSt8yfqOguKCFaW/Pokédex). Dado que el diseño original no era pixel-perfect, lo usé como una guía general, priorizando el sentido común para decidir qué respetar y qué adaptar. Mi versión tampoco es un rediseño ideal, ya que eso habría desviado el enfoque del desarrollo.

### Stack elegido

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

> [!NOTE] 
> En desarrollo, la función de copiado al portapapeles solo funciona en un  [contexto seguro](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts),  como http://localhost:3000, pero no en una versión expuesta a la red por IP privada.

#### Producción

Hacer el build de la aplicación para producción:

```bash
yarn build
```

Previsualiza el build de producción localmente:

```bash
yarn preview
```