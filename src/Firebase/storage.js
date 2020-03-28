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

export const loadDocument = (user, updateDocData) => {
    let refDoc = storageRef.child(`documents/${user.uid}`);
    searchNested(refDoc, doc, updateDocData);
    // console.log("Final Doc Here Again",doc)
    updateDocData(doc);
}


export let doc = {}
const searchNested = (ref, doc, updateDocData) => {
    ref.listAll()
    .then(ref => {
        if(ref.items){
        doc.items = ref.items.map((item)=> {
            // let pdf = new Pdf()
            let pdf = {};
            pdf.name = item.name;
            item.getDownloadURL()
            .then(url => pdf.path = url);
            return pdf;
        });
        }
        if(ref.prefixes) {
          doc.paths = ref.prefixes.map((prefix)=>{
            // let folder = new Folders();
            let folder = {};
            folder.name = prefix.name;
            folder.fulpath = prefix.fullPath;
            folder.subChilds = {};
            searchNested(prefix, folder.subChilds, updateDocData);
            // updateDocData(doc);
            return folder;
          })
        }
        else{
            // updateDocData(doc);
            return doc;
        }
    })
}






export const uploadDoc = (file, userID, updateDocData) => {
    let refDoc = storageRef.child(`documents/${userID}`);
     console.log(file);
    refDoc.put(file).then(function(snapshot) {
        console.log('Uploaded Your Document!', snapshot);


        refDoc.getDownloadURL()
        .then(function(url) {
            document.getElementById('docIframe').src = url;
            // console.log(url);
        })
        .catch((error)=>console.log("Error from getting url however doc is uploaded",error))
    })
    .catch((error) => console.log("Cannot Upload doc",error))

}