// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAIFL9-wGYrGJB2lN3skSxMlestCMAZUmg',
    authDomain: 'profiles-vuejs.firebaseapp.com',
    projectId: 'profiles-vuejs',
    storageBucket: 'profiles-vuejs.appspot.com',
    messagingSenderId: '3310671296',
    appId: '1:3310671296:web:f272f8184b704df2062425',
    measurementId: 'G-KBN0HYLG31',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
