import React, { Component } from 'react';

import keyIcon from "../images/drawable/profileBackground.png"
import sbmtbtn from "../images/text-background.png"
import {profileUpload} from "../Firebase/storage"

class Gestor extends Component {
  render() {
    var {isAuthenticated ,userInfo} = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <div className="row">
        <div className="col s12 m12 l12" style={styleBox.content}>
            <div style={{height: 120,backgroundImage: `url(${keyIcon})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"}}>
              {/* <img alt="" style={{width: 120}} src={keyIcon} /> */}
            <img alt="" style={{width:  80, borderRadius: "100%", marginTop: 20}} src={userInfo.photoURL} />
            </div>
            <br />
            <label htmlFor="profileBtn" >
            <a onClick={()=>document.getElementById("profileBtn").click()} href="#!" style={styleBox.submitbtn} className="btn waves-effect waves-light">UPLOAD PHOTO</a>
            </label>
            <input id="profileBtn" name={userInfo.uid} onChange={(event) => profileUpload(event)} className="hide" type="file" />
        </div>
      </div>
      <div className="row">
        <div className="col s12 m12 l6" >
          <div className="card" style={styleBox.DataBox}>
            <div style={styleBox.bluishHeading} >PERSONAL DATA</div>
            <div className="container" style={{marginLeft: 25}}>
              <div className="row"><span>FIRST NAME: </span><span className="right">{isAuthenticated? userInfo.displayName.split(" ")[0]: null}</span></div>
              <div className="row"><span>LAST NAME: </span><span className="right"> {isAuthenticated? userInfo.displayName.split(" ")[1]: null} </span></div>
              <div className="row"><span>NIE/NIF: </span><span className="right">____________</span></div>
              <div className="row"><span>PHONE NUMBER: </span><span className="right">____________</span></div>
              <div className="row"><span>EMAIL</span><span className="right">____________</span></div>
            </div>  
          </div>
        </div>
        <div className="col s12 m12 l6" >
          <div className="card" style={styleBox.DataBox}>
            <div style={styleBox.bluishHeading} >PROFESSIONAL ACTIVITY</div>
            <div className="container" style={{marginLeft: 25}}>
              <div className="row"><span>ACTIVITY CODE(CNAE): </span><span className="right">____________</span></div>
              <div className="row"><span>DESCRIBE YOUR ACTIVITY: </span><span className="right"> ____________ </span></div>
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
      margin: 30,
      borderRadius: 10,
      minHeight: 500,
      padding: 40,
      paddingBottom: 0,
      color: "darkgrey",
      boxShadow:"0px 1px 2px 2px #ceeef2"
    },
    content: {
      padding: 20,
      paddingTop: 0,
      textAlign: "center",
      color: "grey"
    },
    submitbtn: {
      width:130,
      color: "darkgrey",
      background: "#F2F0EC",
      fontWeight:"bold",
      boxShadow: "none",
      borderRadius: "100px"
  },
    inputs: {
        outline: 'none',
        borderBottom: '0px',
        boxShadow: 'none',
        background: '#F2F0EC',
        paddingLeft: 15,
        maxWidth: 220    
    },
    bluishHeading: {
        color: "white",
        padding: 7,
        paddingLeft: 15,
        background: `url(${sbmtbtn}) no-repeat center/cover`,
        width: 270,
        height: 35,
        display: "inline-block",
        marginLeft: -20,
        marginBottom: 10
    },
    DataBox:{
      padding: 20,
      borderRadius: 5,
      minHeight: 295 
    }
  }
export default Gestor;
