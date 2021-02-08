const firebase = require("firebase");

require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB29Ukx3NZ4frSt7JWtVHwOkvDXnblhhnU",
  authDomain: "crespomusica.firebaseapp.com",
  projectId: "crespomusica",
});

var db = firebase.firestore();

let productos = [
  {
    id: 46,
    nombre: "Soporte De Teclado",
    precio: 2300,
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/crespomusica.appspot.com/o/productos%2FSoporte%20De%20Teclado%20Pata%20Simple%20Ca%C3%B1o%20Rectangular%20Wg%20Tsrec.webp?alt=media&token=649e39e1-1dd2-4937-9290-1217f764e47e",
    detalle: "Pata Simple Caño Rectangular Wg Tsrec",
    stock: 10,
    categoria: "accesorio",
    destacado: true,
  },
  {
    id: 47,
    nombre: "Funda Para Teclado",
    precio: 2700,
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/crespomusica.appspot.com/o/productos%2FFunda%20Para%20Teclado%205%20Octavas%20Tipo%20Casio%20Yamaha%20Acolchada%2098.webp?alt=media&token=b584b274-8311-4a92-955b-0fe2d2f993e7",
    detalle: "Funda 5 Octavas Tipo Casio Yamaha Acolchada 98",
    stock: 5,
    categoria: "accesorio",
    destacado: false,
  },
  {
    id: 48,
    nombre: "Pedal Sustain Teclado Piano Cherub Wtb-005",
    precio: 1995,
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/crespomusica.appspot.com/o/productos%2FPedal%20Sustain%20Teclado%20Piano%20Cherub%20Wtb-005.webp?alt=media&token=629440ef-1c81-47fa-b7df-79103154b397",
    detalle:
      "Pedal SUSTEIN para teclado tipo pedal de piano, trae cambio de polaridad.",
    stock: 12,
    categoria: "accesorio",
    destacado: false,
  },
  {
    id: 49,
    nombre: "Encordado Guitarra Electrica Daddario 010 Exl110",
    precio: 1170,
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/crespomusica.appspot.com/o/productos%2FEncordado%20Guitarra%20Electrica%20Daddario%20010%20Exl110.webp?alt=media&token=7755565c-a009-4366-b6fc-4bb0c2501e22",
    detalle: "Encordado Guitarra Electrica Daddario 010 Exl110",
    stock: 5,
    categoria: "accesorio",
    destacado: false,
  },
  {
    id: 50,
    nombre: "Encordado Guitarra Electrica Daddario Nyxl1152 011-52",
    precio: 2000,
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/crespomusica.appspot.com/o/productos%2FEncordado%20Guitarra%20Electrica%20Daddario%20Nyxl1152%20011-52.webp?alt=media&token=c802046f-aab8-436b-8c6a-51d55baf840f",
    detalle: "Encordado Guitarra Electrica Daddario Nyxl1152 011-52",
    stock: 18,
    categoria: "accesorio",
    destacado: false,
  },
  {
    id: 51,
    nombre: "Funda Para Guitarra Electrica Domingo Nusdeo 81e",
    precio: 1400,
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/crespomusica.appspot.com/o/productos%2FFunda%20Para%20Guitarra%20Electrica%20Domingo%20Nusdeo%2081e.webp?alt=media&token=71aca09f-e874-472f-9c61-b5deb8d28dc0",
    detalle: "Funda Para Guitarra Electrica Domingo Nusdeo 81e",
    stock: 20,
    categoria: "accesorio",
    destacado: false,
  },
  {
    id: 52,
    nombre: "Capotraste Guitarra Electrica Acustica Olympia Violeta",
    precio: 990,
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/crespomusica.appspot.com/o/productos%2FCapotraste%20Guitarra%20Electrica%20Acustica%20Olympia%20Violeta.webp?alt=media&token=0dcbbc40-9cca-4bff-bcdf-75c62ad6ce3a",
    detalle: "Capotraste Guitarra Electrica Acustica Olympia Violeta",
    stock: 13,
    categoria: "accesorio",
    destacado: false,
  },
  {
    id: 53,
    nombre: "Korg Pitchcrow-g Aw-4g Afinador Digital Tipo Clip O Pinza",
    precio: 900,
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/crespomusica.appspot.com/o/productos%2FKorg%20Pitchcrow-g%20Aw-4g%20Afinador%20Digital%20Tipo%20Clip%20O%20Pinza.webp?alt=media&token=4a85676f-2c77-484a-90d8-c07128282c80",
    detalle: "Korg Pitchcrow-g Aw-4g Afinador Digital Tipo Clip O Pinza",
    stock: 10,
    categoria: "accesorio",
    destacado: false,
  },
];
productos.forEach((obj) => {
  db.collection("productos")
    .add({
      id: obj.id,
      nombre: obj.nombre,
      precio: obj.precio,
      imagen: obj.imagen,
      detalle: obj.detalle,
      stock: obj.stock,
      categoria: obj.categoria,
      destacado: obj.destacado,
    })
    .then((docRef) => {
      console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar un documento: ", error);
    });
});
