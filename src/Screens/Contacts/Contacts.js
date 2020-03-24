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
    // var {isAuthenticated, userInfo} = this.props;
  return (
    <>
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h4 className="col s12 m12 l12 " style={styleBox.mainHeading}>Contacts</h4>
      <div className="row">
        <div className="col s12 m12 l12" style={styleBox.content}>
            <ul className="collapsible" style={styleBox.Ul}>
                {ContactsData.map((contact,key) => <Contact data={contact} key={key}/>)}
            </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid" style={{margin:30  }}>
      <Link to="/Home/contacts/newContact">
        <a style={{float: "right"}} href="#!" className="btn-floating btn-large waves-effect waves-light blue">
          <i className="material-icons">add</i></a>
      </Link>
    </div>
      </>
    )
  }
}


const Contact = (props) => {
    return (
        <li >
          <div className="collapsible-header" style={{ width:"100%" }}>
              <div style={{ width : "90%" }}>
              {props.data.name}
              </div>
              <i className="material-icons right" style={{alignContent : "center"}}>chevron_right</i>
          </div>
          <div className="collapsible-body">
              {props.data.numbersList.map((item,key)=><><span key={key}>{item}</span><br /></>)}
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
      marginBottom: 0,
      fontWeight: "bold"
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
let ContactsData = [
{
    name: "Mamu", numbersList: ["XXXX-XXX-XYXY","XXXX-XXX-XYXY","XXXX-XXX-XYXY"]
},
{
    name: "Stemslabs SI.", numbersList: ["WWWW-WWW-XYXY","VVVV-XXX-XYXY","AAAA-XXX-XYXY"]
},
{
    name: "LLC Group", numbersList: ["YYYY-QQQQ-XYXY","CCCC-XXX-XYXY","AAAA-XXX-XYXY"]
}
]
export default Contacts;
