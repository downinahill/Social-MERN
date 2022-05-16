// Import the functions you need from the SDKs you need
import firebase from './firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZT3dj0SMgJbr5znAjwWqGM3ZzJpDb1wQ",
    authDomain: "social-mern-b0b64.firebaseapp.com",
    projectId: "social-mern-b0b64",
    storageBucket: "social-mern-b0b64.appspot.com",
    messagingSenderId: "878451460176",
    appId: "1:878451460176:web:73160bf1dbbc200310e955",
    measurementId: "G-XMKE7DDCG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db