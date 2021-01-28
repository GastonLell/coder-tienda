const getItemsAmount = (items = []) => {
  let amount = 0;
  items.forEach((item) => (amount += item.cantidad));
  return amount;
};

export default getItemsAmount;
