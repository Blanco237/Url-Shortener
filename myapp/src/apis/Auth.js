import { googleSignIn } from "../firebaseUtils";
import axios from 'axios';

const domain = 'http://localhost:5500';

async function loginWithGoogle() {
    let size = window.innerWidth;
    let state = size < 768 ? "mobile" : "desktop";
    let user = await googleSignIn(state);
    return user ? user : { error: 'User not found' };
}

export async function loginUser(data, type) {
    let user = {};
    if (type === 'google') {
        const res = await loginWithGoogle();
        if (res.error) {
            return { error: res.error };
        }
        try{
            const result = await axios.post(`${domain}/users/login/google`, res);
            if (result.data.error) {
                return { error: result.data.error };
            }
            user = result.data;
        }catch(e){
            return { error: e.message };
        }
    }
    else {
        try{

            const result = await axios.post(`${domain}/users/login`, data);
            if (result.data.error) {
                return { error: result.data.error };
            }
            user = result.data;
        }catch(e){
            return { error: e.message };
        }
    }
    return user;
}




export async function register(data, type) {
    let user = {};
    if (type === 'google') {
        const res = await loginWithGoogle();
        if (res.error) {
            return { error: res.error };
        }
        const form = {};
        form.email = res.email;
        form.username = res.displayName;
        form.photo = res.photoURL;
        form.phoneNumber = res.phoneNumber;
        console.log(form);
        try {
            const result = await axios.post(`${domain}/users/register/google`, form);
            if (result.data.error) {
                return { error: result.data.error };
            }
            user = result.data;
        } catch (e) {
            return { error: e.message };
        }
    }
    else {
        try {
            const userCheck = await axios.post(`${domain}/users/check/username`, data);
            if (userCheck.data.error) {
                return { error: userCheck.data.error };
            }
            const emailCheck = await axios.post(`${domain}/users/check/email`, data);
            if (emailCheck.data.error) {
                return { error: emailCheck.data.error };
            }
            const result = await axios.post(`${domain}/users/register`, data);
            if (result.data.error) {
                return { error: result.data.error };
            }
            user = result.data;
        } catch (e) {
            return { error: e.message };
        }
    }
    return user;
}
