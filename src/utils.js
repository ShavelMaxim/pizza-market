import { VARIABLES, Multipliers } from "./data/constans";

export const getPizzaImage = (id, list) => list.find((p) => p.id === id)?.url;

export const getUniqueCategories = (pizzas) => {
  const categories = pizzas.map((pizza) => pizza.category);
  return ["Все", ...new Set(categories)];
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const getCurrentPrice = (pizza) =>
  pizza.sizes.find((s) => s.active)?.price ?? 0;

export const getActivePizzaOptions = (pizza) => {
  const activeDough = pizza.doughs.find((dough) => dough.active)?.label || "";
  const activeSize = pizza.sizes.find((size) => size.active)?.label || "";

  return { activeDough, activeSize };
};

export const changePrice = (activeFields, priceBase) => {
  const fields = Array.isArray(activeFields) ? activeFields : [activeFields];

  const totalMultiplier = fields.reduce((accumulator, field) => {
    const label = typeof field === "string" ? field : field?.label;

    for (const [key, value] of Object.entries(VARIABLES)) {
      if (value === label) {
        return accumulator * (Multipliers[key] ?? 1);
      }
    }

    return accumulator;
  }, 1);

  return (priceBase * totalMultiplier).toFixed();
};

export const getOrderSummary = (orderSheet) => {
  const summary = 0;

  return orderSheet.reduce((accumulator, pizza) => {
    return accumulator + Number(pizza.orderPrice) || 0;
  }, summary);
};

export const modifyOrderName = (pizza) => {
  const { title } = pizza;
  const { activeDough, activeSize } = getActivePizzaOptions(pizza);
  return title + activeDough + activeSize;
};

export const buildPizzaState = (pizza) => {
  const { activeDough, activeSize } = getActivePizzaOptions(pizza);
  const quantity = Number(pizza.quantity) || 1;
  const orderDescription = `${activeDough} тесто, ${activeSize}`;

  return {
    ...pizza,
    quantity,
    orderPrice: Number(pizza.price) * quantity,
    orderDescription,
    orderName: modifyOrderName(pizza),
  };
};

export const modifyPizzas = (pizzas) => {
  const modifiedList = pizzas.map((item) =>
    buildPizzaState({
      ...item,
      key: `${item.title}_${item.description}`,
      basePrice: item.price,
      quantity: 1,
    }),
  );

  return modifiedList;
};

export const createBasketItem = (pizza) => {
  const basketItem = buildPizzaState(pizza);

  return {
    ...basketItem,
    id: basketItem.orderName,
  };
};

export const deleteItemFromBasket = (itemId, setBasket, basket) => {
  const updatedBasket = basket.filter((item) => item.id !== itemId);
  setBasket(updatedBasket);
};

export const getQuantityInBaskets = (basket) => {
  // Добавляем проверку, что basket — это массив
  if (!Array.isArray(basket)) return 0;

  return basket.reduce((total, item) => {
    // Используем Number() и значение по умолчанию 0, если quantity пустое
    const qty = Number(item?.quantity) || 0;
    return total + qty;
  }, 0);
};

export const getPizzasForPage = (pizzas, currentPage, pageSize = 4) => {
  const startIndex = currentPage * pageSize - pageSize;
  return pizzas.slice(startIndex, startIndex + pageSize);
};
