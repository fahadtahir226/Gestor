 
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import bkground from "../../images/maskgroup.png";
import signInPoster from "../../images/drawable/Component5-1.png";
import fb from "../../images/facebook.png";
import gplus from "../../images/google-plus.png";
import twitr from "../../images/twitter.png";
import { SignInCall } from "../../Firebase/auth";
import { facebookLogin }from '../../Firebase/facebookAuth'
import { googleLogin } from '../../Firebase/google'
import { getCookie } from '../../cookies';

class SpanishSignIn extends Component {
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
              <div className="col s12 m7 "><img style={styleBox.posterImg} src={signInPoster} alt="" /></div>
              <div className="col s12 m5 ">
                <h5 style={{textAlign: "left", paddingLeft : "35px"}}>Inicia sesión </h5>
                <div style={{ textAlign: "left", height: 45, background: '#F2F0EC', maxWidth: 340, border: "0px solid ", borderRadius: 10 }}>
                    <label style={{ display: 'inline-block'  }} className="label-icon" htmlFor="login-email">
                        <i className="material-icons" 
                        style={styleBox.inputIcons}>email</i>
                        </label>
                    <input id='login-email' placeholder='Correo electrónico' style={styleBox.inputs} type="email" />
                </div>
                <div style={{ textAlign: "left", marginTop: 10,height: 45, background: '#F2F0EC', maxWidth: 340, border: "0px solid ", borderRadius: 10 }}>
                    <label style={{ display: 'inline-block'  }} className="label-icon" htmlFor="login-pass">
                        <i className="material-icons" 
                        style={styleBox.inputIcons}>lock</i>
                    </label>
                    <input id='login-pass' placeholder='Contraseña' style={styleBox.inputs} type="Password" />
                </div>
                <a href="#!" class="waves-effect waves-light blue darken-1 btn-small" onClick={()=>{SignInCall()}} style={styleBox.loginBtn}>Inicia sesión </a>
                <p style={styleBox.contnt}><Link to='/resetpasword'>¿Olvidaste tu contraseña?</Link></p>
                <p style={{color: "grey", marginTop: 10,width:"100%", textAlign:"center", borderBottom: "1px solid lightgrey", lineHeight:"0.1em", margin:"10px 0 20px"}}> <span style={{ background:"#fff", padding:"0 10px" }}>O</span></p>
                <div>
                    <img onClick={(event)=>facebookLogin(event)} style={styleBox.socialIcons} src={fb} alt="" />
                    <img onClick={(event) =>googleLogin(event) } style={styleBox.socialIcons} src={gplus} alt="" />
                    <img style={styleBox.socialIcons} src={twitr} alt="" />
                </div>
                <p style={{color: "grey", marginTop: 10}}>¿No eres miembro?<Link to="/es/signup" ><b>Regístrate aquí</b></Link></p>
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
    marginTop: 10
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

export default SpanishSignIn;
