import React, { Component } from 'react';
import M from 'materialize-css';
import '../App.css'

import history from '../images/drawable/history.png';
import mail from '../images/drawable/mail.png'

class Income extends Component {
  constructor(props){
    super(props);
    console.log("Income Constructor ",props);
    this.state = {qtr: "all", incomeData: {}};
  }
  componentDidMount(){
    var elems = document.querySelectorAll('.collapsible'),
      fixdbtn = document.querySelectorAll('.fixed-action-btn'),
      select = document.querySelectorAll('select');

      M.Collapsible.init(elems);
      M.FloatingActionButton.init(fixdbtn, {direction:"bottom"});
      M.FormSelect.init(select);
    }
  handleClick(e,select){
    this.setState({qtr: select.value});
  }
render() {
    // var {isAuthenticated, userInfo,expData} = this.props;
    var incomeData = this.props.incData;

  return (
    <>
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <div className="row" style={{marginBottom: 0}}>
      <h5 className="col s12 m12 l4 " style={styleBox.mainHeading}>NET INCOME 1500€<br /><span style={{color: "grey", fontSize: 20}}>4T 2020</span></h5>
      <div className="col s6 m5 l2" style={{paddingLeft: 30,paddingRight: 0,margin: 0}}>
      <div className="input-field" style={styleBox.inputDiv}>
        <select onChange={(event)=>this.handleClick(event, event.currentTarget)} style={{boxShadow: "none", outline: "none", borderBottom: "none"}}>
          <option defaultValue="all">ALL</option>
          <option defaultValue="1T">1T</option>
          <option defaultValue="2T">2T</option>
          <option defaultValue="3T">3T</option>
          <option defaultValue="4T">4T</option>
        </select>
      </div>
      </div>
      <div className="col s6 m5 l3 right" style={{textAlign: "right" ,padding: 30, paddingBottom: 0,paddingLeft: 0}}>
          <img alt="" src={history} style={styleBox.HeaderIcons}/>
          <img alt="" src={mail} style={styleBox.HeaderIcons}/>
      </div>
      </div>
      <div className="row">
        <div className="col s12 m12 l12" style={styleBox.content}>
          {
            this.state.qtr === "1T" ?
            <QTR1 incomeData={incomeData} />:
            this.state.qtr === "2T" ?
            <QTR2 incomeData={incomeData} />:
            this.state.qtr === "3T" ?
            <QTR3 incomeData={incomeData} />:
            this.state.qtr === "4T" ?
            <QTR4 incomeData={incomeData} />:
            <QTRALL incomeData={incomeData} />
          }
        </div>
      </div>
    </div>
      <a style={{float: "right", marginRight: 30}} href="#!" className="container-fluid btn-floating btn-large waves-effect waves-light white">
            <i style={{ color: "#1e88e5"}} className="material-icons">add</i></a>
    </>
);
  }
}


const Entry = (props) => {
    var {title, day, date, amount, status} = props;
    
    return (

      <li className="collection-item avatar" style={{borderRight: "none",borderLeft: "none", borderBottom: "1px solid #e0e0e0", paddingLeft: 30}}>
        <h5 style={{marginTop: 5, marginBottom: 0, padding: 3}} className="title">{title}</h5>
        <p style={{color: "dimgrey", padding: 3, fontSize: 12}}> {day} , {date}</p>
        <a href="#!" className="secondary-content">{amount}€
            <i className="material-icons right" style={{color: "grey"}}>chevron_right</i>
            <br />
            {status ? 
                <span className=
                {status==="PENDING"?
                 "badge blue": "badge red"
                  }
                  style={{color: "white", borderRadius: 4, fontSize: 9, width: 70, marginLeft: 0, }} >
                    {status}</span>
            : null}
        </a>
      </li>
    )
}
const Month = (props) => {
  if(props.incomeData==null) return null;
  if(props.incomeData[props.mon].length === 0) return null;
  let usrs = props.incomeData[props.mon];
  usrs.sort((i,iPlus) => i.date - iPlus.date);
  return (
    <>
      <div style={{background: "#e0e0e0", textAlign: "center", marginTop: 0, color: "grey"}}> {props.mon} {props.incomeData.year}</div>
      <ul className="collection" style={{margin: 0}}>
        {usrs.map((entry, key) => 
            <Entry key={key} title = {entry.title} day={entry.day} date={entry.date} amount={entry.amount}  status={entry.status}/>
        )}
      </ul>
    </>
  )
}

const QTR1 = (props) => {

  return (
    <>
    <Month incomeData={props.incomeData} mon="JANUARY"/>
    <Month incomeData={props.incomeData} mon="FEBRUARY"/>
    <Month incomeData={props.incomeData} mon="MARCH"/>
    </>
  )
}
const QTR2 = (props) => {

  return (
    <>
    <Month incomeData={props.incomeData} mon="APRIL"/>
    <Month incomeData={props.incomeData} mon="MAY"/>
    <Month incomeData={props.incomeData} mon="JUNE"/>
    </>
  )
}
const QTR3 = (props) => {

  return (
    <>
    <Month incomeData={props.incomeData} mon="JULY"/>
    <Month incomeData={props.incomeData} mon="AUGUST"/>
    <Month incomeData={props.incomeData} mon="SEPTEMBER"/>
    </>
  )
}
const QTR4 = (props) => {

  return (
    <>
    <Month incomeData={props.incomeData} mon="OCTUBER"/>
    <Month incomeData={props.incomeData} mon="NOVEMBER"/>
    <Month incomeData={props.incomeData} mon="DECEMBER"/>
    </>
  )
}
const QTRALL = (props) => {
  return (
    <>
      <QTR1 incomeData={props.incomeData} />
      <QTR2 incomeData={props.incomeData} />
      <QTR3 incomeData={props.incomeData} />
      <QTR4 incomeData={props.incomeData} />
    </>
  )
}

const styleBox = {
    main: {
      margin: 30,
      borderRadius: 10,
      minHeight: 450,
      color: "#1e88e5",
      boxShadow:"0px 1px 2px 2px #ceeef2"
    },
    mainHeading: {
      marginBottom: 0,
      marginTop: 0,
      padding: 30,
      paddingBottom: 0,
      color: "#1e88e5",
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

export default Income;
