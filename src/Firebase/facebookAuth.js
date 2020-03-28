import firebase from 'firebase'
export const facebookLogin = (event) => {
    event.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // var secret = result.credential.secret;
        // The signed-in user info.
        // var user = result.user;
        // ...
        window.location.replace('/home');
    });
}