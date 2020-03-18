import React, { Component } from 'react';


import AppRouter from './Router/routes';
import { auth }  from './Firebase/auth';
import { loadExpenses, loadIncomes, loadContact } from './Firebase/firestore';
import { uploadDoc, loadDoc } from './Firebase/storage';
// import AddExpense from './Screens/Popup/AddExpense';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {isAuthenticated: false, userInfo: [], expData: null, incData: null, contacts: null, doc: null}
  }
  render() {
    var {isAuthenticated, userInfo, expData, incData, contacts} = this.state;
    return (
      <div className='App' >
        <AppRouter isAuthenticated={isAuthenticated} userInfo={userInfo} expData={expData} incData={incData} contacts={contacts} uploadDoc={this.uploadDocData} />
        {/* <AddExpense addExpense = {() => this.addExpense} /> */}
      </div>
    );
  }
  addExpense = () =>{
    console.log(new Date());
  }
  addContact = () => {
    
  }
  updateExpData = (expData) => {
    this.setState({expData})
  }
  updateIncData = (incData) => {
    this.setState({incData})
  }
  updateContactData = (contacts) => {
    this.setState({contacts})
  }

  updateDocData = (doc) => {
    this.setState({doc});
  }

  uploadDocData(e, userID){
    // console.log(uid);
    uploadDoc(userID ,e.target.files[0], (doc) => this.updateDocData(doc));
  }

  componentDidMount() {

    auth.onAuthStateChanged((user) => {      
      if(user){
        console.log("User : " ,user);
        this.setState({
          isAuthenticated: true,
          userInfo: user,
        })
        loadExpenses(user, 2020, (exp) => this.updateExpData(exp));
        loadIncomes (user, 2020, (inc) => this.updateIncData(inc));
        loadContact(user,(contacts) => this.updateContactData(contacts));
        // loadDoc(user, (doc) => this.updateDocData(doc));
      }else {
        this.setState({
          isAuthenticated: false
        })
      }
    })
  }
}

export default App;
