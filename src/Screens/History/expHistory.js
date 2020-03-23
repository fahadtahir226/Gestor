import React, { Component } from 'react';
import M from 'materialize-css';
import '../../App.css'
import { db } from '../../Firebase/firestore'
import {PopupCard} from '../Popup/configureCards';


class ExpenseHis extends Component {
constructor(props){
  super(props);
  console.log(props);
  this.state = {expHis: {}, year: new Date().getFullYear()}
}

componentDidMount(){
    let select = document.querySelectorAll('select');
    M.FormSelect.init(select);
    console.log(this.props);
    // loadExpHis(user)
    // this.setState = {expHis: props.expData, year: new Date().getFullYear()}

}
loadExpHis = (user, year) => {
  if(year == this.state.year) return;
  let monthlyData = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST','SEPTEMBER','OCTUBER','NOVEMBER','DECEMBER'],
  expHis = { JANUARY : [], FEBRUARY : [], MARCH : [], APRIL : [], MAY : [], JUNE : [], JULY : [], AUGUST : [], SEPTEMBER :[], OCTUBER : [], NOVEMBER : [], DECEMBER : []}, 
  expenses = db.collection("Users").doc(user.uid).collection("expense");

  monthlyData.map(month =>
  expenses.where('year','==',year).where('month','==',month).get()
    .then((data) => {
      data.forEach((report) => {
          if(report) {
            expHis[month].push(report.data());   
          }
      })
      if(month == 'DECEMBER') {
          console.log("Setting data for year: ", year, expHis);
          this.props.updateExpHis(expHis)
          this.setState({year: year})
        }
    })
    .catch(error => console.log(error))
    )
}

render() {
    var userInfo = this.props.userInfo,
        expenseData = this.props.expHis;

  return (
    <>
    <center>
    </center>
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <div className="row" style={{marginBottom: 0}}>
      <h5 className="col s12 m12 l4 " style={styleBox.mainHeading}> NET EXPENSE 600€<br />
        <span style={{color: "grey", fontSize: 20}}>
        <div className="input-field" style={styleBox.inputDiv}>
        <select onChange={(event)=>this.loadExpHis(userInfo,parseInt( event.currentTarget.value ))} style={{boxShadow: "none", outline: "none", borderBottom: "none"}}>
          <option defaultValue="2020">2020</option>
          <option defaultValue="2019">2019</option>
          <option defaultValue="2018">2018</option>

        </select>
      </div>
        </span>
      </h5>
      </div>
      <div className="row">
        <div className="col s12 m12 l12" style={styleBox.content}>
            <Month expenseData={expenseData} mon="JANUARY"/>
            <Month expenseData={expenseData} mon="FEBRUARY"/>
            <Month expenseData={expenseData} mon="MARCH"/>
            <Month expenseData={expenseData} mon="APRIL"/>
            <Month expenseData={expenseData} mon="MAY"/>
            <Month expenseData={expenseData} mon="JUNE"/>
            <Month expenseData={expenseData} mon="JULY"/>
            <Month expenseData={expenseData} mon="AUGUST"/>
            <Month expenseData={expenseData} mon="SEPTEMBER"/>
            <Month expenseData={expenseData} mon="OCTUBER"/>
            <Month expenseData={expenseData} mon="NOVEMBER"/>
            <Month expenseData={expenseData} mon="DECEMBER"/>
        </div>
      </div>
    </div>
    </>
);
  }
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
            <Entry key={key} concept = {entry.concept} day={entry.day} date={entry.date} status={entry.status} docAddr={entry.docAddr} />
        )}
      </ul>
    </>
  )
}

const Entry = (props) => {
    var {concept, day, date, status, docAddr} = props;
    
    return (

      <li className="collection-item avatar" style={{borderRight: "none",borderLeft: "none", borderBottom: "1px solid #e0e0e0", paddingLeft: 30}}>
        <h5 style={{marginTop: 5, marginBottom: 0, padding: 3}} className="title">{concept}</h5>
        <p style={{color: "dimgrey", padding: 3, fontSize: 12}}> {day} , {date}</p>
        <a href="#!" className="secondary-content"><i onClick={()=>PopupCard('docPdf', docAddr)} className='material-icons' style={{color: "grey"}}>picture_as_pdf</i>
            <i className="material-icons right" style={{color: "grey"}}>chevron_right</i>
            <br />
            {status ? 
                <span className=
                {status==="PENDING"? "badge blue": status==='REVICE'? "badge red" : "hide"}
                  style={{color: "white", borderRadius: 4, fontSize: 9, width: 70, marginLeft: 0, }} >
                    {status}</span>
            : null}
        </a>
      </li>
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

export default ExpenseHis;
