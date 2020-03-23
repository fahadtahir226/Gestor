import React from 'react';
import M from 'materialize-css';
import { HideCard } from './configureCards';


class DocPdf extends React.Component {
    componentDidMount(){
        var modal = document.querySelectorAll('.modal');
        M.Modal.init(modal);
    }

    render(){
    var { url } = this.props;
    return(
    <div id="docPdf" style={styleBox.main}>
      <div className="modal-content" style={{padding: 20}}>
        <h5>Document</h5>
        <div className="row">
        <center>
            <iframe title='docTitle' id="docIframe" src={url} 
            style={styleBox.docframe}
            height="840" width="700"></iframe>
        </center>
        </div>
      </div>
      <center>
      <div className="modal-footer">
        <a href="#!" onClick={()=>HideCard('docPdf')} className="btn-flat">Cancel</a>
      </div>
      </center>
    </div>
    );
    }
}


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
    },
    docframe: {
      overflow: "hidden"
    }
}





export default DocPdf;