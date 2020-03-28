import React from 'react';
import M from 'materialize-css'
import { HideCard } from './configureCards';
import { storageRef } from '../../Firebase/storage';

import savBtn from "../../images/Rectangle 267@2x.png"
import sbmtbtn from "../../images/text-background.png"
import '../../index.css'

class AddNewDoc extends React.Component {
    componentDidMount(){
      var modal = document.querySelectorAll('.modal');
      this.instance = M.Modal.init(modal);
    }
    render(){
      var ins = this.instance;
    return(
    <div id="addDoc" style={styleBox.main} className='modal z-depth-5' >
      <div className="modal-content" style={styleBox.content} >
        <div className="row" style={styleBox.bluishHeading} >
          UPLOAD DOCUMENT
        </div>
        <div className="row">
          <form>
          <input disabled type='text' id="docAddr" />


          <div className="row" style={{marginBottom: 0}}>
              <div className="input-field col s12" style={{marginBottom: 0}}>
                  <div className="file-field input-field">
                    <div className="btn blue darken-1">
                      <span> File</span>
                      <input  id='upDocFile' type="file" />
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" />
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">mode_edit</i>
              <textarea id="subFolder" className="materialize-textarea"></textarea>
              <label id='subFolderName' htmlFor="subFolder">Folder</label>
            </div>
          </div>
          <div className='row' style={{textAlign: 'center'}}>
            <a href="#!" onClick={()=>addDoc(document.getElementById('docAddr').value)} style={styleBox.savebtn} className="btn-flat">Upload</a>
            <a href="/home" onClick={()=>HideCard(ins, 'addDoc')} datatarget='model-close' style={styleBox.savebtn} className="btn-flat">Cancel</a>
          </div>
          </form>
        </div>
      </div>
    </div>
    );
    }
}

export const addDoc = (fulPath) => {
  let file = document.getElementById('upDocFile').files[0],
      folderName = document.getElementById('subFolder').value,
      refDoc = null;

  if(!file ){
    M.toast({html: 'Please Select a file to Upload!'})
    return ;
  }
  folderName.length > 0 ?  
  refDoc = storageRef.child(`${fulPath}/${folderName}/${file.name}`) :
  refDoc = storageRef.child(`${fulPath}/${file.name}`) ;

  console.log("File",file);
  console.log("Refrence For Location",refDoc);


   refDoc.put(file)
   .then(function(snapshot) {
      console.log('Uploaded Your Document!', snapshot);
      window.location.replace('/home');
   })
   .catch((error) => console.log("Cannot Upload Provided File: ",error))
}

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
    //   float: 'center',
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
      marginLeft: -45,
      marginBottom: 10,
      textAlign: 'left',
      fontWeight: 'bolder',
      float: "left"

  },
}





export default AddNewDoc;