import firebase from 'firebase'
import { db } from './firestore'
import M from 'materialize-css';

export const googleLogin = (event) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    event.preventDefault();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        console.log(result);
        var user = result.user;

        var docRef = db.collection("Users").doc(result.user.uid);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                
                db.collection('Users').doc(result.user.uid).update({
                    userid: result.user.uid,
                    email: result.user.email? result.user.email: '',
                    fname: result.user.displayName.split(" ")[0],
                    lname: result.user.displayName.split(" ")[1],
                    profilepic: result.user.photoURL,
                    nif: '',
                    profession: ''
                }, {merge: true})
                .then(() => M.toast({html: "Logged In Successfully!"}))
                
            } else {
                
                db.collection('Users').doc(result.user.uid).set({
                    userid: result.user.uid,
                    email: result.user.email? result.user.email: '',
                    fname: result.user.displayName.split(" ")[0],
                    lname: result.user.displayName.split(" ")[1],
                    profilepic: result.user.photoURL,
                    nif: '',
                    profession: '',
                    inc: [0,0,0,0,0,0,0,0,0,0,0,0],
                    exp: [0,0,0,0,0,0,0,0,0,0,0,0],
                    retExp: [0,0,0,0,0,0,0,0,0,0,0,0],
                    ivaExp: [0,0,0,0,0,0,0,0,0,0,0,0],
                    irpfExp: [0,0,0,0,0,0,0,0,0,0,0,0],
                    retInc: [0,0,0,0,0,0,0,0,0,0,0,0],
                    ivaInc: [0,0,0,0,0,0,0,0,0,0,0,0],
                    irpfInc: [0,0,0,0,0,0,0,0,0,0,0,0],
                })
                .then(() => M.toast({html: "User Added!"}))

            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });




        // db.collection('Users').doc(auth.currentUser.uid).set({
        //     userid: auth.currentUser.uid,
        //     email: auth.currentUser.email? auth.currentUser.email: '',
        //     fname: fname,
        //     lname: lname,
        //     profilepic: "https://firebasestorage.googleapis.com/v0/b/the-gestor.appspot.com/o/profile%2Fuser.png?alt=media&token=df2b9ca4-a73a-4312-b61f-1faf1c2fe374",
        //     nif: '',
        //     profession: '',
        //     inc: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     exp: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     retExp: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     ivaExp: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     irpfExp: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     retInc: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     ivaInc: [0,0,0,0,0,0,0,0,0,0,0,0],
        //     irpfInc: [0,0,0,0,0,0,0,0,0,0,0,0],
        // })
        // .then(() => {
        //     M.toast({html: "User Added!"})
        //     window.location.replace('/home')})

        // console.log(token, user);
        // window.location.replace("/home")
        })
}