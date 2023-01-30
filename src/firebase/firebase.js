import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCucOIaLNTeYNvynC-Xck9rzYoa-uupk7w",
  authDomain: "ecommerce-8b6b9.firebaseapp.com",
  projectId: "ecommerce-8b6b9",
  storageBucket: "ecommerce-8b6b9.appspot.com",
  messagingSenderId: "681314789978",
  appId: "1:681314789978:web:953dd67367eb281cd00663",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocFromAuth = async userAuth => {
  try {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { email, displayName } = userAuth;
      const createdAt = new Date();

      setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
