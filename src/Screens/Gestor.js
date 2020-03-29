import React, { Component } from 'react';
import M from 'materialize-css'
import keyIcon from "../images/men-image.png"
import sbmtbtn from "../images/text-background.png"
import {profileUpload} from "../Firebase/storage"



class Gestor extends Component {
  componentDidMount(){
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  }

  render() {
    var { userInfo } = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <div className="row">
      <div className="col s12 m12 l12" style={styleBox.content}>
            <div style={styleBox.inputHeader}>
              <div style={{
                  height: "80px",
                  width: "80px",
                  backgroundImage: `url(${userInfo.photoURL})`, 
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
                
                <div className="col s12 m12 l6">
                      <span>FIRST NAME: </span>
                  </div>
                    <div className="col s12 m12 l6">
                    <span className="textdata"> <input style={{ "height" : "1rem" }} type="text" name="fname" id="fname" /> </span>
                    </div>
                </div>

                <div className="row">
                  <div className="col s12 m12 l6">
                    <span>LAST NAME: </span>
                  </div>
                  <div className="col s12 m12 l6">
                    <span className="textdata"> <input style={{ "height" : "1rem" }} type="text" name="lname"  id="lname" />  </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m12 l6">
                  <span>NIE/NIF: </span>
                  </div>
                  <div className="col s12 m12 l6">
                  <span className=" textdata"><input style={{ "height" : "1rem" }} type="number" name="nif" id="nif" /></span>                  
                  </div>
                </div>
                
                <div className="row">
                  <div className="col s12 m12 l6">
                    <span>PHONE NUMBER: </span>
                  </div>
                  <div className="col s12 m12 l6" >
                    <span className=" textdata"><input style={{ "height" : "1rem" }} type="text" name="pnumber" id="pnumber" /></span>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col s12 m12 l6">
                    <span>EMAIL</span>
                  </div>
                  <div className="col s12 m12 l6">
                    <span className="textdata"><input style={{ "height" : "1rem" }} type="email" name="email" id="email" /></span>
                  </div>
                </div>
                <div className='row' style={{textAlign: 'center'}}>
                  <a href="#!" onClick={()=>console.log("implement me Please")} style={styleBox.savebtn} className="btn-flat">Submit</a>
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
                <div className="right">
                  <a  style={styleBox.dropDown} className='dropdown-trigger' href='#!' data-target='dropdown1'><span style={{visibility: 'hidden'}}>......</span>DESIGNER<span style={{visibility: 'hidden'}}>......</span></a>
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
        // fontWeight: "bold"
    },
    DataBox: {
      padding: 20,
      borderRadius: 5,
      minHeight: 420 
    },
    dropDown : {
      color : 'darkgrey'
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
  }
export default Gestor;
