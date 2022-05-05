import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZ_UZZ0HY4jpXP7elG0py1376lg9h4yz8",
    authDomain: "tiktok-4e10f.firebaseapp.com",
    projectId: "tiktok-4e10f",
    storageBucket: "tiktok-4e10f.appspot.com",
    messagingSenderId: "156111666192",
    appId: "1:156111666192:web:02c0e95aacf56bf2ca5e95"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;