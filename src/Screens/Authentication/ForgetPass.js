import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import bkground from "../../images/maskgroup.png";
import signInPoster from "../../images/drawable/Component5-1.png";
import {PassReset} from "../../Firebase/auth"


class ForgetPassWord extends Component {
  
  render() {
    var {isAuthenticated, userInfo} = this.props;
    setTimeout(() => {
      if(this.props.isAuthenticated == true){
        window.location.replace("/home");
      }
    }, 2000)
    return (
    <div style={styleBox.main}>
    <center>
      <div className='card signIn container' style={styleBox.poster}>
        <div className="card-content row">
          <div className="col s12 m12 l12">
            <div className="container-fluid">
              <div className="row" style={{margin: 40}}>
              <div className="col s12 m7 "><img style={styleBox.posterImg} src={signInPoster} alt="" /></div>
              <div className="col s12 m5 ">
                <h5 style={{textAlign: "left", marginTop: 40}}>Forget Password </h5>
                <div style={{ textAlign: "left", height: 45, background: '#F2F0EC', maxWidth: 340, border: "0px solid ", borderRadius: 10, marginTop: 20, }}>
                    <label style={{ display: 'inline-block'  }} className="label-icon" htmlFor="reset-email">
                        <i className="material-icons" 
                        style={styleBox.inputIcons}>email</i>
                        </label>
                    <input id='reset-email' placeholder='Email' style={styleBox.inputs} type="email" />
                </div>
                <a href="#!" className="waves-effect waves-light blue darken-1 btn-small" onClick={()=>{PassReset()}} style={styleBox.loginBtn}>Send Now</a>
                <p style={{color: "grey", marginTop: 10}}><Link to="/" ><b>{"< "} Back To Login </b></Link></p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </center>
      </div>
    );
  }

}
const styleBox = {
    main: {
        backgroundImage : `url(${bkground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", 
        paddingTop: 130,
    },
    poster: {
        backgroundColor: "white",
        // height: 450,
        borderRadius: 5,
    },
    posterImg: {
        paddingTop: 70
    },
    inputs: {
        backgroundColor: "transparent",
        fontSize: "13px", 
        outline: 'none',
        borderBottom: '0px',
        boxShadow: 'none',
        marginLeft: 5,
        display: 'inline',
        maxWidth: 120 
    },
    inputIcons: {  
        marginLeft: 5,
        padding: 5,
        backgroundColor: "#F2F0EC",
        verticalAlign: "middle" ,
        height: "10 !important"
    },
    loginBtn: {
        width: "100%",
        maxWidth: 340,
        marginTop: 20
    },
    contnt: {
        color: "grey",
        marginTop: 10
    }
}

export default ForgetPassWord;
