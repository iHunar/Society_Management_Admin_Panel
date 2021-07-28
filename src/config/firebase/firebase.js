import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyDvaP3d2y8f5zJXd7waxlsOku2KOqLYf_8",
    authDomain: "society-management-syste-7e855.firebaseapp.com",
    projectId: "society-management-syste-7e855",
    storageBucket: "society-management-syste-7e855.appspot.com",
    messagingSenderId: "804129379607",
    appId: "1:804129379607:web:8c2d310ae88a698f811352",
    measurementId: "G-VNCEGDH3BG"
  };
  // Initialize Firebase

  var Firebase = firebase.initializeApp(firebaseConfig);
  export {Firebase}
