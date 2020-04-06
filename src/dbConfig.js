import Firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyB9QaXGTUKbTlvMsy2Yef5rDHZGKpnljBY",
    authDomain: "moneypalapp.firebaseapp.com",
    databaseURL: "https://moneypalapp.firebaseio.com",
    projectId: "moneypalapp",
    storageBucket: "moneypalapp.appspot.com",
    messagingSenderId: "1060905719971",
    appId: "1:1060905719971:web:15ce9b1758f6da0ad1c716",
    measurementId: "G-F2NXHNYEG6"
  };

const dbApp = Firebase.initializeApp(firebaseConfig);
export const db = dbApp.database();