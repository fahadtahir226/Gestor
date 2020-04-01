import React, { Component } from 'react';
// import M from 'materialize-css';
import '../App.css'



class Recipt extends Component {
    componentDidMount(){
        setInterval(() => {
            console.log(this.props.match)
            
        }, 4000);


    }   

render() {
    
    // var { userData, expData, incData} = this.props;
    // console.log("User Info:", userData);
    return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
        <div style={{background: "#e0e0e0", textAlign: "center", marginTop: 20, color: "grey", height: 50, fontSize: 24}}>
           {this.props.heading}
        </div>
      <div class="row">

        <div class="col s6 ">
        ticket info

        </div>
        <div class="col s6 ">
            personal info

        </div>

      </div>
      <div class="row">
        note            

        </div>    
    </div>
    )
}
}

const styleBox = {
  main: {
    margin: 30,
    borderRadius: 10,
    minHeight: 500,
    color: "#1e88e5",
    boxShadow:"0px 1px 2px 2px #ceeef2",
    zIndex: 0,

  },
  mainHeading: {
    marginBottom: 0,
    marginTop: 0,
    padding: 30,
    paddingBottom: 0,
    color: "#1e88e5",
    fontWeight :"bold"
  },
  HeaderIcons: {
    width: 30,
    height: 30,
    marginRight: 20
},
  inputDiv: {
    background: "#F2F0EC",
    borderRadius: 200,
    paddingLeft: 15,
    marginTop: 30,
  },
  content: {
    padding: 10,
  },
  Ul: {
    borderRight: "none",
    borderLeft: "none",
    boxShadow: "none"
  }
  }

export default Recipt;
