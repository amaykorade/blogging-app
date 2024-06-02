// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqzB3Dz4R8FbZlD-Q9cxdtpgmIChZSY1c",
    authDomain: "blogging-a3861.firebaseapp.com",
    projectId: "blogging-a3861",
    storageBucket: "blogging-a3861.appspot.com",
    messagingSenderId: "436077719694",
    appId: "1:436077719694:web:b4ce1204a0ccaeb28c59df",
    measurementId: "G-EZT6GNJG8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);