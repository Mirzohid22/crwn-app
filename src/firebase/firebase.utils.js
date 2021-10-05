import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDIMGRyjkhAv4lLoG2q9cdZq02ePRz6vy8",
    authDomain: "crwn-app-28943.firebaseapp.com",
    projectId: "crwn-app-28943",
    storageBucket: "crwn-app-28943.appspot.com",
    messagingSenderId: "661518979176",
    appId: "1:661518979176:web:de4c23fc405886be046bdd",
    measurementId: "G-LLGJ05D05V",
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};  

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }

//   return userRef;
// };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  console.log("SigInWithGoogle");
  auth.signInWithPopup(provider);
};

export default firebase;