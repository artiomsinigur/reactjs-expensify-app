import * as firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAR7DoLSb2sUqb-cHhPjstEsXBW8_y6kXc",
    authDomain: "expensify-5a38e.firebaseapp.com",
    databaseURL: "https://expensify-5a38e.firebaseio.com",
    projectId: "expensify-5a38e",
    storageBucket: "expensify-5a38e.appspot.com",
    messagingSenderId: "681574009635",
    appId: "1:681574009635:web:4d6b57d48ce72ea75a5a96",
    measurementId: "G-XXHJYYL1F6"
}

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.database()

db.ref().set({
    name: 'Artiom Sinigur',
    age: 31,
    location: {
        city: 'Montreal',
        Country: 'Canada'
    }
})