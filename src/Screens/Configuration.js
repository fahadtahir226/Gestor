import React, { Component } from 'react';
import M from'materialize-css';
import { db } from '../Firebase/firestore'
// import { nextFiling } from './Graphs';
import "../css/style.css"

class Configuration extends Component {
constructor(props){
  super(props);
  this.state = {updateState: 0}
}
  componentDidMount(){
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }

  lastTarget= null;

  handleclick(model){
    if(model.name != '303' && model.name != '130' && model.name != '390'){
      if(model.status) model.status = false;
      else model.status = true;
      console.log(this.props.userInfo.uid, model);
      db.collection('Users').doc(this.props.userInfo.uid).collection("models").doc(model.name)
      .set(model)
      .then(()=>this.setState({updateState: this.state.updateState++}));
    }
    else{
      M.toast({html: 'THIS IS SELECTED DEFAULT, WE ARE SORRY BUT YOU CANNOT CHANGE IT'})
    }
  }
  
  render() {
    var {models} = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h5 className="col s12 m12 l12 " style={{marginBottom: 0, fontWeight: "bold"}}>Configurations</h5>
      <div className="row">
        <div className="col s12 m12 l6">
          <div className="container-fluid" style={{ marginLeft: 35 }}>
            <div className="row" style={styleBox.headins}>LANGUAGE:</div>
            
            <div className="row optionBox" onClick={this.handleClick}  style={styleBox.options}>SPANISH <i className="material-icons right" style={{color: "green"}} >check</i></div>
            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox" onClick={this.handleClick} style={styleBox.options}>ENGLISH<i className="material-icons right" style={{color: "green"}} >check</i></div>

            <div className="divider" style={{marginBottom: 10}}></div>

            <div className="row" style={styleBox.headins}>INVOICE:</div>
            
            <div className="row optionBox" onClick={this.handleClick} style={styleBox.options}>ADD LOGOX<i className="material-icons right" style={{color: "green"}} >check</i></div>
            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox" onClick={this.handleClick} style={styleBox.options}>CHOOSE TEMPLATE<i className="material-icons right" style={{color: "green"}} >check</i></div>
            <div className="divider" style={{marginBottom: 10}}></div>
          </div>
        </div>
        <div className="col s12 m12 l6" >
          <div className="container">
            <div className="row" style={styleBox.headins}>TAXES:</div>
            {models.map((model, key) =>
              <><div className="row optionBox tooltipped" onClick={() => this.handleclick(model)} 
                style={styleBox.options}  data-position="left" data-tooltip="If you have office/local, check this box." >
                MODEL {model.name} {model.status ? <i className="material-icons right" style={{color: "green"}} >check</i>: null}</div>
              <div className="divider" style={{marginBottom: 10}}></div></>
            )}
          </div>
        </div>

        <div className="center-align">
          <a href="#!" style={styleBox.savebtn} onClick={this.handleSave} className="btn">Save</a>
        </div>

      </div>

    </div>
);
  }
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
      fontWeight: "600"
    },
    content: {
      padding: 10,
    },
    headins:{
        padding: 10,
        fontWeight: "700" ,
        fontSize: 17
    },
    options: {
        padding: 10,
        paddingLeft: 40,
        fontWeight: 500,
        marginBottom: 10,
    },   
    savebtn: {
      background: "linear-gradient(90deg, rgba(15,213,245,1) 0%, rgba(115,0,255,0.7321564749385534) 100%)",
      borderRadius : "25px",
      width:130,
      fontWeight:"bold",
      color: "white",
    },
}

export default Configuration;
