import React from 'react';
import M from 'materialize-css';
import { HideCard } from './configureCards';
import savBtn from "../../images/Rectangle 267@2x.png"
import sbmtbtn from "../../images/text-background.png"
import '../../index.css'

class DocPdf extends React.Component {
    componentDidMount(){
        var modal = document.querySelectorAll('.modal');
        this.instance = M.Modal.init(modal);
    }

    render(){
    var ins = this.instance;
    var { url } = this.props;
    return(
    <div id="docPdf" style={styleBox.main} className='modal modal-fixed-footer z-depth-5'>
      <div className="modal-content" style={styleBox.content}>
        <div className="row" style={styleBox.bluishHeading} >
          DOCUMENTS
        </div>
        <div className="row">
        {/* <center> */}
            <iframe title='docTitle' id="docIframe" src={url} 
            style={styleBox.docframe}
            height="700" width="450"></iframe>
        {/* </center> */}
        </div>
      </div>

      <div className="modal-footer" style={styleBox.footer}>
        <a href="#!" onClick={()=>HideCard(ins, 'docPdf')} style={styleBox.savebtn} className="btn-flat">Cancel</a>
      </div>

    </div>
    );
    }
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
    padding: 0,
    // paddingBottom: 0,
    // overflow: 'visible'
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
    docframe: {
      // overflowY: 'hidden',
      border: 'none',
      
    },
    savebtn: {
      background: `url(${savBtn})`,
      backgroundSize: "contain",
      border: "none",
      backgroundRepeat:"no-repeat",
      width:130,
      fontWeight:"bold",
      boxShadow: "none",
      color: "white",
      margin: 10,
      // float: 'center'
    },
    footer : {
      // width: '95%',
      textAlign: 'center',
      
    },
}





export default DocPdf;