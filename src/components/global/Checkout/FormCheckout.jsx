import { FormStyle } from "./CheckoutStyle";

const FormCheckout = ({ handleChangeInput, handleSubmitForm }) => {
  return (
    <FormStyle>
      <form id="formCheckout" onSubmit={handleSubmitForm} method="post">
        <h3>Detalles del comprador</h3>

        <div>
          <div>
            <label for="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="text"
              required
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label for="docType">Tipo de documento</label>
            <select id="docType" name="docType" type="text">
              <option value="#" select>
                Seleccione tipo de documento
              </option>
              <option value="dni">DNI</option>
              <option value="lc">Libreta civica</option>
            </select>
          </div>

          <div>
            <label for="docNumber">Número de documento</label>
            <input
              id="docNumber"
              name="docNumber"
              type="text"
              required
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <h3>Detalles de la tarjeta</h3>
        <div>
          <div>
            <label for="cardholderName">Titular de la tarjeta</label>
            <input
              id="cardholderName"
              name="cardNameTitular"
              type="text"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label for="">Fecha de vencimiento</label>
            <div>
              <input
                type="text"
                placeholder="MM"
                id="cardExpirationMonth"
                onselectstart="return false"
                onpaste="return false"
                oncopy="return false"
                oncut="return false"
                ondrag="return false"
                ondrop="return false"
                autocomplete="off"
              />
              <span>/</span>
              <input
                type="text"
                placeholder="YY"
                id="cardExpirationYear"
                onselectstart="return false"
                onpaste="return false"
                oncopy="return false"
                oncut="return false"
                ondrag="return false"
                ondrop="return false"
                autocomplete="off"
              />
            </div>
          </div>

          <div>
            <label for="cardNumber">Número de la tarjeta</label>
            <input
              onChange={handleChangeInput}
              name="cardNumber"
              type="text"
              id="cardNumber"
              onselectstart="return false"
              onpaste="return false"
              oncopy="return false"
              oncut="return false"
              ondrag="return false"
              ondrop="return false"
              autocomplete="off"
            />
          </div>

          <div>
            <label for="securityCode">Código de seguridad</label>
            <input
              id="securityCode"
              type="text"
              onselectstart="return false"
              onpaste="return false"
              oncopy="return false"
              oncut="return false"
              ondrag="return false"
              ondrop="return false"
              autocomplete="off"
            />
          </div>

          <div id="issuerInput">
            <label for="issuer">Banco emisor</label>
            <select id="issuer" name="issuer" data-checkout="issuer">
              <option value="" select>
                Seleccione entidad bancaria
              </option>
              <option value="">Nuevo Banco Entre Rios</option>
              <option value="">Banco Galicia</option>
            </select>
          </div>

          <div>
            <label for="installments">Cuotas</label>

            <select
              type="text"
              id="installments"
              name="cuotas"
              onChange={handleChangeInput}
            >
              <option value="1" select>
                1 solo pago
              </option>
              <option value="3">3 cuotas</option>
              <option value="6">6 cuotas</option>
              <option value="12">12 cuotas</option>
              <option value="18">18 cuotas</option>
            </select>
          </div>

          <div>
            <button type="submit">Pagar</button>
          </div>
        </div>
      </form>
    </FormStyle>
  );
};
export default FormCheckout;

{
  /* <FormStyle>
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
    </FormStyle> */
}
