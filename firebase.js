import firebase from "firebase"
const firebaseApp  = firebase.intializeApp({
    apiKey: "AIzaSyDTzCPnpRRckE0h2oYTbPlbOob3sdnGplI",
    authDomain: "morchat-37562.firebaseapp.com",
    projectId: "morchat-37562",
    storageBucket: "morchat-37562.appspot.com",
    messagingSenderId: "358058121062",
    appId: "1:358058121062:web:1686b90454da38a9d71aa7",
    measurementId: "G-1G9CE56SKW"
})
const db = firebaseApp.firestore()
const auth = firebase.auth()
export{ db, auth}