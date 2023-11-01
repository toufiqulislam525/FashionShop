import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRiderect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
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

const google_provider = new GoogleAuthProvider();
google_provider.setCustomParameters({
    prompt : "select_account"

});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,google_provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation) =>{
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid );
    
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists())
    {
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef , {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error){
            console.log('Error Creating the user' , error.message );
        }

    }

    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);

}