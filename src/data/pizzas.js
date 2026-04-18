import { getPizzaImage } from "../utils";
import { pizzaApiUrl } from "../data/urls";
import { VARIABLES } from "../data/constans";

const pizzas = [
  {
    id: 1,
    title: "Чизбургер-пицца",
    description:
      "Мясной соус болоньезе, маринованные огурчики, свежие томаты, красный лук и много моцареллы.",
    category: "мясная",
    image: getPizzaImage(1, pizzaApiUrl),
    price: 395,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 2,
    title: "Сырная",
    description:
      "Классика с увеличенной порцией моцареллы, сыром пармезан и итальянскими травами.",
    category: "вегетарианская",
    image: getPizzaImage(2, pizzaApiUrl),
    price: 450,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 3,
    title: "Креветки по-азиатски",
    description:
      "Тигровые креветки, кисло-сладкий соус, болгарский перец и кунжут.",
    category: "гриль",
    image: getPizzaImage(3, pizzaApiUrl),
    price: 690,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 4,
    title: "Сырный цыпленок",
    description: "Нежное куриное филе, сырный соус, томаты и моцарелла.",
    category: "мясная",
    image: getPizzaImage(4, pizzaApiUrl),
    price: 385,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 5,
    title: "Пепперони",
    description:
      "Пикантная пепперони, много моцареллы и фирменный томатный соус.",
    category: "острая",
    image: getPizzaImage(5, pizzaApiUrl),
    price: 420,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 6,
    title: "Мясная",
    description:
      "Цыпленок, ветчина, пикантная пепперони, острые колбаски чоризо и моцарелла.",
    category: "мясная",
    image: getPizzaImage(6, pizzaApiUrl),
    price: 540,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 7,
    title: "Маргарита",
    description:
      "Традиционный рецепт: увеличенная порция моцареллы, томаты и итальянские травы.",
    category: "вегетарианская",
    image: getPizzaImage(7, pizzaApiUrl),
    price: 350,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 8,
    title: "Гавайская",
    description: "Тропическое сочетание сочного ананаса, ветчины и моцареллы.",
    category: "мясная",
    image: getPizzaImage(8, pizzaApiUrl),
    price: 410,
    doughs: [{ label: "тонкое", active: true }, { label: "традиционное" }],
    sizes: [
      { label: "26 см.", active: true },
      { label: "30 см." },
      { label: "40 см." },
    ],
  },
  {
    id: 9,
    title: "Диабло",
    description:
      "Очень острая пицца с колбасками чоризо, халапеньо и болгарским перцем.",
    category: "острая",
    image: getPizzaImage(9, pizzaApiUrl),
    price: 490,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 10,
    title: "Овощи и грибы",
    description:
      "Шампиньоны, томаты, сладкий перец, красный лук, маслины и кубики брынзы.",
    category: "вегетарианская",
    image: getPizzaImage(10, pizzaApiUrl),
    price: 380,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 11,
    title: "Цыпленок Барбекю",
    description: "Куриное филе, соус барбекю, бекон, красный лук и моцарелла.",
    category: "гриль",
    image: getPizzaImage(11, pizzaApiUrl),
    price: 470,
    doughs: [{ label: "тонкое", active: true }, { label: "традиционное" }],
    sizes: [
      { label: "26 см.", active: true },
      { label: "30 см." },
      { label: "40 см." },
    ],
  },
  {
    id: 12,
    title: "Четыре сезона",
    description: "Четыре разных сектора: пепперони, грибы, ветчина и сыр.",
    category: "мясная",
    image: getPizzaImage(12, pizzaApiUrl),
    price: 460,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 13,
    title: "Карбонара",
    description: "Бекон, сыры чеддер и пармезан, томаты черри и соус альфредо.",
    category: "мясная",
    image: getPizzaImage(13, pizzaApiUrl),
    price: 510,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 14,
    title: "Мексиканская",
    description:
      "Острые колбаски чоризо, соус сальса, томаты и много острого перца.",
    category: "острая",
    image: getPizzaImage(14, pizzaApiUrl),
    price: 480,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 15,
    title: "Двойная пепперони",
    description: "Для фанатов — в два раза больше пикантной пепперони.",
    category: "острая",
    image: getPizzaImage(15, pizzaApiUrl),
    price: 520,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 16,
    title: "Ветчина и сыр",
    description:
      "Простое и любимое сочетание ветчины и моцареллы со сливочным соусом.",
    category: "мясная",
    image: getPizzaImage(16, pizzaApiUrl),
    price: 360,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 17,
    title: "Кальцоне Мясная",
    description:
      "Закрытая пицца с начинкой из ветчины, пепперони и нежного соуса.",
    category: "закрытая",
    image: getPizzaImage(17, pizzaApiUrl),
    price: 430,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 18,
    title: "Грибная",
    description: "Свежие шампиньоны, соус альфредо и ароматный чеснок.",
    category: "вегетарианская",
    image: getPizzaImage(18, pizzaApiUrl),
    price: 375,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 19,
    title: "Додо",
    description:
      "Фирменная пицца с ветчиной, говядиной, грибами и болгарским перцем.",
    category: "гриль",
    image: getPizzaImage(19, pizzaApiUrl),
    price: 550,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
  {
    id: 20,
    title: "Четыре сыра",
    description:
      "Смесь благородных сыров: блю чиз, пармезан, чеддер и моцарелла.",
    category: "вегетарианская",
    image: getPizzaImage(20, pizzaApiUrl),
    price: 580,
    doughs: [
      { label: VARIABLES.slimm, active: true },
      { label: VARIABLES.traditional },
    ],
    sizes: [
      { label: VARIABLES.small, active: true },
      { label: VARIABLES.medium },
      { label: VARIABLES.large },
    ],
  },
];

export default pizzas;
