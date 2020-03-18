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
export const loadExpenses = (user, year, updateExpData) => {
  let expenses = db.collection("Users").doc(user.uid).collection("expenses");
  expenseData.year = year;
  monthlyData.map(month =>
  expenses.where('year','==',year).where('month','==',month).get()
    .then((data) => {
      data.forEach((report) => {
          if(report) {
            expenseData[month].push(report.data());   
          }
      })
      updateExpData(expenseData);
    })
    .catch(error => console.log(error))
    )
}

let incomeData = new YearlyData(); 
export const loadIncomes = (user, year, updateIncData) => {
  let incomes = db.collection("Users").doc(user.uid).collection("incomes");
  incomeData.year = year;
  
  monthlyData.map(month =>{
    incomes.where('year','==',year).where('month','==',month).get()
    .then((data) => {
      data.forEach((report) => {
          if(report) {
            incomeData[month].push(report.data());   
          }
      })
      updateIncData(incomeData);
    })
    .catch(error => console.log("could not find data",error))
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

export const addContact = (user, addContact) => {
  let contact ={};
  contact.address = document.getElementById('adderinput');
  contact.nameInput = document.getElementById("nameInput");
  contact.nif = document.getElementById("nifInput");
  contact.address = document.getElementById('addrInput');
  contact.pCode = document.getElementById('postalCodeInput');
  contact.city = document.getElementById('cityInput');
  contact.province = document.getElementById('provInput');
  contact.mail = document.getElementById('mailInput');
  contact.saveAs = document.getElementById('saveAsInput');

  db.collection("Users").doc(user.uid).collection("contacts").set({
      

  })
}