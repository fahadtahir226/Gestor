import React, { Component } from 'react';

import keyIcon from "../images/drawable/profileBackground.png"
import sbmtbtn from "../images/Rectangle 267@2x.png"

class Security extends Component {
handleClick(){
    let newPass = document.getElementById("newChangePass").Value, 
        conPass = document.getElementById("conChangePass").value;
    if(newPass === conPass){
        this.props.userInfo.updatePassword(newPass).then(function() {
            // Update successful.
            console.log("Sucessfully Changed Password !")
            window.location.replace('/');
          }).catch(function(error) {
            // An error happened.
            console(error);
          });
    }
}
render() {
    // var {isAuthenticated, userInfo} = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h5 className="col s12 m12 l12 " style={styleBox.mainHeading}>CHANGE PASSWORD</h5>
      <div className="row">
        <div className="col s12 m12 l12" style={styleBox.content}>
            <img alt="" src={keyIcon} />
            <p>Reset Passowrd</p>
            <p>Enter Your New Password</p>

              <input id='newChangePass' placeholder='New Password' style={styleBox.inputs} type="password" />
              <br />
              <input id='conChangePass' placeholder='Confirm Passoword' style={styleBox.inputs} type="password" />
              <br />
              <a onClick={()=>this.handleClick()} href="#!" style={styleBox.submitbtn} className="btn waves-effect waves-light">SAVE</a>
  
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
      padding: 10,
      color: "#1e88e5",
      boxShadow:"0px 1px 2px 2px #ceeef2"
    },
    mainHeading: {
      marginBottom: 0
    },
    content: {
      padding: 10,
      textAlign: "center",
      color: "grey"
    },
    inputs: {
        outline: 'none',
        borderBottom: '0px',
        boxShadow: 'none',
        background: '#F2F0EC',
        paddingLeft: 15,
        maxWidth: 220    
    },
    submitbtn: {
        background: `url(${sbmtbtn})`,
        backgroundSize: "contain",
        border: "none",
        backgroundRepeat:"no-repeat",
        // padding: 15,
        width:130,
        fontWeight:"bold",
        boxShadow: "none",

        color: "white"

    }

  }
export default Security;
