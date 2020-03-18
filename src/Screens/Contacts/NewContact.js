import React, { Component } from 'react';

import savBtn from "../../images/Rectangle 267@2x.png"

class NewContact extends Component {
  handleClick(){
    
  }
render() {
    // var {isAuthenticated, userInfo} = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <div className='row'>
      <h5 className="col s10 m7 l10 " style={styleBox.mainHeading}>NEW CONTACT</h5>

      <a onClick={()=>this.handleClick()} href="#!" style={styleBox.savebtn} 
         className="btn waves-effect waves-light col hide-on-small-only m3 l1" id="saveBtn">
        <span className="hide-on-small-only">SAVE</span>
      </a>

      <a onClick={()=>this.handleClick()} href="#!" style={styleBox.saveBtnResponsive} 
         className="btn waves-effect waves-light col s1 hide-on-med-and-up" id="saveBtn">
        <i className="material-icons show-on-small-only">save</i>
      </a>
      </div>


        {forms.map((form,key)=>
          <div className="row" key={key} style={styleBox.inputRow}>
            <div className="col s6 m5 l7" style={styleBox.content}>
              <label style={styleBox.labelName} htmlFor='clientName'>{form.val}<span className="hide-on-small-only">{form.val2}</span></label>
            </div>
            <div className='col s6 m7 l5'>
              <input id={form.id} style={styleBox.inputs} type="text" />
            </div>
          </div>
        )

        }
    </div>
    );
  }
}



const styleBox = {
    main: {
      margin: 30,
      borderRadius: 10,
      minHeight: 500,
      padding: 30,
      color: "#1e88e5",
      boxShadow:"0px 1px 2px 2px #ceeef2"
    },
    mainHeading: {
      marginBottom: 0
    },
    content: {
      padding: 10,
      color: "grey"
    },
    inputRow: {
        marginBottom: 0,
        padding: 5,
        height: 50,
    },
    inputs: {
        outline: 'none',
        borderBottom: '0px',
        borderRadius: 5,
        boxShadow: 'none',
        background: '#F2F0EC',
        paddingLeft: 15,
        maxWidth: 250,
        height: 30,
        float: "right"
    },
    labelName: {
        fontSize: 14,
        color: "#1e88e5",
    },
    savebtn: {
        background: `url(${savBtn})`,
        backgroundSize: "contain",
        border: "none",
        backgroundRepeat:"no-repeat",
        width:130,
        fontWeight:"bold",
        boxShadow: "none",
        color: "white",
    },
    saveBtnResponsive: {
        background: `url(${savBtn})`,
        backgroundSize: "cover",
        border: "none",
        backgroundRepeat:"no-repeat",
        width:36,
        height: 36,
        // zIndex:1000,
        borderRadius: "100%",
        fontWeight:"bold",
        boxShadow: "none",
        color: "white",
    }

  }
  let forms = [
    {val:"NAME",    val2: " OF CLIENT", id: "nameInput"},
    {val:"NIF",     val2: "",           id: "nifInput"},
    {val:"ADDRESS", val2: "",           id: "addrInput"},
    {val:"POSTAL",  val2: " CODE",      id: "postalCodeInput"},
    {val:"CITY",    val2: "",           id: "cityInput"},
    {val:"PROVINCE",val2: "",           id: "provInput"},
    {val:"COUNTRY", val2: "",           id: "countryInput"},
    {val:"EMAIL",   val2: "",           id: "mailInput"},
    {val:"SAVE",    val2: " AS",        id: "saveAsInput"},
  ]
export default NewContact;
