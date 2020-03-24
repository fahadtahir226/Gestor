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

            // .then(async (user) => {
            //     await db.collection(DBName).doc(auth.currentUser.uid).set({
            //         name: name.value,
            //         email: email.value,
            //         id: auth.currentUser.uid
            //     })
            //         .then(res => {
            //             auth.currentUser.updateProfile({
            //                 displayName: name.value,
            //             }).then(function () {
            //                 console.log('User Name Added to authentication')
            //             }).catch(function (error) {
            //                 console.log('User Name Added to authentication')
            //             });
            //             alert(`Your Account Has Been Created Successfully !!`)
            //             SignOut(event);
            //             return Loading('none') && ClearField()
            //         })
            // })
            // .catch(err => {
            //     console.log(err.message)
            //     return Loading('none')
            // })

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
}).catch(function(error) {
  console.log(error);
});
}
export const NewPassword = (oobCode) => {
    var actionCode = document.getParameterByName('oobCode');
    // let code = this.props.match.params.oobCode;
    let newPassword = document.getElementById("newPass");
    let confirmPassword = document.getElementById("newPass");
    if(newPassword === confirmPassword){

        auth().confirmPasswordReset(actionCode, newPassword)
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
        alert('You\'re Logged Out Successfully');
    }).catch(err => {
        alert(err.message);
    })
}

