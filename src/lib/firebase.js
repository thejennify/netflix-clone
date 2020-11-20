import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// seed the database 

//config 
var firebaseConfig = {
    apiKey: "AIzaSyAw3tpHBssjgIgHe8kVKD1SZey4_AqY8h0",
    authDomain: "netflix-clone-d9458.firebaseapp.com",
    databaseURL: "https://netflix-clone-d9458.firebaseio.com",
    projectId: "netflix-clone-d9458",
    storageBucket: "netflix-clone-d9458.appspot.com",
    messagingSenderId: "958641454791",
    appId: "1:958641454791:web:e038db24ddcbd04ea848e2"
  };

//
const firebase = Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase);

export { firebase };
