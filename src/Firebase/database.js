import firebase from "./firebase"

export var database = firebase.database();


export const writeUserData = (userId, msg) => {
    let msgs = database.ref('Users/' + userId).push()
    msgs.set({
      uid: userId,
      message: msg,
      // self: true,
    })
    document.getElementById('message-to-send').value = '';
  }

