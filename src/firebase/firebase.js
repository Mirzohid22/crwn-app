import { initializeApp } from "@firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDIMGRyjkhAv4lLoG2q9cdZq02ePRz6vy8",
    authDomain: "crwn-app-28943.firebaseapp.com",
    projectId: "crwn-app-28943",
    storageBucket: "crwn-app-28943.appspot.com",
    messagingSenderId: "661518979176",
    appId: "1:661518979176:web:de4c23fc405886be046bdd",
    measurementId: "G-LLGJ05D05V",
  };
  
initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogleFirebase = () => signInWithPopup(auth, provider)
  .then((result) => {
      console.log(result);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    // The signed-in user info.
    // const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });