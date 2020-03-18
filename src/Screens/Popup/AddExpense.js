import React from 'react';
import M from 'materialize-css';

const AddExpense = (props) => {
    var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
    var {addExpense} = props
    return(
    <div id="addExpense" style={styleBox.main}>
      <div className="modal-content">
        <h4>Add Expense</h4>
        <div className="row">
          <form className="col s12">

            <div className="row">
              <div className="input-field col s12">
                <input id="title" type="text" className="validate" />
                <label htmlFor="title">TTITLE</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="month" type="email" className="validate" />
                <label htmlFor="email">amount</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={()=>addExpense()} className="modal-close waves-effect waves-green btn-flat">Add</a>
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
      </div>
    </div>
    )
}
const styleBox = {
    main: {
        // position: "fixed",
        // top: 50,
        width: "70%"
    }
}

export default AddExpense;