import React, { Component } from 'react';


import AppRouter from './Router/routes';
import { auth }  from './Firebase/auth';
import { loadExpenses, loadIncomes, loadContact, loadProfile , loadModels} from './Firebase/firestore';
import { loadDocument } from './Firebase/storage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false,
      userInfo: [],
      expData: null,
      expHis: null,
      incData: null,
      incHis: null,
      contacts: null,
      doc: null,
      userData: null,
      models : []
      }
      // SignOut();
  }
  render() {
    var {isAuthenticated, userInfo, expData, expHis, incData, incHis, contacts, doc, userData, models} = this.state;
    return (
      <div className='App' >

        <AppRouter 
        isAuthenticated = { isAuthenticated } 
        userInfo = { userInfo } 
        expData = { expData }
        expHis = { expHis } 
        updateExpHis = {this.updateExpHis }
        incData = { incData } 
        incHis = { incHis }
        updateIncHis = {this.updateIncHis }
        contacts = { contacts }
        uploadDoc = { this.uploadDocData }
        doc = { doc } 
        userData= { userData }
        models = { models }
        />
      </div>
    );
  }
  // Expense Related
  updateExpData = (expData) => {
    console.log(expData)
    this.setState({expData})
  }
  updateExpHis = (expHis) => {
    this.setState({expHis})
  }

// Income Related
  updateIncData = (incData) => {
    console.log(incData)
    this.setState({incData})
  }
  updateIncHis = (incHis) => {
    this.setState({incHis})
  }
// Contact
  updateContactData = (contacts) => {
    console.log(contacts)
    this.setState({contacts})
  }
// User Data
  updateUserData = (userData) => {
    console.log("User Data",userData)
    this.setState({userData})
  }

// Document Related
  updateDocData = (doc) => {
    console.log(doc)
    this.setState({doc});
  }
// Configuration
updateModelState = (models) => {
  console.log(models)
  this.setState({models});
}


componentDidMount() {     
    
    auth.onAuthStateChanged((user) => { 
      if(user){
        console.log("User : " ,user);
        this.setState({
          isAuthenticated: true,
          userInfo: user,
        })
        loadDocument(user, (document) => this.updateDocData(document));
        loadProfile (user, (userData) => this.updateUserData(userData));
        loadContact (user, (contacts) => this.updateContactData(contacts));
        loadModels  (user, (models)   => this.updateModelState(models));
        loadExpenses(user, new Date().getFullYear(), (exp) => this.updateExpData(exp), (expHis) => this.updateExpHis(expHis));
        loadIncomes (user, new Date().getFullYear(), (inc) => this.updateIncData(inc), (incHis) => this.updateIncHis(incHis));
      }else {
        this.setState({
          isAuthenticated: false
        })
      }
    })
  }
}

export default App;
