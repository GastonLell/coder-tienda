import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB29Ukx3NZ4frSt7JWtVHwOkvDXnblhhnU",
  authDomain: "crespomusica.firebaseapp.com",
  projectId: "crespomusica",
  storageBucket: "crespomusica.appspot.com",
  messagingSenderId: "1061561410198",
  appId: "1:1061561410198:web:220a4f10c17b83c2db58b7",
});

export function getFirebase() {
  return app;
}

export function getFireStore() {
  return firebase.firestore(app);
}
