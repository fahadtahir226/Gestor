import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import M from 'materialize-css';

class Contacts extends Component {
componentDidMount(){
    var elems = document.querySelectorAll('.collapsible');
    var fixdbtn = document.querySelectorAll('.fixed-action-btn');
    
    M.Collapsible.init(elems);
    M.FloatingActionButton.init(fixdbtn, {direction:"bottom"});
}
render() {
    var {contacts} = this.props;
    console.log(contacts);
  return (
    <>
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h4 className="col s12 m12 l12 " style={styleBox.mainHeading}>Contact Us!</h4>
      <div className="row">
        <div className="col s12 m12 l12" style={styleBox.content}>
          <ul className="collapsible" style={styleBox.Ul}>
            {
              contacts?
              contacts.map((contact,key) => <Contact data={contact} key={key}/>): null
            }
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid" style={{margin:30  }}>
      <Link to="/home/contacts/newContact">
        <a style={{float: "right"}} href="#!" className="btn-floating btn-large waves-effect waves-light blue">
          <i className="material-icons">add</i></a>
      </Link>
    </div>
      </>
    )
  }
}


const Contact = (props) => {
  var contact = props.data;
    return (
        <li key={props.key}>
          <div className="collapsible-header"><div>
            {contact.name}</div>
            <div>
              <i className="material-icons right" style={{float: "right", textAlign: "right"}}>chevron_right</i>
             </div>
            </div>
          <div className="container-fluid collapsible-body">
            <div className='row'>
              <div className='col s6 m6 l3' style={{color: "dimgrey"}}>
                <p>Name: </p>
                <p>NIF: </p>
                <p>Email: </p>
                <p>Address: </p>
              </div>
              <div className='col s6 m6 l3' >
                <p>{contact.name}</p>
                <p>{contact.nif}</p>
                <p>{contact.email}</p>
                <p>{contact.address}</p>
              </div>
              <div className='col s6 m6 l3' style={{color: "dimgrey"}}>
                <p>CITY: </p>
                <p>PROVINCE: </p>
                <p>COUNTRY: </p>
                <p>POSTAL CODE:</p>
              </div>
              <div className='col s6 m6 l3' >
                <p>{contact.city}</p>
                <p>{contact.province}</p>
                <p>{contact.country}</p>
                <p>{contact.pcode}</p>
              </div>
            </div>
          </div>
        </li>
    )
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
      // marginBottom: 0
    },
    content: {
      padding: 10,
    },
    Ul: {
        borderRight: "none",
        borderLeft: "none",
        boxShadow: "none"
    }
  }

export default Contacts;
