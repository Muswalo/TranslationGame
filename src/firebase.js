/**
 * @module FirebaseConfig
 * @description This module imports Firebase services and initializes Firebase app, Firestore database, and Firebase authentication.
 */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";

/**
 * @constant
 * @type {Object}
 * @description Configuration object for Firebase initialization.
 */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_PUBLIC_API_KEY,
  authDomain: process.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PUBLIC_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PUBLIC_APP_ID,
};

let app;
let db;
let auth;

try {
  /**
   * @description Initializes Firebase app with the provided configuration.
   */
  app = initializeApp(firebaseConfig);

  /**
   * @description Initializes Firestore database with the initialized Firebase app.
   */
  db = getFirestore(app);

  /**
   * @description Initializes Firebase authentication and sets its persistence to browserLocalPersistence.
   */
  auth = getAuth();
  setPersistence(auth, browserLocalPersistence)
    .then(() => {})
    .catch((error) => {});
} catch (error) {}

/**
 * @exports app
 * @exports db
 * @exports auth
 */
export { app, db, auth };
