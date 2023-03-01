import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAsbU5DwZX_kuV3iO4aFBnyw8c_5nJc8s",
    authDomain: "linkedin-clone-746a3.firebaseapp.com",
    databaseURL: "https://linkedin-clone-746a3-default-rtdb.firebaseio.com",
    projectId: "linkedin-clone-746a3",
    storageBucket: "linkedin-clone-746a3.appspot.com",
    messagingSenderId: "1081079968537",
    appId: "1:1081079968537:web:9d4803007abc6eb16b0b88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
