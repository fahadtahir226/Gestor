import React, { Component } from 'react';
import M from'materialize-css';
import { nextFiling } from './Graphs';
import "../css/style.css"

class Configuration extends Component {
constructor(props){
  super(props);
  this.state = {data: nextFiling}
  console.log( this.state );
}
  componentDidMount(){
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }

  lastTarget= null;

  handleclick(key){
    let data = this.state.data;
    console.log(data, key)
    if(data[key].name != '303' && data[key].name != '130' && data[key].name != '390'){
      data[key].status = false;
      this.setState( { data } );
    }
    // let element = e.target
    // let display = element.children[0].style.display;
    // if(display === "" || display === "block") {
      // element.children[0].style.display = "none";
      // element.classList.remove('confoptionactive')
      
    // } else {
      // element.children[0].style.display = "block"
      // element.classList.remove('confoptionactive');
    // }
  }
  handleSave(){

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
            {this.state.data.map((model, key) =>
              <><div className="row optionBox tooltipped" onClick={() => this.handleclick(key)} 
                style={styleBox.options}  data-position="left" data-tooltip="If you have office/local, check this box." >
                MODEL {model.name} {model.status ? <i className="material-icons right" style={{color: "green"}} >check</i>: null}</div>
              <div className="divider" style={{marginBottom: 10}}></div></>
            )}

            {/* <div className="row optionBox tooltipped"  style={styleBox.options} data-position="left" data-tooltip="If you retained VAT check this box.">
              MODEL 390<i className="material-icons right" style={{color: "green"}} >check</i></div>

            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox tooltipped"  style={styleBox.options} data-position="left" data-tooltip="If you retained VAT check this box.">
              MODEL 303<i className="material-icons right" style={{color: "green"}} >check</i></div>

            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox tooltipped"  data-position="left" data-tooltip="If you retained the IRPF of other professionals, employees or businessmen, check this box." style={styleBox.options}>
              MODEL 111 <i className="material-icons right" style={{color: "green"}} >check</i></div>

            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox tooltipped" onClick={this.handleclick} data-position="left" data-tooltip="If you have operations with other EU countries, check this box" style={styleBox.options}>
              MODEL 349<i className="material-icons right" style={{color: "green"}} >check</i></div>

            <div className="divider" style={{marginBottom: 10}}></div>
            <div className="row optionBox tooltipped" onClick={this.handleclick} data-position="left" data-tooltip="If you made operations over the amount 3005,06€ with 3rd parties, check this box." style={styleBox.options}>
              MODEL 347<i className="material-icons right" style={{color: "green"}} >check</i></div> */}


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
