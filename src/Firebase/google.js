import firebase from 'firebase'
export const googleLogin = (event) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    event.preventDefault();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(token, user);
        window.location.replace("/Home")
        })
}