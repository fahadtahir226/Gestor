import firebase from "./firebase"
// import {auth} from './auth'
export const db = firebase.firestore();
let monthlyData = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST','SEPTEMBER','OCTUBER','NOVEMBER','DECEMBER']

class YearlyData {
  constructor(){
    this.year= '';
    this.JANUARY = [];
    this.FEBRUARY = [];
    this.MARCH = [];
    this.APRIL = [];
    this.MAY = [];
    this.JUNE = [];
    this.JULY = [];
    this.AUGUST = [];
    this.SEPTEMBER =[];
    this.OCTUBER = [];
    this.NOVEMBER = [];
    this.DECEMBER = [];
  }
}
let expenseData = new YearlyData(); 
export const loadExpenses = (user, year, updateExpData, updateExpHis) => {
  let expenses = db.collection("Users").doc(user.uid).collection("expense");
  expenseData.year = year;
  monthlyData.map(month =>
  expenses.where('year','==',year).where('month','==',month).get()
    .then((data) => {
      data.forEach((report) => {
          if(report) {
            let data = report.data();
            data.ticketNo = report.id;
            expenseData[month].push(data);   
          }
      })
      if(month === 'DECEMBER') {
        console.log(expenseData)
        updateExpData(expenseData);
        updateExpHis(expenseData);
      }
    })
    .catch(error => console.log(error))
    )
}

let incomeData = new YearlyData(); 
export const loadIncomes = (user, year, updateIncData, updateIncHis) => {
  let incomes = db.collection("Users").doc(user.uid).collection("income");
  incomeData.year = year;
    monthlyData.map(month =>{
    incomes.where('year','==',year).where('month','==',month).get()
    .then((data) => {
      data.forEach((report) => {
          if(report) {
            let data = report.data();
            data.ticketNo = report.id;
            incomeData[month].push(data);   
          }
      })
      if(month === 'DECEMBER') {
        updateIncData(incomeData);
        updateIncHis(incomeData);
      };
    })
    .catch(error => console.log("could not find data",error))
    return null;
  })
}

let contacts = [];
export const loadContact = (user, updateContactState) => {
  db.collection("Users").doc(user.uid).collection("contacts").get()
  .then((data) => {
    data.forEach((report) => {
      if(report.data()) contacts.push(report.data());
    })
    updateContactState(contacts);
  })
  .catch((error) => console.log("Error: ", error) )
}


export const loadProfile = (user, updateProfile) => {
  db.collection("Users").doc(user.uid).get()
  .then((data) => {
    let userData = data.data();
    updateProfile(userData);
  })
  .catch((error) => console.log("Error: ", error) )
}


export const updateProfileData = (user) => {
  console.log(user.uid, user)
  db.collection("Users").doc(user.userid).set(user)
  .then(function() {
      window.location.replace('./mygestor')
      console.log("Document successfully updated!");
  })
  .catch((error) => console.log("Error: ", error) )
}