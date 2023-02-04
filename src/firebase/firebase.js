import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  writeBatch,
  collection,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCucOIaLNTeYNvynC-Xck9rzYoa-uupk7w",
  authDomain: "ecommerce-8b6b9.firebaseapp.com",
  projectId: "ecommerce-8b6b9",
  storageBucket: "ecommerce-8b6b9.appspot.com",
  messagingSenderId: "681314789978",
  appId: "1:681314789978:web:953dd67367eb281cd00663",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const batch = writeBatch(db);

  try {
    objectsToAdd.forEach(async object => {
      const objRef = doc(db, collectionKey, object.title.toLowerCase());
      batch.set(objRef, object);
    });
    await batch.commit();
  } catch (e) {
    console.log(e);
  }
};

export const getCategoriesAndDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));

  const categoriesMap = querySnapshot.docs.reduce((acc, category) => {
    const { title, items } = category.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoriesMap;
};

export const signUpWithPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

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
        ...additionalInfo,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = callback => {
  return onAuthStateChanged(auth, callback);
};
