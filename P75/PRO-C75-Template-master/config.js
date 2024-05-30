import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAiZ0rk0eJLqyV76G9guOCv_bjMDk0IAeI",
  authDomain: "e-ride-fcd98.firebaseapp.com",
  databaseURL: "https://e-ride-fcd98-default-rtdb.firebaseio.com",
  projectId: "e-ride-fcd98",
  storageBucket: "e-ride-fcd98.appspot.com",
  messagingSenderId: "810824521645",
  appId: "1:810824521645:web:3b28aae769306548027324"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
