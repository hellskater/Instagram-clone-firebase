import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATxKZIgITbNDe_wWH1tFYWrcGpJuNWcNA",
  authDomain: "instagram-clone-firebase-d6ce0.firebaseapp.com",
  projectId: "instagram-clone-firebase-d6ce0",
  storageBucket: "instagram-clone-firebase-d6ce0.appspot.com",
  messagingSenderId: "181618519044",
  appId: "1:181618519044:web:848c52e85b17ddd0961951",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Database setup
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
