const getItemsAmount = (items = []) => {
  let amount = 0;
  items.forEach(({ amount: itemAmount }) => (amount += itemAmount));
  return amount;
};

export default getItemsAmount;
