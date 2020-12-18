// importar iagenes y agregarlas a un objeto, para luego importar el objeto en el itemlist
import imagenPrueba from './imagen-prueba.jpg';
let aProductos = [
    {
        nombreProducto: "Guitarra",
        precioProducto: 7000,
        imagenProducto: imagenPrueba,
        detalleProducto: "Este seria el detalle del producto",
        stock: 5
    },
    {
        nombreProducto: "Ukelele",
        precioProducto: 3000,
        imagenProducto: null,
        detalleProducto: "Este seria el detalle del producto",
        stock: 7
    },
    {
        nombreProducto: "Piano",
        precioProducto: 40000,
        imagenProducto: null,
        detalleProducto: "Este seria el detalle del producto",
        stock: 1
    },
    {
        nombreProducto: "Piano",
        precioProducto: 40000,
        imagenProducto: null,
        detalleProducto: "Este seria el detalle del producto",
        stock: 3
    }
]
export default aProductos;