import React from 'react';
import M from 'materialize-css';
import { HideCard } from './configureCards';
import { db } from '../../Firebase/firestore';
import { storageRef } from '../../Firebase/storage';

import sbmtbtn from "../../images/text-background.png"
import '../../index.css'

class AddExpense extends React.Component {
  constructor(props){
    super(props);  
    this.state = {reupdate: 0}
  }

  componentDidMount(){
    var modal = document.querySelectorAll('.modal'),
        dropdown = document.querySelectorAll('.dropdown-trigger'),
        picker = document.querySelectorAll('.datepicker');
    this.instance = M.Modal.init(modal);
    M.Datepicker.init(picker, {maxDate: new Date(), format: 'dd dddd mmmm yyyy'});
    M.Dropdown.init(dropdown);

  }

    render(){
      var ins = this.instance;
      var {userInfo, clients} = this.props;
      // var {clients} = this.props ? this.props : [];

      // console.log(clientArray);
  return(
    <div id="addExpense" style={styleBox.main} className='modal z-depth-5' >
      <div className="modal-content" style={styleBox.content}>
        <div className="row" style={styleBox.bluishHeading} >
          ADD EXPENSE
        </div>
        <div className="row">
          <form className="col s12 m6 l6">
            {
                items1.map((item, key) => {
                    return <InputItem title={item.title} id={item.id} type={item.type}  key={key} />
                })
            }
            <div className="row" style={{marginBottom: 0}}>
              <div className="input-field col s12" style={{marginBottom: 0, paddingLeft: 10.5, paddingRight: 10.5}}>
                <label htmlFor='datePickerExp' >DATE</label>
                <input type="text" id='datePickerExp' className="datepicker" required />
              </div>
            </div>
            <Select clients={clients} />
          </form>
          <form className="col s12 m6 l6">
            {
                items2.map((item, key) => {
                    return <InputItem title={item.title} id={item.id} typeName={item.typeName} type={item.type}  key={key} />
                })
            }

            <div className="file-field input-field">
              <div className="btn">
                <span>UPLOAD</span>
                <input id='docAddrExp' type="file"  required />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text"  required />
              </div>
            </div>
  
          </form>
        </div>
        <a href="#!" onClick={()=>addNewExpense(userInfo)} style={styleBox.savebtn}  className="btn-flat">Add</a>
        <a href="#!" onClick={()=>HideCard(ins, 'addExpense')} datatarget='model-close' style={styleBox.savebtn} className="btn-flat">Cancel</a>
      </div>
    </div>
    );
    }
}


