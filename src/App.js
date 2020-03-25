import React, { Component } from 'react';


import AppRouter from './Router/routes';
import { auth }  from './Firebase/auth';
import { loadExpenses, loadIncomes, loadContact } from './Firebase/firestore';
import { uploadDoc, loadDocument } from './Firebase/storage';

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
      doc: null
      }
  }
  render() {
    var {isAuthenticated, userInfo, expData, expHis, incData, incHis, contacts, doc} = this.state;
    return (
      <div className='App' >
        <AppRouter 
        isAuthenticated = { isAuthenticated} 
        userInfo = { userInfo } 
        expData = { expData }
        expHis = { expHis } 
        updateExpHis = {this.updateExpHis }
        incData = { incData } 
        incHis = { incHis }
        updateIncHis = {this.updateIncHis }
        contacts = { contacts }
        uploadDoc = { this.uploadDocData }
        doc={ doc } 
        />
      </div>
    );
  }
  // Expense Related
  updateExpData = (expData) => {
    this.setState({expData})
  }
  updateExpHis = (expHis) => {
    this.setState({expHis})
  }

// Income Related
  updateIncData = (incData) => {
    this.setState({incData})
  }
  updateIncHis = (incHis) => {
    this.setState({incHis})
  }
// Contact
  updateContactData = (contacts) => {
    this.setState({contacts})
  }

// Document Related
  updateDocData = (doc) => {
    console.log("Doc Data Here", doc);
    this.setState({doc});
  }

  uploadDocData(e, userID){
    uploadDoc(e.target.files[0], userID, (doc) => this.updateDocData(doc));
  }

  
  componentDidMount() {

    auth.onAuthStateChanged((user) => {      
      if(user){
        console.log("User : " ,user);
        this.setState({
          isAuthenticated: true,
          userInfo: user,
        })
        loadExpenses(user, new Date().getFullYear(), (exp) => this.updateExpData(exp), (expHis) => this.updateExpHis(expHis));
        loadIncomes (user, new Date().getFullYear(), (inc) => this.updateIncData(inc), (incHis) => this.updateIncHis(incHis));
        loadContact (user, (contacts) => this.updateContactData(contacts));
        loadDocument(user, (document) => this.updateDocData(document) );
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
