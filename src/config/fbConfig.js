import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCnkW0u5IX3ilMDo64M1oqCjy2YhTNrKrY",
    authDomain: "net-ninja-marioplan-87c40.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-87c40.firebaseio.com",
    projectId: "net-ninja-marioplan-87c40",
    storageBucket: "net-ninja-marioplan-87c40.appspot.com",
    messagingSenderId: "56244573259",
    appId: "1:56244573259:web:9547dea24084f4c0a669ce",
    measurementId: "G-2PJ22L7PF7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;