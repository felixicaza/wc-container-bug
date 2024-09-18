import { CardCategory, type AnaCard } from "@contracts";

const DUMMY_DESCRIPTION =
  "Larga descripcion de la tarjeta, con detalles y todo lo que se nos ocurra. Siempre y cuando no se salga del contenedor que la contiene. Esta descripcion complementará la imagen de la tarjeta siempre buscando sacar sonrisas a los usuarios.";

function randomize(max: number): number {
  return ~~(Math.random() * max);
}

export const cards: AnaCard[] = [
  {
    id: 1,
    name: "Increible Titulo #1",
    description: DUMMY_DESCRIPTION,
    image: "dummy-1.webp",
    category: CardCategory.DEVELOPMENT,
    level: 1,
  },
];
