import React from 'react';
import M from 'materialize-css';
import { HideCard } from './configureCards';
import { db } from '../../Firebase/firestore';
import { storageRef } from '../../Firebase/storage';

class AddDocIncome extends React.Component {
    componentDidMount(){
        var modal = document.querySelectorAll('.modal');
        M.Modal.init(modal);
    }

    render(){
    var {userInfo} = this.props;
    return(
    <div id="addDocIncome" style={styleBox.main}>
      <div className="modal-content" style={{padding: 20}}>
        <h5>ADD INCOME</h5>
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
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={()=>addNewIncome(userInfo)} className="btn-flat">Add</a>
        <a href="#!" onClick={()=>HideCard('addDocIncome')} className="btn-flat">Cancel</a>
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
    let concept = document.getElementById('conceptDocInc').value,
        date = document.getElementById('dateDocInc').value.toUpperCase(),
        day = document.getElementById('dayDocInc').value.toUpperCase(),
        month = document.getElementById('monthDocInc').value.toUpperCase(),
        year = parseInt(document.getElementById('yearDocInc').value),
        docAddr = document.getElementById('docAddrInc').files[0];
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
              db.collection("Users").doc(userInfo.uid).collection('income').doc().set({
                concept : concept,
                date : date,
                day : day,
                month : month,
                year : year,
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

    { title: 'CONCEPT', id: 'conceptDocInc' },
    { title: 'DATE', id: 'dateDocInc' },
    { title: 'DAY', id: 'dayDocInc' },
],     
items2 = [
    { title: 'MONTH', id: 'monthDocInc' },
    { title: 'YEAR', id: 'yearDocInc' },
    ]

const styleBox = {
    main: {
        position: "absolute",
        top: 50,
        display: "block",
        zIndex: 1000,
        minWidth: '60%',
        // margin: '0px auto',
        background: 'white',
        color: "#1e88e5", 
        boxShadow:"0px 1px 2px 2px #ceeef2",
        borderRadius: 10,
    }
}





export default AddDocIncome;