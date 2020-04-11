import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import bkground from "../../images/maskgroup.png";
import signInPoster from "../../images/drawable/Component5-1.png";
import {NewPassword} from "../../Firebase/auth"
import { getCookie } from '../../cookies';

class NewPass extends Component {
    componentDidMount(){
      console.log("Params here: ",this.props.location.search);
        console.log(this.props.location.search.split('=')[2].split('&')[0]);
    }
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

    let { oobCode } = this.props.location.search.split('=')[2].split('&')[0];
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
                <h5 style={{textAlign: "left", marginTop: 40}}>Reset Password </h5>
                <div style={{ textAlign: "left", height: 45, background: '#F2F0EC', maxWidth: 340, border: "0px solid ", borderRadius: 10, marginTop: 20, }}>
                    <label style={{ display: 'inline-block'  }} className="label-icon" htmlFor="newPass">
                        <i className="material-icons" 
                        style={styleBox.inputIcons}>lock</i>
                        </label>
                    <input id='newPass' placeholder='New Password' style={styleBox.inputs} type="Password" />
                </div>
                <div style={{ textAlign: "left", height: 45, background: '#F2F0EC', maxWidth: 340, border: "0px solid ", borderRadius: 10, marginTop: 20, }}>
                    <label style={{ display: 'inline-block'  }} className="label-icon" htmlFor="confirmPass">
                        <i className="material-icons" 
                        style={styleBox.inputIcons}>lock</i>
                        </label>
                    <input id='confirmPass' placeholder='Confirm Password' style={styleBox.inputs} type="Password" />
                </div>
                <a href="#!" className="waves-effect waves-light blue darken-1 btn-small" onClick={()=>{NewPassword(oobCode)}} style={styleBox.loginBtn}>Sign In</a>
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

export default NewPass;
