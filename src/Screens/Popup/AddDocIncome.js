import React from 'react';
import M from 'materialize-css';
import { HideCard } from './configureCards';
import { db } from '../../Firebase/firestore';
import { storageRef } from '../../Firebase/storage';

import sbmtbtn from "../../images/text-background.png"
import '../../index.css'

class AddDocIncome extends React.Component {
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
    <div id="addDocIncome" style={styleBox.main} className='modal z-depth-5'>
      <div className="modal-content" style={styleBox.content} >
        <div className="row" style={styleBox.bluishHeading} >
          ADD INCOME
        </div>
        <div className="row">
          <form className="col s12 m6 l6">
            {
                items1.map((item, key) => {
                    return <InputItem title={item.title} id={item.id} key={key} />
                })
            }

          </form>
          <form className="col s12 m6 l6">
            {
                items2.map((item, key) => {
                    return <InputItem title={item.title} id={item.id} key={key} type={item.type} />
                })
            }
            <div className="row" style={{marginBottom: 0}}>
              <div className="input-field col s12" style={{marginBottom: 0, paddingLeft: 10.5, paddingRight: 10.5}}>
                <label htmlFor='datePickerExp' >DATE</label>
                <input type="text" id='datePickerExp' className="datepicker" />
              </div>
            </div>

            <div className="file-field input-field">
              <div className="btn">
                <span>UPLOAD</span>
                <input id='docAddrInc' type="file" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </form>
        </div>
      <a href="#!" onClick={()=>addNewIncome(userInfo)} style={styleBox.savebtn}  className="btn-flat">Add</a>
        <a href="#!" onClick={()=>HideCard(ins, 'addDocIncome')} datatarget='model-close' style={styleBox.savebtn} className="btn-flat">Cancel</a>
      </div>
    </div>
    );
    }
}


const InputItem = (props) => {
    return (
      <div className="row" style={{marginBottom: 0}}>
        <div className="input-field col s12" style={{marginBottom: 0}}>
          <input id={ props.id } type={ props.type ? props.type : "text" } className="validate" />
          <label htmlFor={ props.id }>{props.title}</label>
        </div>
      </div>
    )
}

const addNewIncome = (userInfo) => {
    let client = document.getElementById('clientDocInc').value,
        concept = document.getElementById('conceptDocInc').value,
        date = document.getElementById('datePickerExp').value.split(' '),
        docAddr = document.getElementById('docAddrInc').files[0],
        iva = parseInt(document.getElementById('ivaDocInc').value),
        irpf = parseInt(document.getElementById('irpfDocInc').value),
        amount = parseInt(document.getElementById('amountDocInc').value),
        retentions = parseInt(document.getElementById('retentionDocInc').value);

        if(!client|| !concept || !date || !docAddr || !iva || !irpf || !amount || !retentions ){
            M.toast({html: 'Every Field is Mandatory!'})
            return ;
        }

        let refDoc = storageRef.child(`income-expense/${docAddr.name}`)
        refDoc.put(docAddr).then(function(snapshot) {
          console.log('Exprense Your Document!', snapshot);
  
          refDoc.getDownloadURL()
          .then(function(url) {
              docAddr = url;
              db.collection("Users").doc(userInfo.uid).collection('income').doc().set({
                client: client,
                concept : concept,
                date : date[0],
                day : date[1].toUpperCase(),
                month : date[2].toUpperCase(),
                year : parseInt(date[3]),
                amount: amount,
                taxable: amount + iva + irpf - retentions,
                iva: iva,
                irpf: irpf,
                retentions: retentions, 
                status : "PENDING",
                isDoc : true,
                docAddr : url

            })
            .then(function() {
                window.location.replace('income');
            })
          })
          .catch((error)=>console.log("Error from getting url however Income document is uploaded",error))})
      .catch((error) => console.log("Cannot Upload Expese",error));


}

const items1 = [

  { title: 'CLIENT', id: 'clientDocInc',type: 'text' },
  { title: 'CONCEPT', id: 'conceptDocInc',type: 'text' },
  { title: 'IRPF', id: 'irpfDocInc',type: 'number' },

],     
items2 = [
  { title: 'RETENTIONS', id: 'retentionDocInc',type: 'number' },
  { title: 'IVA', id: 'ivaDocInc',type: 'number' },
  { title: 'AMOUNT', id: 'amountDocInc'  ,type: 'number' },
  { title: 'NOTE', id: 'noteDocInc' , type: 'text' },
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





export default AddDocIncome;