import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCB2adYYjL6QuYqo-WlbcnCc8sCMKZYWQU",
    authDomain: "capita-mortgage-credit-react.firebaseapp.com",
    projectId: "capita-mortgage-credit-react",
    storageBucket: "capita-mortgage-credit-react.appspot.com",
    messagingSenderId: "164111733222",
    appId: "1:164111733222:web:c3b87d5c900c97a0670627",
    measurementId: "G-5696EQ81CX"
}

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;