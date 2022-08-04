import { googleSignIn } from "../firebaseUtils";
import axios from 'axios';

async function loginWithGoogle() {
    let size = window.innerWidth;
    let state = size < 600 ? "mobile" : "desktop";
    let user = await googleSignIn(state);
    return user ? user : { error: 'User not found' };
}

export async function loginUser(data, type)  {
    let user = {};
    if (type === 'google') {
        const res = await loginWithGoogle();
        const result = await axios.post('http://localhost:5500/users/login/login', res);
        if(result.data.error) {
            return { error: result.data.error };
        }
        user = result.data;
    }
    else {
        const result = await axios.post('http://localhost:5500/users/login', data);
        if(result.data.error) {
            return { error: result.data.error };
        }
        user = result.data;
    }
}



function checkValidEntry(){
    if(email.length<0 || password.length<0){
        return false;
    }
    if(!checkPasswords()){
        return false;
    }
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email);
}


function register(){
    if(!checkValidEntry()){
        alert("Please Enter Data Correctly");
        setEmail("");
        setPassword("");
        setConfirm("");
        return;
    }
    createUser(email,password);
}

async function loginWithGoogle(){
    let size = window.innerWidth;
    let state = size<600? 'mobile' : 'desktop';
    let t = await googleSignIn(state);
    setUser(t);
    setShowGetData(true);
}