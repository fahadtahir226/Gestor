import React from 'react';
import M from 'materialize-css';
import { HideCard } from './configureCards';
import { db } from '../../Firebase/firestore';
import { storageRef } from '../../Firebase/storage';
import savBtn from "../../images/Rectangle 267@2x.png"
import sbmtbtn from "../../images/text-background.png"
import '../../index.css'

class AddExpense extends React.Component {
    componentDidMount(){
      var modal = document.querySelectorAll('.modal'),
      picker = document.querySelectorAll('.datepicker');

      this.instance = M.Modal.init(modal);
      M.Datepicker.init(picker, {maxDate: new Date(), format: 'dd dddd mmmm yyyy'});
    }
    render(){
      var ins = this.instance;
      var {userInfo} = this.props;
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
            <div className="input-field col s12" style={{marginBottom: 0, padding: 0}}>
              <label htmlFor='datePickerExp' >DATE</label>
              <input type="text" id='datePickerExp' className="datepicker" />
            </div>
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
                <input id='docAddrExp' type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
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
          <input id={ props.id }  type={ props.type ? props.type : "text" } className="validate" />
          <label htmlFor={ props.id }>{props.title}</label>
        </div>
      </div>
    )
}

const addNewExpense = (userInfo) => {

    let client = document.getElementById('clientExp').value,
        concept = document.getElementById('conceptExp').value,
        date = document.getElementById('datePickerExp').value.split(' '),
        docAddr = document.getElementById('docAddrExp').files[0],
        note = document.getElementById('noteExp').value,
        amount = document.getElementById('amountExp').value,
        iva = document.getElementById('ivaExp').value,
        irpf = document.getElementById('irpfExp').value,
        retentions = document.getElementById('retentionExp').value;

        // total = document.getElementById('totalInc').value,
        
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
                date : date[0],
                day : date[1].toUpperCase(),
                month : date[2].toUpperCase(),
                year : date[3].toUpperCase(),
                docAddr: docAddr,
                amount: amount,
                iva: iva,
                irpf: irpf,
                retentions: retentions, 
                note: note,
                status : "PENDING"
            })
            .then(function() {
                window.location.replace('expense');
            })
          })
          .catch((error)=>console.log("Error from getting url however Expens is uploaded",error))})
      .catch((error) => console.log("Cannot Upload Expese",error));

}

const items1 = [
    { title: 'CLIENT', id: 'clientExp',type: 'text' },
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
    // savebtn: {
    //   background: `url(${savBtn})`,
    //   backgroundSize: "contain",
    //   border: "none",
    //   backgroundRepeat:"no-repeat",
    //   width:130,
    //   fontWeight:"bold",
    //   boxShadow: "none",
    //   color: "white",
    //   margin: 10,
    // },
    
    savebtn: {
      background: "rgba(15,213,245,1)",
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