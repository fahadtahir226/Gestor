import React, { Component } from 'react';
import "../css/style.css"

class Configuration extends Component {

  lastTarget= null;

  handleClick(e){
    let allElements = Array.from(document.querySelectorAll('.optionBox'))
    for (let element of allElements) {
      element.classList.remove('confoptionactive')
    }
    e.target.classList.add('confoptionactive')
    e.preventDefault();
  }
  dblclick(e){
    let display = e.target.children[0].style.display;
    if(display == "" || display == "block") {
      e.target.children[0].style.display = "none";
      e.target.classList.remove('confoptionactive')
    } else {
      e.target.children[0].style.display = "block"
      e.target.classList.remove('confoptionactive');
    }
    console.log("Configuration -> dblclick -> e.target.children[0].style.display", e.target.children[0].style.display)
  }
  
  
  render() {
    // var {isAuthenticated, userInfo} = this.props;
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
                
            <div className="row optionBox" onClick={this.handleClick} style={styleBox.options}>MODEL 115 <i className="material-icons right" style={{color: "green"}} >check</i></div>
            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox" onClick={this.handleClick} style={styleBox.options}>MODEL 390<i className="material-icons right" style={{color: "green"}} >check</i></div>
            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox" onClick={this.handleClick} style={styleBox.options}>MODEL 303<i className="material-icons right" style={{color: "green"}} >check</i></div>
            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox" onDoubleClick={this.dblclick} onClick={this.handleClick} style={styleBox.options}>MODEL 115 <i className="material-icons right" style={{color: "green"}} >check</i></div>
            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox" onDoubleClick={this.dblclick} onClick={this.handleClick} style={styleBox.options}>MODEL 390<i className="material-icons right" style={{color: "green"}} >check</i></div>
            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox" onDoubleClick={this.dblclick} onClick={this.handleClick} style={styleBox.options}>MODEL 303<i className="material-icons right" style={{color: "green"}} >check</i></div>

          </div>
        </div>

        <div className="center-align">
          <a href="#!" style={styleBox.savebtn} className="btn">Save</a>
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
      background: "rgba(15,213,245,1)",
      background: "linear-gradient(90deg, rgba(15,213,245,1) 0%, rgba(115,0,255,0.7321564749385534) 100%)",
      borderRadius : "25px",
      width:130,
      fontWeight:"bold",
      color: "white",
    },
}

export default Configuration;
