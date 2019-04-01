import * as firebase from "firebase";

const db = firebase.database();

export { db };

// import firebase from "firebase/app";
// import "firebase/auth";
//
// // import * as firebase from "firebase";
// import firestore from "firebase/firestore";
//
// const settings = { timestampsInSnapshots: true };
//
// const config = {
//   apiKey:
//   authDomain:
//   databaseURL: "https://candid-3f079.firebaseio.com",
//   projectId: "candid-3f079",
//   storageBucket: "candid-3f079.appspot.com",
//   messagingSenderId: "
// };
//
// firebase.initializeApp(config);
//
// firebase.firestore().settings(settings);
//
// export const provider = new firebase.auth.GoogleAuthProvider();
// export const githubProvider = new firebase.auth.GithubAuthProvider();
//
// export const auth = firebase.auth();
// // const auth = firebase.auth();
// // export { auth };
//
// export default firebase;
