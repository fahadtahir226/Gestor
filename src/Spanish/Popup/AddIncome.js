import React from 'react';
import M from 'materialize-css'
import { HideCard } from './configureCards';
import { db } from '../../Firebase/firestore';

import sbmtbtn from "../../images/text-background.png"
import '../../index.css'

class AddIncome extends React.Component {
  constructor(props){
    super(props);  
    this.state = {reupdate: 0}
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
    componentDidMount(){
      var modal = document.querySelectorAll('.modal'),
      picker = document.querySelectorAll('.datepicker');
      
      this.instance = M.Modal.init(modal);
      M.Datepicker.init(picker, {maxDate: new Date(), format: 'dd dddd mmmm yyyy'});
      // this.updateState();
    }
    // updateState(){
    //   setTimeout(() => {
    //   this.setState({reupdate: 1})
    //   }, 2000)
    // }
    render(){
      var ins = this.instance;
      var {userInfo, contacts} = this.props;
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
                    return <InputItem title={item.title} id={item.id} type={item.type} key={key} />
                })
            }
            <div className="row" style={{marginBottom: 0}}>
              <div className="input-field col s12" style={{marginBottom: 0, paddingLeft: 10.5, paddingRight: 10.5}}>
                <label htmlFor='datePickerInc' >DATE</label>
                <input type="text" id='datePickerInc' className="datepicker" />
              </div>
            </div>
            <Select contacts={contacts} />
          </form>
          <form className="col s12 m6 l6">
            {
                items2.map((item, key) => {
                    return <InputItem title={item.title} id={item.id} type={item.type} key={key} />
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
          <input id={ props.id } type={ props.type ? props.type : "text" } className="validate" />
          <label htmlFor={ props.id }>{props.title}</label>
        </div>
      </div>
    )
}
const Select = (props) => {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
  var contacts = props.contacts ? props.contacts: null;
return (
  <div className="row" style={{marginBottom: 0}}>
    <div className="col s12 validate" style={{marginBottom: 0, paddingLeft: 10.5, paddingRight: 10.5}}>
      <select id='clientInc'>
      <option value="">CLIENTS</option>  
      {contacts ? contacts.map((client, key)=> 
          <option key={key} value={client.nif  + '/' + client.name}>{client.name}</option>  
      ): null
      }
      </select>
    </div>
</div>
)
}

const addNewIncome = (userInfo) => {
    let client = document.getElementById('clientInc').value.split('/')[1],
        concept = document.getElementById('conceptInc').value,
        retention = parseInt(document.getElementById('retentionInc').value),
        irpf = parseInt(document.getElementById('irpfInc').value),
        iva = parseInt(document.getElementById('ivaInc').value),
        amount = parseInt(document.getElementById('amountInc').value),
        taxable = amount + irpf + iva - retention, 
        date = document.getElementById('datePickerInc').value.split(' '),
        note = document.getElementById('noteInc').value,
        nif = document.getElementById('clientInc').value.split('/')[0],
        monthInNum = calculateMonth(date[2].toUpperCase());
    

        if(!client || !concept || !date || !irpf || !iva || !retention || !amount || !note){
          M.toast({html: 'Every Field is Mandatory!'})
          return ;
        }
        db.collection("Users").doc(userInfo.uid).collection('income').doc().set({
          client : client,
          concept : concept,
          nif : nif.toUpperCase(),
          date : date[0],
          day : date[1].toUpperCase(),
          month : date[2].toUpperCase(),
          year : parseInt(date[3]),
          irpf : irpf,
          iva : iva,
          retention : retention,
          taxable : taxable,
          // total : total,                   need formula for it
          amount : amount,
          status : "PENDING",
          note: note,
          isDoc: false
        })
          db.collection('Users').doc(userInfo.uid).get()
          .then(userData => { 
            let data = userData.data();
            data.inc[monthInNum] += taxable;
            data.irpfInc[monthInNum] += irpf;
            data.ivaInc[monthInNum] += iva;
            data.retInc[monthInNum] += retention;
            db.collection('Users').doc(userInfo.uid).set(data)
            .then(()=>{
              window.location.replace('income');
            });
          })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

}

export const calculateMonth = mon => {
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
    { title: 'CONCEPT', id: 'conceptInc' ,type: 'text' },
    { title: 'RETENTIONS', id: 'retentionInc' ,type: 'number' },
    ],     
    items2 = [
    { title: 'IRPF', id: 'irpfInc' ,type: 'number' },
    { title: 'IVA', id: 'ivaInc' ,type: 'number' },
    { title: 'AMOUNT', id: 'amountInc' ,type: 'number' },
    { title: 'NOTE', id: 'noteInc' ,type: 'text' },
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





export default AddIncome;