import React, { Component } from 'react';


import { Switch, Route } from "react-router-dom";

// Photos
import bkground from "../../images/maskgroup.png";


// side Bar Component
import SideBar from "./SideBar"
import Graphs from "../Graphs";
import Gestor from "../Gestor";

import Expense from '../Expense';
import Income from '../Income';
import Contacts from '../Contacts/Contacts';
import NewContact from '../Contacts/NewContact';

import Subscription from '../Subscription';
import Configuration from '../Configuration';
import Documents from '../Documents/Documents'
import FAQ from "../FAQ";
import Security from '../Security';
import Help from '../Help';
import DocPdf from '../Popup/docPdf'
import {HideCard} from '../Popup/configureCards'
import ExpenseHis from '../History/expHistory';
import IncomeHis from '../History/incHistory';

class Home extends Component {
  componentDidMount(){
    HideCard('docPdf');
  }
  render() {
    var {isAuthenticated, userInfo, expData, expHis,updateExpHis , incData, incHis, updateIncHis, contacts, uploadDoc} = this.props;
    return (
    <div style={styleBox.main}>
      <div className="container-fluid">
        <div className="row " style={{marginBottom: 0}}>

          <div className="col hide-on-small-only m3 l2" style={{boxShadow:"2px 0px 0px 0px #ceeef2",height: 1200, margin: 0,padding: 0}}>
              <SideBar isAuthenticated={isAuthenticated} userInfo={userInfo}/>
          </div>
          <div className="col s12 m9 l10">
            
            <div className="container-fluid">
            
              <Header  isAuthenticated={isAuthenticated} userInfo={userInfo}/>
              <div className="row">
                <div className="col s12 m12 l12">
                <DocPdf url=''/>
                <Switch>

                  <Route path="/home/"  exact ><Graphs /> </Route>
                  <Route path="/home/myGestor"  exact ><Gestor isAuthenticated={isAuthenticated} userInfo={userInfo} /> </Route>

                  <Route path="/home/expense" exact ><Expense isAuthenticated={isAuthenticated} userInfo={userInfo} expData={expData} /></Route>
                  <Route path="/home/expense/history" exact ><ExpenseHis isAuthenticated={isAuthenticated} userInfo={userInfo} expHis={expHis} updateExpHis={updateExpHis} /></Route>

                  <Route path="/home/income" exact ><Income isAuthenticated={isAuthenticated} userInfo={userInfo} incData={incData}/></Route>
                  <Route path="/home/income/history" exact ><IncomeHis isAuthenticated={isAuthenticated} userInfo={userInfo} incHis={incHis} updateIncHis={updateIncHis} /></Route>
                  <Route path="/home/contacts" exact ><Contacts contacts={contacts}/></Route>
                  <Route path="/home/contacts/newContact" exact><NewContact userInfo={userInfo} /></Route>

                  <Route path="/home/subscr" exact><Subscription /></Route>
                  <Route path="/home/configure" exact ><Configuration /></Route>
                  <Route path="/home/doc" exact ><Documents userInfo={userInfo} uploadDoc={uploadDoc}/></Route>
                  <Route path="/home/faq" exact ><FAQ/> </Route>
                  <Route path="/home/security" exact ><Security/></Route>
                  <Route path="/home/help" exact ><Help /> </Route>

                </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


const styleBox = {
    main: {
        backgroundImage : `url(${bkground})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        minHeight: 500,
        // paddingTop: 130,
    },

    //Header
    header: {
      color: "white",
      padding: 30,
      paddingBottom: 0,
      marginBottom: 0
    },
    profile: {
      width: 50,
      height: 50,
      border: "2px solid white",
      borderRadius: "100%"
    },
    name: {
      textAlign: "right",
      marginTop: 12,
    }

}



const Header = (props) =>{
  var {isAuthenticated, userInfo} = props;
  return (
    <div className="row" style={styleBox.header}>
      <div className="col s5 m7 l9"></div>
        <div className="col hide-on-small-only m3 l2" style={styleBox.name}>{userInfo.displayName}</div>
        <div  className="col s2 m2 l1">
          <img style={styleBox.profile} alt="" src={isAuthenticated ? userInfo.photoURL : null} />
        </div>
    </div>
   )
}
export default Home;
