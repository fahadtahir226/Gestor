import React from 'react';
import M from 'materialize-css'
import { HideCard } from './configureCards';
import { db } from '../../Firebase/firestore';

import savBtn from "../../images/Rectangle 267@2x.png"
import sbmtbtn from "../../images/text-background.png"
import '../../index.css'

class AddIncome extends React.Component {
    componentDidMount(){
      var modal = document.querySelectorAll('.modal');
      this.instance = M.Modal.init(modal);
    }
    render(){
      var ins = this.instance;
      var {userInfo} = this.props;
    return(
    <div id="addIncome" style={styleBox.main} className='modal z-depth-5' >
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
                    return <InputItem title={item.title} id={item.id} key={key} />
                })
            }
          </form>
        </div>
        <a href="#!" onClick={()=>addNewIncome(userInfo)} style={styleBox.savebtn} className="btn-flat">Add</a>
        <a href="#!" onClick={()=>HideCard(ins, 'addIncome')} datatarget='model-close' style={styleBox.savebtn} className="btn-flat">Cancel</a>
      </div>
    </div>
    );
    }
}


const InputItem = (props) => {
    return (
      <div className="row" style={{marginBottom: 0}}>
        <div className="input-field col s12" style={{marginBottom: 0}}>
          <input id={ props.id } type="text" className="validate" />
          <label htmlFor={ props.id }>{props.title}</label>
        </div>
      </div>
    )
}

const addNewIncome = (userInfo) => {
    let client = document.getElementById('clientInc').value,
        concept = document.getElementById('conceptInc').value,
        date = document.getElementById('dateInc').value.toUpperCase(),
        day = document.getElementById('dayInc').value.toUpperCase(),
        month = document.getElementById('monthInc').value.toUpperCase(),
        year = parseInt(document.getElementById('yearInc').value),
        irpf = parseInt(document.getElementById('irpfInc').value),
        iva = parseInt(document.getElementById('ivaInc').value),
        taxable = parseInt(document.getElementById('taxableInc').value),
        amount = parseInt(document.getElementById('amountInc').value);

        if(!client || !concept || !date || !day || !month || !year || !irpf || !iva || !taxable || !amount ){
          M.toast({html: 'Every Field is Mandatory!'})
          return ;
        }
        db.collection("Users").doc(userInfo.uid).collection('income').doc().set({
            client : client,
            concept : concept,
            date : date,
            day : day,
            month : month,
            year : year,
            irpf : irpf,
            iva : iva,
            taxable : taxable,
            // total : total,                   need formula for it
            amount : amount,
            status : "PENDING",
            isDoc: false
        })
        .then(function() {
            window.location.replace('income');
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

}

const items1 = [
    { title: 'CLIENT', id: 'clientInc' },
    { title: 'CONCEPT', id: 'conceptInc' },
    { title: 'DATE', id: 'dateInc' },
    { title: 'DAY', id: 'dayInc' },
    { title: 'MONTH', id: 'monthInc' },
    ],     
    items2 = [
    { title: 'YEAR', id: 'yearInc' },
    { title: 'IRPF', id: 'irpfInc' },
    { title: 'IVA', id: 'ivaInc' },
    { title: 'TAXABLE', id: 'taxableInc' },
    { title: 'AMOUNT', id: 'amountInc' }
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
      background: `url(${savBtn})`,
      backgroundSize: "contain",
      border: "none",
      backgroundRepeat:"no-repeat",
      width:130,
      fontWeight:"bold",
      boxShadow: "none",
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





export default AddIncome;