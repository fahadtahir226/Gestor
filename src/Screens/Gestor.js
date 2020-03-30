import React, { Component } from 'react';
import M from 'materialize-css'
import keyIcon from "../images/men-image.png"
import sbmtbtn from "../images/text-background.png"
import {profileUpload} from "../Firebase/storage"




class Gestor extends Component {
  constructor(props){
    super(props);
    this.state = {reupdate: null}
  }
  componentDidMount(){
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {onCloseEnd: this.updateDropDown});
    this.updateState();
  }
  updateDropDown(){
    document.getElementById('dropDown').innerHtml =  "";
  }
  updateState(){
    setTimeout(() => {
    this.setState({reupdate: 1})
    }, 2000)
  }

  // updateProfileData(data){
  //   setTimeout(() => {

  //     document.getElementById("fname").value = (data["fname"] ? data["fname"] : '');
  //     document.getElementById("lname").value = (data["lname"] ? data["lname"] : '');
  //     document.getElementById("nif").value = (data["nif"] ? data["nif"] : '');
  //     document.getElementById("pnumber").value = (data["pnumber"] ? data["pnumber"] : '');
  //     document.getElementById("email").value = (data["email"] ? data["email"] : '');  
  //   }, 1000)
  // }
  submitForm(event){
    event.preventDefault(); 
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let nif = document.getElementById("nif").value;
    let pnumber = document.getElementById("pnumber").value;
    let email = document.getElementById("email").value;
    let uid = this.props.userData.uid; 
    console.log({ uid, fname , lname, nif, pnumber, email});
    // updateProfile({ uid, fname , lname, nif, pnumber, email});
  }

  render() {
  var { userInfo , userData} = this.props;
  console.log(userData)
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <div className="row">
      <div className="col s12 m12 l12" style={styleBox.content}>
            <div style={styleBox.inputHeader}>
              <div style={{
                  height: "80px",
                  width: "80px",
                  backgroundImage: `url(${userData ? userData.profilepic : null})`, 
                  backgroundRepeat: "no-repeat", 
                  backgroundSize: "contain", 
                  backgroundPosition: "center",
                  margin: "auto",
                  borderRadius: "50%",
                  backgroundSize:"cover"
                }}></div></div>
            <br />
            <label htmlFor="profileBtn" >
            <a onClick={()=>document.getElementById("profileBtn").click()} href="#!" style={styleBox.submitbtn} className="btn waves-effect waves-light">UPLOAD PHOTO</a>
            </label>
            <input id="profileBtn" name={userInfo.uid} onChange={(event) => profileUpload(event, userInfo.uid)} className="hide" type="file" />
        </div>
      </div>
      <div className="row" style={styleBox.row}>
        <div className="col s12 m12 l6"  style={styleBox.card}>
          <div className="card" style={styleBox.DataBox}>
            <div style={styleBox.bluishHeading} >PERSONAL DATA</div>
            <div className="container-fluid" style={{margin: 25, marginBottom: 0}}>
              <div className="row">
                
                <div className="col s12 m12 l6" style={{ "height" : "2rem" }}>
                      <span>FIRST NAME: </span>
                  </div>
                    <div className="col s12 m12 l6">
                    <span className="textdata"> <input style={styleBox.inputBox} type="text" name="fname" id="fname" defaultValue={userData ? userData.fname : null} /> </span>
                    </div>
                </div>

                <div className="row">
                  <div className="col s12 m12 l6" >
                    <span>LAST NAME: </span>
                  </div>
                  <div className="col s12 m12 l6">
                    <span className="textdata"> <input style={styleBox.inputBox} type="text" name="lname"  id="lname" defaultValue={userData ? userData.lname : null} />  </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m12 l6">
                  <span>NIE/NIF: </span>
                  </div>
                  <div className="col s12 m12 l6">
                  <span className=" textdata"><input style={styleBox.inputBox} type="number" name="nif" id="nif" defaultValue={userData ? userData.nif : null} /></span>                  
                  </div>
                </div>
                
                <div className="row">
                  <div className="col s12 m12 l6">
                    <span>PHONE NUMBER: </span>
                  </div>
                  <div className="col s12 m12 l6" >
                    <span className=" textdata"><input style={styleBox.inputBox} type="number" name="pnumber" id="pnumber" defaultValue={userData ? userData.phonenumber : null} /></span>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col s12 m12 l6">
                    <span>EMAIL</span>
                  </div>
                  <div className="col s12 m12 l6">
                    <span className="textdata"><input style={styleBox.inputBox} type="email" name="email" id="email" defaultValue={userData ? userData.email : null} /></span>
                  </div>
                </div>
                <div className='row' style={{textAlign: 'center'}}>
                  <a href="#!" onClick={(e)=>this.submitForm(e)} style={styleBox.savebtn} className="btn-flat">Submit</a>
                </div>

            </div>  
          </div>
        </div>
        <div className="col s12 m12 l6"  style={styleBox.card}>
          <div className="card" style={styleBox.DataBox}>
            <div style={styleBox.bluishHeading} >PROFESSIONAL ACTIVITY</div>
            <div className="container-fluid" style={{margin: 25}}>

              <div className="row">
                <span>PROFESSION: </span>
                <div className="right" style={{minWidth: 200}}>
                  <a  style={styleBox.dropDown} className='dropdown-trigger' href='#!' id={'dropDown'} data-target='dropdown1'><span style={{visibility: 'hidden'}}>........................</span>{userData ? userData.profession : null}<span style={{visibility: 'hidden'}}>........................</span></a>
                  <ul id='dropdown1' className='dropdown-content'>
                    <li><a href="#!">DEVELOPER</a></li>
                    <li><a href="#!">MANAGER</a></li>
                    <li><a href="#!">DESIGNER</a></li>
                    <li><a href="#!">ARCHITECT</a></li>
                  </ul>
                {/* </>: null */}
              {/* } */}
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
    margin: 30,
    borderRadius: 10,
    minHeight: 500,
    padding: 40,
    paddingBottom: 0,
    color: "darkgrey",
    boxShadow:"0px 1px 2px 2px #ceeef2"
  },
  textdata: {
    fontWeight: "bold !important"
  },
    content: {
      padding: 20,
      paddingTop: 0,
      textAlign: "center",
      color: "grey"
    },
    inputHeader: {            
      height: "120px",          
      width: "120px",
      margin : "auto",
      padding : 20,
      backgroundImage: `url(${keyIcon})`, 
      backgroundRepeat: "no-repeat", 
      backgroundPosition: "center",
      backgroundSize:"cover"
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
        marginBottom: 10,
        fontSize: 14
    },
    DataBox: {
      padding: 20,
      borderRadius: 5,
      minHeight: 440 
    },
    dropDown : {
      color : 'darkgrey',
      borderBottom: "1px solid #9e9e9e",
      minWidth: 100,

    },
    row : {
      display: "table",
      width: "100%" 
    },
    card : {
      display: "tableCell",
      height: "100%"
    },
    savebtn: {
      background: "linear-gradient(90deg, rgba(15,213,245,1) 0%, rgba(115,0,255,0.7321564749385534) 100%)",
      borderRadius : "25px",
      width:130,
      fontWeight:"bold",
      color: "white",
      margin: 10,
    },    
    inputBox:{ 
      "height" : "2rem",
      "margin" : 0 
    }

  }
export default Gestor;
