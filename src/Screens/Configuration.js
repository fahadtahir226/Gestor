import React, { Component } from 'react';

class Configuration extends Component {

render() {
    // var {isAuthenticated, userInfo} = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h5 className="col s12 m12 l12" style={styleBox.mainHeading}>CONFIGURATION</h5>
      <div className="row">
        <div className="col s12 m12 l6" style={styleBox.content}>
          <div className="container">
            <div className="row" style={styleBox.headins}><h6>LANGUAGE:</h6></div>
            
            <div className="row" style={styleBox.options}>SPANISH</div>
            <div class="divider" style={{marginBottom: 10}}></div>
            <div className="row" style={styleBox.options}>ENGLISH<i className="material-icons right" style={{color: "green"}} >check</i></div>


            <div className="row" style={styleBox.headins}>INOVICE:</div>
            
            <div className="row" style={styleBox.options}>ADD LOGOX</div>
            <div class="divider" style={{marginBottom: 10}}></div>
            <div className="row" style={styleBox.options}>CHOOSE TEMPLATE</div>
          </div>
        </div>
        <div className="col s12 m12 l6" >
          <div className="container">

            <div className="row" style={styleBox.headins}>TAXES:</div>
                
            <div className="row" style={styleBox.options}>MODEL 115</div>
            <div class="divider" style={{marginBottom: 10}}></div>
            <div className="row" style={styleBox.options}>MODEL 390<i className="material-icons right" style={{color: "green"}} >check</i></div>
            <div className="row" style={styleBox.options}>MODEL 303<i className="material-icons right" style={{color: "green"}} >check</i></div>

          </div>
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
    },
    content: {
      padding: 10,
    },
    headins:{
        padding: 10,
        fontWeight: 600 ,
        fontSize: 17
    },
    options: {
        padding: 10,
        paddingLeft: 40,
        fontWeight: 500,
        marginBottom: 10
    }
  }

export default Configuration;
