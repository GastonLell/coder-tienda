import { FormStyle } from "./CheckoutStyle";

const FormCheckout = ({ handleChangeInput, handleSubmitForm }) => {
  return (
    <FormStyle>
      <form id="formCheckout" onSubmit={handleSubmitForm}>
        <input
          type="text"
          onChange={handleChangeInput}
          name="nombre"
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          onChange={handleChangeInput}
          name="apellido"
          placeholder="Apellido"
          required
        />
        <input
          type="email"
          onChange={handleChangeInput}
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          type="tel"
          onChange={handleChangeInput}
          name="tel"
          placeholder="Telefono"
        />
        <input
          type="text"
          onChange={handleChangeInput}
          name="localidad"
          placeholder="Localidad"
          required
        />
        <input
          type="text"
          onChange={handleChangeInput}
          name="provincia"
          placeholder="Provincia"
          required
        />
        <input
          type="number"
          onChange={handleChangeInput}
          name="CP"
          placeholder="Codigo postal"
          required
        />
        <textarea
          name="comentario"
          placeholder="Aclaraciones de compra (opcional)"
        />
        <button type="submit">Pagar</button>
      </form>
    </FormStyle>
  );
};
export default FormCheckout;
