import React, { Component } from 'react';
import M from 'materialize-css';
import '../App.css'

import history from '../images/drawable/history.png';
// import mail from '../images/drawable/mail.png'
import AddExpense from '../Screens/Popup/AddExpense'
import {PopupCard} from '../Screens/Popup/configureCards';
import { Link } from 'react-router-dom';


class Expense extends Component {
  constructor(props){
    super(props);
    let now = new Date().getMonth(), toShow;
    if(now < 3) toShow = '1T'
    else if(now < 6) toShow = '2T'
    else if(now < 9) toShow = '3T'
    else if(now < 12) toShow = '4T'

    this.state = {qtr: toShow ,reupdate: 0}
  }

  componentDidMount(){
    var elems = document.querySelectorAll('.collapsible'),
      fixdbtn = document.querySelectorAll('.fixed-action-btn'),
      select = document.querySelectorAll('select');

      M.Collapsible.init(elems);
      M.FloatingActionButton.init(fixdbtn, {direction:"bottom"});
      M.FormSelect.init(select);

      document.getElementById('addExpense').style.display = 'none';      
      // this.updateState();
    }
    // updateState(){
    //   setTimeout(() => {
    //     this.setState({reupdate: 1});
    //   }, 2000);
    // }
render() {
    var {userInfo, contacts} = this.props;
    var expenseData = this.props.expData;
    console.log(expenseData);
    var d = new Date();
    var months = ["JANUARY", "FEBURARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTUBER", "NOVEMBER", "DECEMBER"];
    let result = Object.values(expenseData? expenseData : {a : []}).every(data =>{
        if(typeof(data) =="number"){
          return true
        }
        if(data.length === 0 || data === undefined ){
          return true;
        }else{
          return false;
        }
      })
  return (
    <>
    <center>
    <AddExpense userInfo={userInfo} clients={contacts} />
    </center>
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <div className="row" style={{marginBottom: 0}}>
      <h5 className="col s12 m12 l4 " style={styleBox.mainHeading}> NET EXPENSE 600€<br /><span style={{color: "grey", fontSize: 20}}>{this.state.qtr} {new Date().getFullYear()}</span></h5>
      <div className="col s6 m5 l3 right" style={{textAlign: "right" ,padding: 30, paddingBottom: 0,paddingLeft: 0}}>
          {/* <img alt="" src={history} style={styleBox.HeaderIcons}/> */}
          <Link to='expense/history'><img alt="" src={history} style={styleBox.HeaderIcons}/></Link>
      </div>
      </div>
      <div className="row">
        <div className="col s12 m12 l12" style={styleBox.content}>
          {
            this.state.qtr === "1T" ?
            <QTR1 expenseData={expenseData} />:
            this.state.qtr === "2T" ?
            <QTR2 expenseData={expenseData} />:
            this.state.qtr === "3T" ?
            <QTR3 expenseData={expenseData} />:
            this.state.qtr === "4T" ?
            <QTR4 expenseData={expenseData} />:
            null
          }
          {
            !result ?  "" : 
            <div className="row" style ={{ textAlign : "center", margin : 0 }}>
            <div style={{background: "#e0e0e0", textAlign: "center", marginTop: 0, color: "grey"}}> {months[d.getMonth()]} {new Date().getFullYear()}</div>
            <h5>No Expense found</h5>
            </div>
          }
        </div>
      </div>
    </div>
      <a onClick={()=>PopupCard('addExpense', false)} style={{float: "right", marginRight: 30}} href="#addExpense" className="container-fluid btn-floating btn-large waves-effect waves-light white modal-trigger">
            <i style={{ color: "#1e88e5"}} className="material-icons">file_upload</i></a>
    </>
);
  }
}


const Entry = (props) => {
    var {concept, day, date, status, docAddr, amount} = props;
    
    return (

      <li className="collection-item avatar" style={{borderRight: "none",borderLeft: "none", borderBottom: "1px solid #e0e0e0", paddingLeft: 30}}>
        <h5 style={{marginTop: 5, marginBottom: 0, padding: 3}} className="title">{concept}</h5>
        <p style={{color: "dimgrey", padding: 3, fontSize: 12}}> {day} , {date}</p>
        <a href="#!" className="secondary-content"><a onClick={()=>PopupCard('docPdf', docAddr)} style={{color: "grey"}}>{amount}€</a>
            <i className="material-icons right" style={{color: "grey"}}>chevron_right</i>
            <br />
            {status ? 
                <span className=
                {status==="PENDING"? "badge blue": status==='reviced'? "badge red" : null}
                  style={{color: "white", borderRadius: 4, fontSize: 9, width: 70, marginLeft: 0, }} >
                    {status}</span>
            : null}
        </a>
      </li>
    )
}
const Month = (props) => {
  if(props.expenseData==null) return null;
  if(props.expenseData[props.mon].length === 0) return null;
  let usrs = props.expenseData[props.mon];
  usrs.sort((i,iPlus) => i.date - iPlus.date);
  return (
    <>
      <div style={{background: "#e0e0e0", textAlign: "center", marginTop: 0, color: "grey"}}> {props.mon} {props.expenseData.year}</div>
      <ul className="collection" style={{margin: 0}}>
        {usrs.map((entry, key) => 
          <Link to={"expense/recipt/"+ entry.ticketNo } key={key}>
            <Entry key={key} amount = {entry.amount} concept = {entry.concept} day={entry.day} date={entry.date} status={entry.status} docAddr={entry.docAddr} />
          </Link>
        )}
      </ul>
    </>
  )
}

const QTR1 = (props) => {

  return (
    <>
    <Month expenseData={props.expenseData} mon="JANUARY"/>
    <Month expenseData={props.expenseData} mon="FEBRUARY"/>
    <Month expenseData={props.expenseData} mon="MARCH"/>
    </>
  )
}
const QTR2 = (props) => {

  return (
    <>
    <Month expenseData={props.expenseData} mon="APRIL"/>
    <Month expenseData={props.expenseData} mon="MAY"/>
    <Month expenseData={props.expenseData} mon="JUNE"/>
    </>
  )
}
const QTR3 = (props) => {

  return (
    <>
    <Month expenseData={props.expenseData} mon="JULY"/>
    <Month expenseData={props.expenseData} mon="AUGUST"/>
    <Month expenseData={props.expenseData} mon="SEPTEMBER"/>
    </>
  )
}
const QTR4 = (props) => {

  return (
    <>
    <Month expenseData={props.expenseData} mon="OCTUBER"/>
    <Month expenseData={props.expenseData} mon="NOVEMBER"/>
    <Month expenseData={props.expenseData} mon="DECEMBER"/>
    </>
  )
}

const styleBox = {
  main: {
    margin: 30,
    borderRadius: 10,
    minHeight: 500,
    color: "#1e88e5",
    boxShadow:"0px 1px 2px 2px #ceeef2"
    },
    mainHeading: {
      marginBottom: 0,
      marginTop: 0,
      padding: 30,
      paddingBottom: 0,
      color: "#1e88e5",
      fontWeight :"bold"
    },
    HeaderIcons: {
      width: 30,
      height: 30,
      marginRight: 20
    },
    inputDiv: {
      background: "#F2F0EC",
      borderRadius: 200,
      paddingLeft: 15,
      marginTop: 30,
    },
    content: {
      padding: 10,
    },
    Ul: {
        borderRight: "none",
        borderLeft: "none",
        boxShadow: "none"
    }
  }

export default Expense;
