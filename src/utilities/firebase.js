import { initializeApp } from "firebase/app";
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDJDr1FZ9tfAMtZ4s-nNe2ulkGDwvdviG4",
  authDomain: "class-scheduler-bfde3.firebaseapp.com",
  projectId: "class-scheduler-bfde3",
  storageBucket: "class-scheduler-bfde3.appspot.com",
  messagingSenderId: "646235989492",
  appId: "1:646235989492:web:c8e0d3e11bc59bab1505a1",
  measurementId: "G-ETLVM4F4VG"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

// -- db --
export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
 
  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

// --auth--

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ));

  return [user];
};