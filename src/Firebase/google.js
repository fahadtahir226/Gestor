import firebase from 'firebase'
import { db } from './firestore'
export const googleLogin = (event) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    event.preventDefault();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        console.log(result);
        // var user = result.user;
        // ...
        // db.collection('Users').doc(result.user.uid).add({
        //     userid: result.user.uid,
        //     email: result.user.email? result.user.email: '',
        //     fname: fname,
        //     lname: lname,
        //     profilepic: "",
        //     nif: '',
        //     email: auth.currentUser.email ? auth.currentUser.email: '',
        //     profession: '',
        //     inc: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     exp: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     ret: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     iva: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     irpf: [0,0,0,0,0,0,0,0,0,0,0,0],
        // })
        // .then(() => M.toast({html: "User Added!"}))


        // console.log(token, user);
        window.location.replace("/home")
        })
}