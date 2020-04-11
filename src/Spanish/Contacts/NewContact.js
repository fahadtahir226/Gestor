import React, { Component } from 'react';
import M from 'materialize-css';
import {db} from '../../Firebase/firestore'
import { getCookie } from '../../cookies';

class NewContact extends Component {

  addContact = (user) => {
      let contact ={};
      contact.address = document.getElementById('addrContact').value;
      contact.name = document.getElementById("nameContact").value;
      contact.nif = document.getElementById("nifContact").value;
      contact.pcode = document.getElementById('postalCodeContact').value;
      contact.city = document.getElementById('cityContact').value;
      contact.province = document.getElementById('provContact').value;
      contact.country = document.getElementById('countryContact').value;
      contact.email = document.getElementById('mailContact').value;
      contact.saveAs = document.getElementById('saveAsContact').value;

    if(!contact.address || !contact.name || !contact.nif   || !contact.pcode || 
          !contact.city || !contact.province  ||!contact.country|| !contact.email){
            M.toast({html: "Please Fill All required Fields!"})
            return;
          }


      db.collection("Users").doc(user).collection("contacts").add(contact)
      .then(res =>{
        if(getCookie("language") == "spanish"){
            window.location.replace('/es/home/clients')
        }
        else{
            window.location.replace('/home/clients')
        }
      })
      .catch(err => console.log(err))
        // M.toast({html: err.message}))
     
  }
render() {
    var {userInfo} = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <div className='row'>
      <h5 className="col s10 m7 l10 " style={styleBox.mainHeading}>NUEVO CONTACTO</h5>

      <a onClick={() => this.addContact(userInfo.uid)} href="#!" style={styleBox.savebtn} 
         className="btn waves-effect  col hide-on-small-only m3 l1" id="saveBtn">
        <span className="hide-on-small-only">SAVE</span>
      </a>

      <a onClick={() => this.addContact(userInfo.uid)} href="#!" style={styleBox.saveBtnResponsive} 
         className="btn waves-effect waves-light col s1 hide-on-med-and-up" id="saveBtnIcon">
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
      background: "linear-gradient(90deg, rgba(15,213,245,1) 0%, rgba(115,0,255,0.7321564749385534) 100%)",
      borderRadius : "25px",
      width:130,
      fontWeight:"bold",
      color: "white",
      margin: 10,
    },
    saveBtnResponsive: {
        background: "linear-gradient(90deg, rgba(15,213,245,1) 0%, rgba(115,0,255,0.7321564749385534) 100%)",
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
    {val:"El nombre",    val2: " OF CLIENT", id: "nameContact"},
    {val:"NIF",     val2: "",           id: "nifContact"},
    {val:"la dirección", val2: "",           id: "addrContact"},
    {val:"POSTAL",  val2: " CODE",      id: "postalCodeContact"},
    {val:"la ciudad",    val2: "",           id: "cityContact"},
    {val:"la provincia",val2: "",           id: "provContact"},
    {val:"el país", val2: "",           id: "countryContact"},
    {val:"el e-mail",   val2: "",           id: "mailContact"},
    {val:"presentar",    val2: " AS",        id: "saveAsContact"},
  ]
export default NewContact;
