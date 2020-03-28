import React from 'react';
import M from 'materialize-css'
import { HideCard } from './configureCards';
import { db } from '../../Firebase/firestore';

import savBtn from "../../images/Rectangle 267@2x.png"
import sbmtbtn from "../../images/text-background.png"
import '../../index.css'

class AddIncome extends React.Component {
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
            <div className="input-field col s12" style={{marginBottom: 0, padding: 0}}>
              <label htmlFor='datePickerInc' >DATE</label>
              <input type="text" id='datePickerInc' className="datepicker" />
            </div>
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
        retention = parseInt(document.getElementById('retentionInc').value),
        irpf = parseInt(document.getElementById('irpfInc').value),
        iva = parseInt(document.getElementById('ivaInc').value),
        amount = parseInt(document.getElementById('amountInc').value),
        date = document.getElementById('datePickerInc').value.split(' '),
        note = document.getElementById('noteInc').value;
    

        if(!client || !concept || !date || !irpf || !iva || !retention || !amount || !note){
          M.toast({html: 'Every Field is Mandatory!'})
          return ;
        }
        db.collection("Users").doc(userInfo.uid).collection('income').doc().set({
            client : client,
            concept : concept,
            date : date[0],
            day : date[1].toUpperCase(),
            month : date[2].toUpperCase(),
            year : date[3].toUpperCase(),
            irpf : irpf,
            iva : iva,
            retention : retention,
            taxable : amount + iva + irpf - retention,
            // total : total,                   need formula for it
            amount : amount,
            status : "PENDING",
            note: note,
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
    { title: 'RETENTION', id: 'retentionInc' },
    ],     
    items2 = [
    { title: 'IRPF', id: 'irpfInc' },
    { title: 'IVA', id: 'ivaInc' },
    { title: 'AMOUNT', id: 'amountInc' },
    { title: 'NOTE', id: 'noteInc' }
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





export default AddIncome;