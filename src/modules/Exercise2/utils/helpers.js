import pricesData from "../data/prices.json";

const { data: prices } = pricesData;

const roundToTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
};

const calculateItemPrice = (item, quantity) => {
  if (!prices[item]) return null;

  const { unit_price, sale_price } = prices[item];

  const totalPrice = roundToTwo(quantity * unit_price);

  const totalPriceWithSaved = sale_price
    ? roundToTwo(
        Math.floor(quantity / sale_price.quantity) *
          (sale_price.price - sale_price.quantity * unit_price) +
          quantity * unit_price
      )
    : totalPrice;

  const saved = roundToTwo(totalPrice - totalPriceWithSaved);

  const itemPrice = {
    item: prices[item],
    quantity,
    totalPrice,
    totalPriceWithSaved,
    saved,
  };
  return itemPrice;
};

const mapperItems = (stringItems) => {
  const arrayItems = String(stringItems).split(",");
  const itemsQuantity = {};

  arrayItems.forEach((element) => {
    if (itemsQuantity[element]) {
      itemsQuantity[element] = itemsQuantity[element] + 1;
    } else {
      itemsQuantity[element] = 1;
    }
  });
  return itemsQuantity;
};

const calculatePurchase = (items) => {
  const purchase = {
    items: [],
    totalPrice: 0,
    totalPriceWithSaved: 0,
    saved: 0,
  };

  if (items) {
    Object.entries(mapperItems(items)).forEach((element) => {
      const itemPrice = calculateItemPrice(element[0], element[1]);

      if (itemPrice) {
        purchase.items = [...purchase.items, itemPrice];
        purchase.totalPrice = purchase.totalPrice + itemPrice.totalPrice;
        purchase.totalPriceWithSaved =
          purchase.totalPriceWithSaved + itemPrice.totalPriceWithSaved;
        purchase.saved = purchase.saved + itemPrice.saved;
      }
    });
  }
  return purchase;
};

export { calculatePurchase };
