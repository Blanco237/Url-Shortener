import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    getRedirectResult,
    signInWithRedirect
    } from 'firebase/auth'

import { getDatabase,set, ref, onValue } from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyBWrBR8I_hSYByn2uofDJM8Q7kKIIU4_eA",
  authDomain: "goolnk.firebaseapp.com",
  projectId: "goolnk",
  storageBucket: "goolnk.appspot.com",
  messagingSenderId: "869053934287",
  appId: "1:869053934287:web:22916c5b83389a148865ba",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/***********Authentication Functions***********************/
const auth = getAuth();
const provider = new GoogleAuthProvider();

export async function createUser(email,password){
    try{
        let userCredentials = await createUserWithEmailAndPassword(auth,email,password);
        return userCredentials.user;
    }
    catch(error){
        alert(`${error.code} ::: ${error.message}`);
        return false;
    }
}


export async function googleSignIn(state){
    try{
        if(state!='mobile'){
            let result = await signInWithPopup(auth,provider);
            console.log(result);
            console.log(result.user);
            return result.user;
        }
        else{
            signInWithRedirect(auth,provider);
            let result = await getRedirectResult(auth);
            return result.user;
        }
    }
    catch(error){
        return error
    }
}

/*********************************************************/

/******************Database Functions**********************/
const db = getDatabase(app);

export function saveUserInfo(user,company,position){
    set(ref(db,'users/'+user.uid),{
        username: user.displayName,
        email: user.email,
        company,
        position
    });
}

export function getUserData(user){
    const userRef = ref(db,'users/'+user.uid);
    let uData = null;
    onValue(userRef, (snapshot)=>{
        const data = snapshot.val();
        console.log("In value", data)
        uData = data;
    });
    console.log("From firebase",uData);
    return uData;
}

export function saveLinkData(user,links){
    set(ref(db,'links/'+user.uid),links);
}

export function getLinkData(user){
    const linkRef = ref(db,'links/'+user.uid);
    onValue(linkRef, (snapshot)=>{
        const data = snapshot.val();
        return data;
    });
}