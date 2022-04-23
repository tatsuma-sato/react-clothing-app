// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clothing-app-ccacb.firebaseapp.com",
  projectId: "clothing-app-ccacb",
  storageBucket: "clothing-app-ccacb.appspot.com",
  messagingSenderId: "296644709691",
  appId: "1:296644709691:web:6e69b413fcdaac6d573b1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  // console.log(userSnapShot.exists());

  // If user data does not exist
  // --> create / set the document with the data from userAuth im my collection
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const crearedAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, crearedAt });
    } catch (err) {
      console.log("error occured", err.massage);
    }
  }
  
  // If user data exists
  return userDocRef;
};
