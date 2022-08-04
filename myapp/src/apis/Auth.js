import { googleSignIn } from "../firebaseUtils";
import axios from 'axios';

const domain = 'http://localhost:5500';

async function loginWithGoogle() {
    let size = window.innerWidth;
    let state = size < 600 ? "mobile" : "desktop";
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
        const result = await axios.post(`${domain}/users/login/google`, res);
        if (result.data.error) {
            return { error: result.data.error };
        }
        user = result.data;
    }
    else {
        const result = await axios.post(`${domain}/users/login`, data);
        if (result.data.error) {
            return { error: result.data.error };
        }
        user = result.data;
    }
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
            console.log(data);
            const result = await axios.post(`${domain}/users/register`, data);
            if (result.data.error) {
                return { error: result.data.error };
            }
            user = result.data;
        } catch (e) {
            return { error: e.message };
        }
    }
}
