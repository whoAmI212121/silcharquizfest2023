import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCmV1ot4ep7f7BG_Oi73bCIEslUTzLuldA",
  authDomain: "quizfest-73c9e.firebaseapp.com",
  projectId: "quizfest-73c9e",
  storageBucket: "quizfest-73c9e.appspot.com",
  messagingSenderId: "857961362798",
  appId: "1:857961362798:web:d3cbd06d109aeb7ecb7d7f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:'select_account',
})

export const auth = getAuth()

export const signInWithGooglePopUp = () =>signInWithPopup(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef =  doc(db, 'users', userAuth.uid )

    const userSnapshot = await getDoc(userDocRef)
     if(!userSnapshot.exists()){
        const {displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log("error creating the user", error.message)
        }
     }

     return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) =>onAuthStateChanged(auth, callback);

