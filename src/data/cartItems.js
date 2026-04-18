import pizzaBurger from "../assets/icons/image 2.png";
import pizzaShrimp from "../assets/icons/image 6.png";
import pizzaChicken from "../assets/icons/image 7.png";

const cartItems = [
  {
    image: pizzaChicken,
    title: "Сырный цыпленок",
    description: "тонкое тесто, 26 см.",
    quantity: 2,
    price: 770,
  },
  {
    image: pizzaShrimp,
    title: "Креветки по-азиатски",
    description: "толстое тесто, 40 см.",
    quantity: 1,
    price: 290,
  },
  {
    image: pizzaBurger,
    title: "Чизбургер-пицца",
    description: "тонкое тесто, 30 см.",
    quantity: 3,
    price: 350,
  },
];

export default cartItems;
