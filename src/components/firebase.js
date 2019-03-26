import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAF-5GWykIAhZDhNnK70wqJ7hpP0J8sA_4",
  authDomain: "candid-3f079.firebaseapp.com",
  databaseURL: "https://candid-3f079.firebaseio.com",
  projectId: "candid-3f079",
  storageBucket: "candid-3f079.appspot.com",
  messagingSenderId: "521674173274"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const provider = new firebase.auth.GoogleAuthProvider();

export const githubProvider = new firebase.auth.GithubAuthProvider();

// Sign Out
export const doSignOut = () => firebase.auth.signOut();

export const auth = firebase.auth();
export default firebase;
