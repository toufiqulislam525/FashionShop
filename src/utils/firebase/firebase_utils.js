import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    
    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef,object);

    });
    
    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async() =>{
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    // querySnapshot.docs()                                  //Gives documents snapshot --- data

    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) =>{
        const {title,items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{})

    return categoryMap;

}

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

};

export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);

};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)