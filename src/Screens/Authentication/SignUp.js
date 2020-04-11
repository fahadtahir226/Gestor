import React, { Component } from 'react';
import {Link} from "react-router-dom";

import bkground from "../../images/maskgroup.png";
import signInPoster from "../../images/drawable/Group762.png";
import fb from "../../images/facebook.png";
import gplus from "../../images/google-plus.png";
import twitr from "../../images/twitter.png";

import {SignUpCall} from "../../Firebase/auth";
import { facebookLogin }from '../../Firebase/facebookAuth'
import { googleLogin } from '../../Firebase/google'
import { getCookie } from '../../cookies';

class SignUp extends Component {
  render() {
    var {isAuthenticated, userInfo} = this.props;
    setTimeout(() => {
        if(this.props.isAuthenticated == true){

            if(getCookie("language") == "spanish"){
                window.location.replace('/es/home')
            }
            else{
                window.location.replace('/home')
            }

        }
    }, 2000)
    return (
    <div style={styleBox.main}>
    <center>
      <div className='card signIn container' style={styleBox.poster}>
        <div className="card-content row">
          <div className="col s12 m12 l12">
            <div className="container-fluid">
              <div className="row">
              <div className="col s12 m6 "><img style={styleBox.posterImg} src={signInPoster} alt="" /></div>
              <div className="col s12 m6 ">
                <h5 style={{textAlign: "left"}}>Signup </h5>
                <div className="Container">
                <div className="row">
                {/* First Name */}
                <div className=" col s12 m12 l6" style={{paddingLeft: "0.0rem !important" }}>
                <div style={styleBox.inputNamContainerf}>
                    <label style={{ display: 'inline-block' }} className="label-icon" htmlFor="reg-fname">
                        <i className="material-icons" 
                        style={styleBox.inputIcons}>person</i>
                        </label>
                    <input id='reg-fname' placeholder='First Name' style={styleBox.inputsNam} type="email" />
                </div>
                </div>
                {/* Last Name */}
                <div className=" col s12 m12 l6" style={{padding: "0px !important" }}>
                <div style={styleBox.inputNamContainerl}>
                    <label style={{ display: 'inline-block'}} className="label-icon" htmlFor="reg-lname">
                        <i className="material-icons" 
                        style={styleBox.inputIcons}>person</i>
                        </label>
                    <input id='reg-lname' placeholder='Last Name' style={styleBox.inputsNam} type="email" />
                </div>
                </div>
                 {/* EMAIL */}
                <div className="col s12 m12 l12" style={{ width: "98%", marginLeft: 7, textAlign: "left", height: 45, background: '#F2F0EC', border: "0px solid ", borderRadius: 10 }}>
                    <label style={{ display: 'inline-block'  }} className="label-icon" htmlFor="reg-email">
                        <i className="material-icons" 
                        style={styleBox.inputIcons}>email</i>
                        </label>
                    <input id='reg-email' placeholder='Email' style={styleBox.inputs} type="email" />
                </div>
                {/* Password */}
                <div className="col s12 m12 l12" style={{width: "98%", marginLeft: 7, marginRight: 5, textAlign: "left", marginTop: 10,height: 45, background: '#F2F0EC', border: "0px solid ", borderRadius: 10 }}>
                    <label style={{ display: 'inline-block'  }} className="label-icon" htmlFor="reg-password">
                        <i className="material-icons" 
                        style={styleBox.inputIcons}>lock</i>
                        </label>
                    <input id='reg-password' placeholder='Password' style={styleBox.inputs} type="Password" />
                </div>

                <a href="#!" class="col s12 m12 l12 waves-effect waves-light blue darken-1 btn-small" onClick={()=>SignUpCall()} style={styleBox.loginBtn}>Sign Up</a>
                </div>
                <p  style={styleBox.contnt}><Link to='/resetpasword'>Forget Password ?</Link></p>
                </div>
                <p style={{color: "grey", marginTop: 10,width:"100%", textAlign:"center", borderBottom: "1px solid lightgrey", lineHeight:"0.1em", margin:"10px 0 20px"}}> <span style={{ background:"#fff", padding:"0 10px" }}>OR</span></p>
                <div>
                    <img onClick={(event)=>facebookLogin(event)} style={styleBox.socialIcons} src={fb} alt="" />
                    <img onClick={(event) =>googleLogin(event) } style={styleBox.socialIcons} src={gplus} alt="" />
                    <img style={styleBox.socialIcons} src={twitr} alt="" />
                </div>
                <p style={{color: "grey", marginTop: 10}}>Not member yet? <Link to="/"><b>Login here</b></Link> </p>
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
    inputNamContainerf: { 
        display: "inline-block",
        textAlign: "left", 
        height: 45, 
        background: '#F2F0EC',
        border: "0px solid ", 
        borderRadius: 10,
        marginBottom: 10,
        width: "102%"
    },
    inputNamContainerl: { 
        display: "inline-block",
        textAlign: "left", 
        height: 45, 
        background: '#F2F0EC',
        border: "0px solid ", 
        borderRadius: 10,
        marginBottom: 10,
        width: "102%"
    },
    inputsNam: {
        backgroundColor: "transparent",
        fontSize: "13px", 
        outline: 'none',
        borderBottom: '0px',
        boxShadow: 'none',
        display: 'inline',
        maxWidth: 90,
    },
    inputs: {
        backgroundColor: "transparent",
        fontSize: "13px", 
        outline: 'none',
        borderBottom: '0px',
        boxShadow: 'none',
        // marginLeft: 5,
        display: 'inline',
        maxWidth: 120 , 
        // padding: 3,
    },
    inputIcons: {  
        marginLeft: 5,
        padding: 5,
        backgroundColor: "#F2F0EC",
        verticalAlign: "middle" ,
        height: "10 !important"
    },
    loginBtn: {
        marginTop: 10,
        marginLeft: 7,
        width: "98%"
    },
    socialIcons: {
        width: 30,
        height: 30,
        margin: 10,
        borderRadius: "100%",

    },
    contnt: {
        color: "grey",
        marginTop: 10
    }
}

export default SignUp;
