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
            expenseData[month].push(report.data());   
          }
      })
      if(month === 'DECEMBER') {
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
  console.log("",user.uid);
  
  monthlyData.map(month =>{
    incomes.where('year','==',year).where('month','==',month).get()
    .then((data) => {
      data.forEach((report) => {
          if(report) {
            incomeData[month].push(report.data());   
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
