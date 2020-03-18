import firebase from "./firebase"
import {auth} from './auth'

export const storageRef = firebase.storage().ref();


export const profileUpload = (e) => {
    let name = e.target.name,
    ref = storageRef.child(`profile/${name}.jpg`);
    ref.put(e.target.files[0]).then(function(snapshot) {
        console.log('Uploaded Your Profile Picture!', snapshot);
        storageRef.child(`profile/${name}.jpg`).getDownloadURL()
        .then(function(url) {
            console.log(url);
            auth.currentUser.updateProfile({photoURL: url});
            window.location.replace('myGestor')
        })
    })
    .catch((error) => console.log(error))
}

export const loadDoc = (e) => {

}
export const uploadDoc = (file, userID) => {
    let refDoc = storageRef.child(`documents/${userID}.pdf`);
    // console.log(file)
    // console.log(userID);
    let blob = new Blob(file, { type: "image/jpeg" });
    refDoc.put(blob).then(function(snapshot) {
        console.log('Uploaded Your Document!', snapshot);


        storageRef.child(`documents/${userID}.pdf`).getDownloadURL()
        .then(function(url) {
            console.log(url);
        })
        .catch((error)=>console.log("Error from getting url however doc is uploaded",error))
    })
    .catch((error) => console.log("Cannot Upload doc",error))

}