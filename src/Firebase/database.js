import firebase from "./firebase"

export var database = firebase.database();


export const writeUserData = (userId, msg) => {
    database.ref('Users/' + userId).set({
      uid: userId,
      message: msg,
    });
  }

// var starCountRef = database.ref('posts/' + postId + '/starCount');
