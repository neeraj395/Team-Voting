import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCBCqzvMN90iIdnahuVTDWHZbCtttNDXBg",
    authDomain: "voting-app-595fd.firebaseapp.com",
    databaseURL: "https://voting-app-595fd-default-rtdb.firebaseio.com",
    projectId: "voting-app-595fd",
    storageBucket: "voting-app-595fd.appspot.com",
    messagingSenderId: "631719953641",
    appId: "1:631719953641:web:da86ac2765b8b2210c5c78",
    measurementId: "G-95TKFNKQ09"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
