const getFullPrice = (items = []) => {
  let total = 0;
  items.forEach((item) => {
    let subtotal = item.amount * item.data.precio;
    total += subtotal;
  });
  return total.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
};
export default getFullPrice;
