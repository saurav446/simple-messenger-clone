import firebase from 'firebase';
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBmxAgrlhe8Gc6ZiWwkkLrMZYcYg6XWTig",
        authDomain: "messenger-8bfae.firebaseapp.com",
        projectId: "messenger-8bfae",
        storageBucket: "messenger-8bfae.appspot.com",
        messagingSenderId: "538942334953",
        appId: "1:538942334953:web:0da55e4f5bad4387c04d78",
        measurementId: "G-JLNMP1SMFH" 
  });

  const db = firebaseApp.firestore();
  
  export default db ; 
