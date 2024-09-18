# Web Components Container Bug

Este es un pequeño proyecto para probar el comportamiento de un bug de la propiedad `container` en Web Components en navegadores basados en Chromium.

## Clona o haz fork del proyecto

```bash
git clone https://github.com/felixicaza/wc-container-bug.git
```

o bien realiza un fork para hacer pruebas: https://github.com/felixicaza/wc-container-bug/fork

## ¿Cómo reproducir el bug?

1. Abre el archivo [Cards.astro](./src/components/Cards/Cards.astro) y encierra el componente `<AnaCard />` dentro de un `<div>`.

Ejemplo:

```html
<div>
  <AnaCard
    id="{id}"
    name="{name}"
    image="{image}"
    category="{category}"
    description="{description}"
    level="{level}"
  />
</div>
```

o bien

```html
<section class="cards">
  <div>
    { cards.map(({ id, name, description, image, category, level }) => (
    <AnaCard
      id="{id}"
      name="{name}"
      image="{image}"
      category="{category}"
      description="{description}"
      level="{level}"
    />
    )) }
  </div>
</section>
```

En este punto el navegador (Chromium-based) deberá crashear.

2. Abre el archivo [ana-card.wc.ts](./src/components/Cards/ana-card.wc.ts) y comenta o remueve la propiedad `container: card / inline-size;` de la línea 115 para que el navegador no crashee. Pero esto hace que pierda los estilos de la carta.
