import firebase from "./firebase"
import M from 'materialize-css'
import { db } from "./firestore";
export const auth = firebase.auth();

// user Sign Up 
export const SignUpCall = () => {
    // e.preventDefault();
    var fname = document.getElementById('reg-fname').value;
    var lname = document.getElementById('reg-lname').value;
    var email = document.getElementById("reg-email").value;
    var pass = document.getElementById("reg-password").value;

    if ((fname.length && lname.length && email.length && pass.length) !== 0) {

            auth.createUserWithEmailAndPassword(email, pass)
            .then(async () => {
                console.log(auth.currentUser.email);

                auth.currentUser.updateProfile({displayName: fname + " " + lname});
                db.collection('Users').doc(auth.currentUser.uid).set({
                    userid: auth.currentUser.uid,
                    email: auth.currentUser.email? auth.currentUser.email: '',
                    fname: fname,
                    lname: lname,
                    profilepic: "https://firebasestorage.googleapis.com/v0/b/the-gestor.appspot.com/o/profile%2Fuser.png?alt=media&token=df2b9ca4-a73a-4312-b61f-1faf1c2fe374",
                    nif: '',
                    profession: '',
                    inc: [0,0,0,0,0,0,0,0,0,0,0,0],
                    exp: [0,0,0,0,0,0,0,0,0,0,0,0],
                    ret: [0,0,0,0,0,0,0,0,0,0,0,0],
                    iva: [0,0,0,0,0,0,0,0,0,0,0,0],
                    irpf: [0,0,0,0,0,0,0,0,0,0,0,0],
                })
                .then(() => {
                    M.toast({html: "User Added!"})
                    window.location.replace('/home')})
            })

    } else {
            M.toast({html: 'Every Field is Mandatory!'})
    }
}

// User login 
export const SignInCall = () => {
    // e.preventDefault();
    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-pass").value;

    auth.signInWithEmailAndPassword(email, pass)
        .then(async res => {
            if (res) {
                
                window.location.replace("/home");
                console.log(auth.currentUser);
            }
        }).catch(err => {
                M.toast({html: err.message})
        });
}
// User Pass Reset
export const PassReset = () => {
var emailAddress = document.getElementById("reset-email").value;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  window.location.replace("/");
  SignOut();
}).catch(function(error) {
  console.log(error);
});
}
export const NewPassword = (oobCode) => {
    let newPassword = document.getElementById("newPass").value;
    let confirmPassword = document.getElementById("confirmPass").value;
    if(newPassword === confirmPassword){

        auth.confirmPasswordReset(oobCode, newPassword)
            .then(function() {
              window.location.replace("/home");
            })
            .catch(function(error) {
                console.log(error);
            })
    }
    else{
        alert("Confirm password and new password are different!");
    }
}


// User Sign Out
export const SignOut = () => {
    auth.signOut().then(res => {
        M.toast({html: 'You\'re Logged Out Successfully'})
    }).catch(err => {
        M.toast({html: err.message})
    })
}

