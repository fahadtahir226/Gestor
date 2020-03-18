import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyB8fUUtmzoUCYfrBoJvERYSJBlxfKCUTaA",
  authDomain: "the-gestor.firebaseapp.com",
  databaseURL: "https://the-gestor.firebaseio.com",
  projectId: "the-gestor",
  storageBucket: "the-gestor.appspot.com",
  messagingSenderId: "357904660453",
  appId: "1:357904660453:web:e2e95baf42e8907c76210c"
};
export default firebase.initializeApp(firebaseConfig);
