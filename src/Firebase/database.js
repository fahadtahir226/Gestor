import firebase from "./firebase"

export var database = firebase.database();


export const writeUserData = (userId, name, msg) => {
    let msgs = database.ref('Users/' + userId).push()
    let time = new Date();
    let days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THRUSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
    
    msgs.set({
      name: name,
      uid: userId,
      message: msg,
      time: `${time.getHours()} : ${time.getMinutes()}, ${days[time.getDay()]} ${time.getDate()} , ${time.getFullYear()}`
    })
    setTimeout(() => {
    document.getElementById('message-to-send').value = '';
    var ul = document.getElementById("ul-msgs");
    var element = document.getElementById("chat-history");
    element.scrollTo(0, ul.childElementCount * 128 );
    }, 100)
  }

