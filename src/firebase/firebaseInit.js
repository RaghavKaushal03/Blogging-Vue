import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB5i4ClI4LO0uEkwC8Cf1-efRAPsSRjJRw",
    authDomain: "rvfireblogs-10b87.firebaseapp.com",
    projectId: "rvfireblogs-10b87",
    storageBucket: "rvfireblogs-10b87.appspot.com",
    messagingSenderId: "100131231050",
    appId: "1:100131231050:web:432cb88d7875929e9a9db3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();
 