const InputItem = (props) => {
    return (
      <div className="row" style={{marginBottom: 0}}>
        <div className="input-field col s12" style={{marginBottom: 0}}>
          <input id={ props.id }  type={ props.type ? props.type : "text" }  required className="validate" />
          <label htmlFor={ props.id }>{props.title}</label>
        </div>
      </div>
    )
}
const Select = (props) => {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
    var clients = props.clients ? props.clients: [];
    console.log(clients);
  return (
    <div className="row" style={{marginBottom: 0}}>
      <div className="col s12 validate selectborder" style={{marginBottom: 0, paddingLeft: 10.5, paddingRight: 10.5}}>
        <select id='clientExp'  required> 
        <option value="">CLIENTS</option>  
        {clients.map((client, key)=> 
          <option key={key} value={client.nif  + '/' + client.name}>{client.name}</option>  
        )}
        </select>
      </div>
  </div>
  )
}
const addNewExpense = (userInfo) => {
    if(document.getElementById('clientExp').value == ""){
      M.toast({html: "Client Name is Required"})
      return;
    }
    let client = document.getElementById('clientExp').value.split('/')[1],
        concept = document.getElementById('conceptExp').value,
        date = document.getElementById('datePickerExp').value.split(' '),
        docAddr = document.getElementById('docAddrExp').files[0],
        note = document.getElementById('noteExp').value,
        iva = parseInt(document.getElementById('ivaExp').value),
        amount = parseInt(document.getElementById('amountExp').value),
        irpf = parseInt(document.getElementById('irpfExp').value),
        retentions = parseInt(document.getElementById('retentionExp').value),
        nif = document.getElementById('clientExp').value.split('/')[0],
        taxable = amount + iva + irpf - retentions,

        monthInNum = calculateMonth(date[2].toUpperCase());
        
        if(!client || !concept || !date || !note || !amount || !docAddr || !iva || !irpf || !retentions ){
          M.toast({html: 'Every Field is Mandatory!'})
          return ;
        }


        let refDoc = storageRef.child(`income-expense/${docAddr.name}`)
        refDoc.put(docAddr).then(function(snapshot) {
          console.log('Exprense Your Document!', snapshot);
  
          refDoc.getDownloadURL()
          .then(function(url) {
              docAddr = url;
              db.collection("Users").doc(userInfo.uid).collection('expense').doc().set({
                client: client,
                concept : concept,
                nif : nif,
                date : date[0],
                day : date[1].toUpperCase(),
                month : date[2].toUpperCase(),
                year :  parseInt(date[3]),
                docAddr: docAddr,
                amount: amount,
                taxable : taxable,
                iva: iva,
                irpf: irpf,
                retentions: retentions, 
                note: note,
                status : "PENDING"
            })
            db.collection('Users').doc(userInfo.uid).get()
            .then(userData => { 
              let data = userData.data();
              data.inc[monthInNum] += taxable;
              data.irpfExp[monthInNum] += irpf;
              data.ivaExp[monthInNum] += iva;
              data.retExp[monthInNum] += retentions;
              db.collection('Users').doc(userInfo.uid).set(data)
              .then(()=> window.location.replace('expense'))

              .catch((error) => console.error("Error writing document: ", error))
              })
            })
  })
}
const calculateMonth = mon => {
  switch (mon) {
    case "JANUARY":
      return 0;
    case "FEBRUARY":
      return 1;
    case "MARCH":
      return 2;
    case "APRIL":
      return 3;
    case "MAY":
      return 4;
    case "JUNE":
      return 5;
    case "JULY":
      return 6;
    case "AUGUST":
      return 7;
    case "SEPTEMBER":
      return 8;
    case "OCTUBER":
      return 9;
    case "NOVEMBER":
      return 10
    default:
      return 11
  }
}

const items1 = [
    { title: 'CONCEPT', id: 'conceptExp',type: 'text' },
    { title: 'IRPF', id: 'irpfExp',type: 'number' },
  ],     
  items2 = [
    { title: 'RETENTIONS', id: 'retentionExp',type: 'number' },
    { title: 'IVA', id: 'ivaExp',type: 'number' },
    { title: 'AMOUNT', id: 'amountExp'  ,type: 'number' },
    { title: 'NOTE', id: 'noteExp'  ,type: 'text' },
  ]

const styleBox = {
    main: {
      padding: 20,
      position: "absolute",
      display: "block",
      zIndex: 1000,
      background: 'white',
      color: "#1e88e5", 
    },
    content: {
      paddingBottom: 0,
      overflow: 'visible'
    },
    savebtn: {
      background: "linear-gradient(90deg, rgba(15,213,245,1) 0%, rgba(115,0,255,0.7321564749385534) 100%)",
      borderRadius : "25px",
      width:130,
      fontWeight:"bold",
      color: "white",
      margin: 10,
    },
    bluishHeading: {
      width: "100%",
      color: "white",
      padding: 7,
      paddingLeft: 15,
      background: `url(${sbmtbtn}) no-repeat center/cover`,
      height: 35,
      display: "block",
      marginLeft: -25,
      marginBottom: 10,
      textAlign: 'center',
      fontWeight: 'bolder',
      float: "left"

  },
}





export default AddExpense;