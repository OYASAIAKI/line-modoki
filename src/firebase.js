import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBghAxzPASJPTeCqYr_U5M4m-SOohjRxow",
    authDomain: "line-clone-pg.firebaseapp.com",
    projectId: "line-clone-pg",
    storageBucket: "line-clone-pg.appspot.com",
    messagingSenderId: "996812110900",
    appId: "1:996812110900:web:0c6b00dba28a9ce0a81e61"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };