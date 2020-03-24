import firebase from 'firebase';
import { firebaseConfig } from "./firebase";
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// const db = firebase.firestore();

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
                alert('UserAdded');
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
        alert('field is empty!!')
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
                window.location.replace("/Home");
                console.log(auth.currentUser);
            //     await db.collection(text).doc(auth.currentUser.uid).get()
            //         .then(doc => {
            //             if (doc.exists) {
            //                 if (text === 'seller') {
            //                     window.location.replace("./Field_Wise_Pages/seller_page.html");
            //                 }
            //                 else if (text === 'buyer') {
            //                     window.location.replace("./Field_Wise_Pages/moderate_panel.html");
            //                 }

            //             } else {
            //                 alert('User Doesnt Exist!!!')
            //                 return Loading('none')
            //             }
            //         })
            //         .catch(err => {
            //             alert(err.message);
            //             return Loading('none')
            //         })
            }
        }).catch(err => {
            alert(err.message);
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

        firebase.auth().confirmPasswordReset(actionCode, newPassword)
            .then(function() {
              window.location.replace("/Home");
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

