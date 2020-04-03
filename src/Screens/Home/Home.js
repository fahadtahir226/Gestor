import React, { Component } from 'react';
import M from 'materialize-css'

import { Switch, Route, Link } from "react-router-dom";

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
import ExpenseHis from '../History/expHistory';
import IncomeHis from '../History/incHistory';
import Recipt from '../recipt';
import { SignOut } from '../../Firebase/auth';
import Chat from '../Chat';
import Loader from 'react-loader-spinner'
import "../../css/style.css"


class Home extends Component {
  componentDidMount(){
    if(this.state.loading == false ){
      document.getElementById('docPdf').style.display = 'none'; 
    } 
  }
  
  componentDidUpdate() {
    if(this.state.loading == false ){
      document.getElementById('docPdf').style.display = 'none'; 
    }  
  }

  constructor(props){
    super(props);
    this.state = {loading : true}
  }
  getdata = async (data) => {
    return await data; 
  }
  getprops  = async (data) =>{
    if (await this.getdata(data)){
      this.setState({loading: false})
    }
  }

  render() {
  var { userInfo , userData} = this.props;
    if(this.state.loading == true){
      this.getprops(this.props.userData);
    } 
    else{
      var {isAuthenticated, userInfo, expData, expHis,updateExpHis , incData, incHis, updateIncHis, contacts, uploadDoc, doc, userData} = this.props;
      setTimeout(() => {
        if(this.props.isAuthenticated == false){
          window.location.replace("/");
        }
      }, 5000)
    }
    return (


      <div>
      {

      this.state.loading ? 
      
      <div className="completepage">
        <div className="mainpageloaderbox">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}

        />
        </div>
      </div>
      
      :    

      <div style={styleBox.main}>
      <div className="container-fluid">
        <div className="row " style={{marginBottom: 0}}>

          <div className="col hide-on-small-only m3 l2" style={{boxShadow:"2px 0px 0px 0px #ceeef2",height: "auto", margin: 0,padding: 0}}>
              <SideBar isAuthenticated={isAuthenticated} userInfo={userInfo}/>
          </div>
          <div className="col s12 m9 l10">
            
            <div className="container-fluid">
            
              <Header userData={userData} isAuthenticated={isAuthenticated} userInfo={userInfo}/>
              <div className="row">
                <div className="col s12 m12 l12">
                <DocPdf url=''/>
                <Switch>

                  <Route path="/home/"  exact ><Graphs userData={userData}/> </Route>
                  <Route path="/home/mygestor"  exact ><Gestor userData={userData} isAuthenticated={isAuthenticated} userInfo={userInfo} /> </Route>

                  <Route path="/home/expense" exact ><Expense contacts={contacts} isAuthenticated={isAuthenticated} userInfo={userInfo} expData={expData} /></Route>
                  <Route path="/home/expense/history" exact ><ExpenseHis isAuthenticated={isAuthenticated} userInfo={userInfo} expHis={expHis} updateExpHis={updateExpHis} /></Route>

                  <Route path="/home/income" exact ><Income contacts={contacts} isAuthenticated={isAuthenticated} userInfo={userInfo} incData={incData}/></Route>
                  <Route path="/home/income/history" exact ><IncomeHis isAuthenticated={isAuthenticated} userInfo={userInfo} incHis={incHis} updateIncHis={updateIncHis} /></Route>
                  <Route path="/home/clients" exact ><Contacts contacts={contacts}/></Route>
                  <Route path="/home/contacts/newContact" exact><NewContact userInfo={userInfo} /></Route>

                  <Route path="/home/subscription" exact><Subscription /></Route>
                  <Route path="/home/configure" exact ><Configuration /></Route>
                  <Route path="/home/doc" exact ><Documents userInfo={userInfo} uploadDoc={uploadDoc} doc={doc}/></Route>
                  <Route path="/home/faq" exact ><FAQ/> </Route>
                  <Route path="/home/security" exact ><Security/></Route>
                  <Route path="/home/help" exact ><Help /> </Route>
                  <Route path="/home/income/recipt/:id" exact ><Recipt userInfo={userInfo} userData={userData} incData={incData} heading='INCOME'/></Route>
                  <Route path="/home/expense/recipt/:id" exact><Recipt userInfo={userInfo} userData={userData} expData={expData} heading='EXPENSE'/></Route>
                  <Route path="/home/chat"  ><Chat uid={userInfo.uid} name={userInfo.displayName} /></Route>
                </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      }
      </div>
    );
  }
}


const styleBox = {
    main: {
        backgroundImage : `url(${bkground})`,
        width: "100%",
        zIndex: -1000,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        minHeight: 500,
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
      objectFit:"cover",
      border: "2px solid white",
      borderRadius: "100%",

    },
    name: {
      textAlign: "right",
      marginTop: 12,
    },
    profileDropDown :{
      minWidth: 200,
      fontSize: 10,
    }

}



const Header = (props) =>{
  var { userInfo, userData} = props;
  var elems = document.getElementById('signOutDropDown');
  M.Dropdown.init(elems, {hover: true, constrainWidth: false});    
  return (
    <div className="row" style={styleBox.header}>
      <div className="col s5 m7 l9"></div>
        <div className="col hide-on-small-only m3 l2" style={styleBox.name}>{userInfo.displayName}</div>
        <div  className="col s2 m2 l1">
        <a id="signOutDropDown" className='dropdown-trigger' href='#' data-target='signout'>
          <img style={styleBox.profile} className="imageRound" alt="" src={userData ? userData.profilepic : "//image.freepik.com/free-vector/people-profile-icon_24877-40756.jpg"} />
          </a>
        </div>
        <ul style={styleBox.profileDropDown} id='signout' className='dropdown-content'>
            <li><a href="#!" ><i className='material-icons'style={{color: 'darkgrey'}} >perm_identity</i> <Link style={{color: 'darkgrey'}} to='/home/mygestor'>PROFILE</Link></a></li>
            <li onClick={()=>SignOut()} ><a href="#!" style={{color: 'darkgrey'}}><i className='material-icons'>lock</i>LOG OUT</a></li>
          </ul>
    </div>
   )
}
export default Home;
