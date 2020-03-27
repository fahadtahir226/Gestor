import React, { Component } from 'react';
import M from 'materialize-css';

import folderIcon from '../../images/drawable/folderIcon.png'
import pdfIcon from '../../images/drawable/pdfIcon.png'
// import { doc } from '../../Firebase/storage'
import { PopupCard } from '../Popup/configureCards';
import AddNewDoc from '../Popup/addDoc'
 
import '../../App.css'

class Documents extends Component {
componentDidMount(){
    var elems = document.querySelectorAll('.collapsible');
    var fixdbtn = document.querySelectorAll('.fixed-action-btn');
    document.getElementById('docPdf').style.display = 'none';
    document.getElementById('addDoc').style.display = 'none';      
    M.Collapsible.init(elems);
    M.FloatingActionButton.init(fixdbtn, {direction:"bottom"});

}

render() {
    var {userInfo, uploadDoc, doc} = this.props;
      console.log("Doc Reached UI",doc);
  return(
    <>
    <AddNewDoc />
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h4 className="col s12 m12 l12 " style={{marginBottom: 0}}>DOCUMENTS</h4>
      
      <div className="row">
        <div className="col s12 m12 l12" style={styleBox.content}>
            <ul className="collapsible" style={styleBox.Ul}>

              {/*  ****************************** Show Root Folders & Files  */}
                {doc ?
                  doc.items || doc.subChilds ?
                    <>
                      <>{
                        doc.paths.map((path, key) => <Folder  name={path.name} fulpath={path.fulpath} subChilds={path.subChilds} key={key} />)}
                      </>
                      <>{
                        doc.items.map((item, key) => <Pdf name={item.name} path={item.path} key={key} />)}
                      </>
                    </>
                    : <PreLoader color='spinner-blue'/>
                  : <PreLoader color='spinner-red' />
                }
            </ul>

        </div>
      </div>
    </div>
    <div className="container-fluid" style={{margin:30  }}>
      <a style={{float: "right"}} href="#addDoc" onClick={()=>PopupCard('addDoc',`documents/${userInfo.uid}`)}
        className="btn-floating btn-large waves-effect waves-light white modal-trigger" >
      <i className="material-icons" style={{color: "#1e88e5"}}>arrow_upward</i></a>
    </div>
    </>
  )}
}



const Pdf = (props) => {
  // console.log(props.data.numbersList);
    return (
        <li>
          <div className="collapsible-header modal-trigger" href="#docPdf" style={{paddingTop: '0px !important', paddingBottom: '0px !important'}} onClick={() => PopupCard('docPdf', props.path, null)}>
            <img alt="" style={styleBox.pdfStyle} src={pdfIcon} />
            {props.name}
          </div>
        </li>
    )
}

const Folder = (props) => {
  // console.log(props.data.numbersList);
    let doc = props.subChilds;
    if(!doc) return;
    return (
        <li>
          <div className="collapsible-header" style={{paddingTop: '0px !important', paddingBottom: '0px !important'}}>
            <div style={{ width: '90%', }}>
            <img alt="" style={styleBox.folderStyle} src={folderIcon} />
            {props.name}
            </div>
            <i style={{color: "dimgrey"}} onClick={()=>PopupCard('addDoc', props.fulpath)} className="material-icons secondary-content">file_upload</i>
            <i style={{color: "dimgrey"}} className="material-icons secondary-content">chevron_right</i>
          </div>
          <div className="collapsible-body" style={{padding: 0, paddingLeft: 30, paddingTop : 0, paddingBottom: 0 }}>
            <ul className="collapsible" style={styleBox.Ul}>

              {/*  ****************************** Show Further Folders & Files  */}
                {doc ?
                  doc.paths ? 
                  doc.paths.map((path, key) => <Folder name={path.name} fulpath={path.fulpath} subChilds={path.subChilds} key={key} />)
                    :null
                  : null
                }
                {doc ?
                  doc.items ? 
                    doc.items.map((item, key) => <Pdf name={item.name} path={item.path} key={key} />)
                    :null
                  : null
                }
                {(doc.paths <= 0 && doc.items.length <= 0)? 
                  <li style={{padding: 13}}>
                          <span style={{padding: 20, }}>EMPTY FOLDER</span>

                </li>
                : null}
            </ul>
          </div>
        </li>
    )
}

const PreLoader = (props) => {
  return (
    <center style={{marginTop: 70, color: "dimgrey", padding: 70}}>
      <p>PLEASE WAIT, DATA LOADING</p> 
      <div className="preloader-wrapper active">
        <div className={"spinner-layer " + props.color}>
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
        </div>
      </center>
  )
}


const styleBox = {
    main: {
      margin: 30,
      borderRadius: 10,
      minHeight: 500,
      padding: 30,
      color: "#1e88e5",
      boxShadow:"0px 1px 2px 2px #ceeef2",
      zIndex: 0,
    },
    content: {
      padding: 10,
    },
    Ul: {
      // borderTop: "none",
      marginTop: 0,
      marginBottom: 0,
      borderBottom: "none",
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

export default Documents;


 
// items: Array(1)
//    0: Pdf {name: "DS_Lab_01.pdf", path: "https://firebasestorage.googleapis.com/v0/b/the-ge…=media&token=2e66533a-5a69-4e0d-af91-983cbdfc61d6"}
// 
// paths: Array(1)
//    0: Folders
//      name: "DS_LAB"
//      subChilds:


//          items: Array(2)
//            0: Pdf {name: "DS_Lab_02.pdf", path: "https://firebasestorage.googleapis.com/v0/b/the-ge…=media&token=5b852dfc-8209-4999-8416-ebabb79a70d4"}
//            1: Pdf {name: "DS_Lab_03.pdf", path: "https://firebasestorage.googleapis.com/v0/b/the-ge…=media&token=0203f834-fa0f-416e-bbb4-684690b202f0"}
//          paths: Array(2)
//            0: Folders {
//                name: "DS_LAB_MID_1",
//                subChilds: {…}}

//            1: Folders {
//                name: "DS_LAB_MID_2", 
//                subChilds: {…}}


