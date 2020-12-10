// importar iagenes y agregarlas a un objeto, para luego importar el objeto en el itemlist
import imagenPrueba from './imagen-prueba.jpg';
let aProductos = [
    {
        nombreProducto: "Guitarra",
        precioProducto: 7000,
        imagenProducto: imagenPrueba,
        detalleProducto: "Este seria el detalle del producto"
    },
    {
        nombreProducto: "Ukelele",
        precioProducto: 3000,
        imagenProducto: null,
        detalleProducto: "Este seria el detalle del producto"
    },
    {
        nombreProducto: "Piano",
        precioProducto: 40000,
        imagenProducto: null,
        detalleProducto: "Este seria el detalle del producto"
    }
]
export default aProductos;