import firebase from "./firebase"
import M from 'materialize-css'
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
                M.toast({html: "User Added!"})
                auth.currentUser.updateProfile({displayName: fname + " " + lname});
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

