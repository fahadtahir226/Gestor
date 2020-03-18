import React, { Component } from 'react';

class Help extends Component {

render() {
    // var {isAuthenticated, userInfo} = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h4 className="col s12 m12 l12 " style={styleBox.mainHeading} >Contact Us!</h4>
      <div className="row">
        <div className="col s12 m6 l6" style={styleBox.content}>
          <p>Ask your accountant<br />OR<br />Visit FAQs?</p>
          <p>If you still have any doubts you can talk to your 
            <br />personal accountant at 
            <br />help@thegestor.com or call us directly at
            </p>
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
    // width: "90%",
    minHeight: 500,
    padding: 20,
    color: "#1e88e5",
    boxShadow:"0px 1px 2px 2px #ceeef2"
  },
  mainHeading: {
    marginBottom: 0
  },
  content: {
    padding: 10,
    margin: 15
  }
}

export default Help;
