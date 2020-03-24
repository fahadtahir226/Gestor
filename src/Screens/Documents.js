import React, { Component } from 'react';
import M from 'materialize-css';

import folderIcon from '../images/drawable/folderIcon.png'
import pdfIcon from '../images/drawable/pdfIcon.png'


class Documents extends Component {
componentDidMount(){
    var elems = document.querySelectorAll('.collapsible');
    var fixdbtn = document.querySelectorAll('.fixed-action-btn');
    
    M.Collapsible.init(elems);
    M.FloatingActionButton.init(fixdbtn, {direction:"bottom"});
}
render() {
    // var {isAuthenticated, userInfo} = this.props;
  return(
    <>
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h5 className="col s12 m12 l12 " style={{marginBottom: 0, fontWeight: "bold"}}>Document</h5>
      <div className="row">
        <div className="col s12 m12 l12" style={styleBox.content}>
            <ul className="collapsible" style={styleBox.Ul}>
                {DocData.map((contact, key) => <Doc data={contact} key={key}/>)}
            </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid" style={{margin:30  }}>
      <a style={{float: "right", marginLeft:10}} href="#!" 
        className="btn-floating btn-large waves-effect waves-light white">
      <i className="material-icons" style={{color: "#1e88e5"}}>folder</i></a>
      <a style={{float: "right"}} href="#!" 
        className="btn-floating btn-large waves-effect waves-light white">
      <i className="material-icons" style={{color: "#1e88e5"}}>arrow_upward</i></a>
    </div>
    </>
  )}
}


const Doc = (props) => {
  console.log(props.data.numbersList);
    return (
        <li >
          <div className="collapsible-header">
            <img alt="" 
              style={props.data.childs? styleBox.folderStyle : styleBox.pdfStyle }
              src={props.data.childs? folderIcon : pdfIcon} />
            <div style={{ width:"80%" }}>
            {props.data.name}
            </div>

            {props.data.childs ? 
            <i style={{textAlign: "right", width: "20%"}} 
              className="material-icons secondary-content">chevron_right</i>
              : null
            }
          </div>
          <div className="collapsible-body">
              {props.data.numbersList.map((item)=><>
              <span>{item}</span><br /></>)}
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
    content: {
      padding: 10,
    },
    Ul: {
      borderRight: "none",
      borderLeft: "none",
      boxShadow: "none"
    },
    folderStyle: {
      height: 20,
      width:  30,
      marginRight: 15,
      textAlign: "center",  
    },
    pdfStyle: {
      height: 20,
      width: 20,
      marginRight: 25,
    },
  }
let DocData = [
{
    name: "TAX Docs 2020", numbersList: ["Doc A","Doc B","Doc C"], links: [], childs: 3
},
{
    name: "TAX Docs 2019", numbersList: ["Doc E","Doc V","Doc F"], childs: 3
},
{
    name: "LLC Group", numbersList: [], childs: 0
}
]
export default Documents;
