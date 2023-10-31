import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRiderect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAU-dA8KZcW5cGaa-gyOWVxiroAKQ9XVX4",
    authDomain: "crown-clothing-db-4e094.firebaseapp.com",
    projectId: "crown-clothing-db-4e094",
    storageBucket: "crown-clothing-db-4e094.appspot.com",
    messagingSenderId: "1000012007874",
    appId: "1:1000012007874:web:a1558f7042e8f46e34ae5b"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account"

});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid );
    
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if (!userSnapshot.exists())
    {
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef , {
                displayName,
                email,
                createdAt
            });
        } catch(error){
            console.log('Error Creating the user' , error.message );
        }

    }

    return userDocRef;

};