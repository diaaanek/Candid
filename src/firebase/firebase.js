import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAF-5GWykIAhZDhNnK70wqJ7hpP0J8sA_4",
  authDomain: "candid-3f079.firebaseapp.com",
  databaseURL: "https://candid-3f079.firebaseio.com",
  projectId: "candid-3f079",
  storageBucket: "candid-3f079.appspot.com",
  messagingSenderId: "521674173274"
};

firebase.initializeApp(config);

const auth = firebase.auth();
export { auth };
