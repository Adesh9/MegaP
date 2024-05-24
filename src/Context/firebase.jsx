import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


 //Firebase config
 const firebaseConfig = {
    apiKey: "AIzaSyDM_SzrV_GOA_SshMU5KWMNJY6WpaDnqRw",
    authDomain: "megaproject-8529a.firebaseapp.com",
    databaseURL: "https://megaproject-8529a-default-rtdb.firebaseio.com",
    projectId: "megaproject-8529a",
    storageBucket: "megaproject-8529a.appspot.com",
    messagingSenderId: "85952529253",
    appId: "1:85952529253:web:0ed08e21577c057a3d178c"
  };

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) =>{

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if(user) setUser(user);
            else setUser(null);
        });
    }, []);

    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    };

    const signInWithEmailAndPass = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password)

    const isLoggedIn = user ? true : false;


        
    return( 
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, signInWithEmailAndPass, isLoggedIn}}>
            {props.children}
        </FirebaseContext.Provider>
    );
};