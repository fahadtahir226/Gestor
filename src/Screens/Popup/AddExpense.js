import React from 'react';
import M from 'materialize-css';
import { HideCard } from './configureCards';
import { db } from '../../Firebase/firestore';
import { storageRef } from '../../Firebase/storage';


class AddExpense extends React.Component {
    componentDidMount(){
        var modal = document.querySelectorAll('.modal');
        M.Modal.init(modal);
    }

    render(){
    var {userInfo} = this.props;
    return(
    <div id="addExpense" style={styleBox.main}>
      <div className="modal-content" style={{padding: 20}}>
        <h5>ADD EXPENSE</h5>
        <div className="row">
          <form className="col s12 m6 l6">
            {
                items1.map((item, key) => {
                    return <InputItem title={item.title} id={item.id} typeName={item.typeName}  key={key} />
                })
            }
          </form>
          <form className="col s12 m6 l6">
            {
                items2.map((item, key) => {
                    return <InputItem title={item.title} id={item.id} typeName={item.typeName}  key={key} />
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
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={()=>addNewExpense(userInfo)} className="btn-flat">Add</a>
        <a href="#!" onClick={()=>HideCard('addExpense')} className="btn-flat">Cancel</a>
      </div>
    </div>
    );
    }
}


const InputItem = (props) => {
    return (
      <div className="row" style={{marginBottom: 0}}>
        <div className="input-field col s12" style={{marginBottom: 0}}>
          <input id={ props.id } type={props.typeName} className="validate" />
          <label htmlFor={ props.id }>{props.title}</label>
        </div>
      </div>
    )
}

const addNewExpense = (userInfo) => {

    let concept = document.getElementById('conceptExp').value,
        date = document.getElementById('dateExp').value.toUpperCase(),
        day = document.getElementById('dayExp').value.toUpperCase(),
        month = document.getElementById('monthExp').value.toUpperCase(),
        year = parseInt(document.getElementById('yearExp').value),
        docAddr = document.getElementById('docAddrExp').files[0];
        // total = document.getElementById('totalInc').value,
        if(!concept || !date || !day || !month || !year || !docAddr ){
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
                concept : concept,
                date : date,
                day : day,
                month : month,
                year : year,
                // total : total,                   need formula for it
                docAddr: docAddr,
                status : "PENDING"
            })
            .then(function() {
                window.location.replace('expense');
            })
          })
          .catch((error)=>console.log("Error from getting url however Expens is uploaded",error))})
      .catch((error) => console.log("Cannot Upload Expese",error));


        // .catch(function(error) {
        //     console.error("Error writing document: ", error);
        // });

}

const items1 = [
    { title: 'CONCEPT', id: 'conceptExp', typeName: 'text' },
    { title: 'DATE', id: 'dateExp', typeName: 'text' },
    { title: 'DAY', id: 'dayExp', typeName: 'text' },
  ],     
  items2 = [
    { title: 'MONTH', id: 'monthExp', typeName: 'text'  },
    { title: 'YEAR', id: 'yearExp', typeName: 'text'  },
    // { title: 'DOCUMENT', id: 'docAddrExp', typeName: 'file' }
  ]

const styleBox = {
    main: {
        position: "absolute",
        top: 50,
        display: "block",
        zIndex: 1000,
        minWidth: '60%',
        background: 'white',
        color: "#1e88e5", 
        boxShadow:"0px 1px 2px 2px #ceeef2",
        borderRadius: 10,
    }
}





export default AddExpense;