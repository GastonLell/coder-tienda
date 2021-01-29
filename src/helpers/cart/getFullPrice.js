const getFullPrice = (items = []) => {
  let total = 0;

  items.forEach((item) => {
    let subtotal = item.cantidad * item.item.data.precio;
    total += subtotal;
  });

  return total.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
};

export default getFullPrice;
