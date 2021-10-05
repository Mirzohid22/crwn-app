// import { initializeApp } from "@firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// const firebaseConfig = {
//   apiKey: "AIzaSyDIMGRyjkhAv4lLoG2q9cdZq02ePRz6vy8",
//   authDomain: "crwn-app-28943.firebaseapp.com",
//   projectId: "crwn-app-28943",
//   storageBucket: "crwn-app-28943.appspot.com",
//   messagingSenderId: "661518979176",
//   appId: "1:661518979176:web:de4c23fc405886be046bdd",
//   measurementId: "G-LLGJ05D05V",
// };
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// // Get a list of cities from your database
// export async function getUsers(db) {
//   const usersCol = collection(db, "users");
//   const userSnapshot = await getDocs(usersCol);
//   const userList = userSnapshot.docs.map((doc) => doc.data());
//   // console.log(userList);
//   return userList;
// }

// export const createUserProfileDocument = async (userAuth, AdditionalData) => {
//   if (!userAuth) return; 
// };

// export const auth = getAuth();
// const provider = new GoogleAuthProvider();

// export const signInWithGoogleFirebase = () =>
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // console.log(result);
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       // const credential = GoogleAuthProvider.credentialFromResult(result);
//       // const token = credential.accessToken;
//       // console.log(token);
//       // The signed-in user info.
//       // const user = result.user;
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       // const errorCode = error.code;
//       // const errorMessage = error.message;
//       // The email of the user's account used.
//       // const email = error.email;
//       // The AuthCredential type that was used.
//       // const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
