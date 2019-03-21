import { auth } from './firebase'

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

// Sign Out
export const doSignOut = () => auth.signOut()

// export function saveUser (user) {
//   return ref.child(`users/${user.uid}/info`)
//     .set({
//       email: user.email,
//       uid: user.uid
//     })
//     .then(() => user)
// }

// returns firebase auth service
// export const getAuth = () => {
//   return firebase.auth();
// };
//
// export const githubOAuth = () => {
//   return new firebase.firebase_.auth.GithubAuthProvider();
// };

// // Password Reset
// export const doPasswordReset = email =>
//   auth.sendPasswordResetEmail(email, {
//     url: 'https://m3ypyo6wq9.codesandbox.io/signin'
//   })
//
// // Password Change
// export const doPasswordUpdate = password =>
//   auth.currentUser.updatePassword(password)
