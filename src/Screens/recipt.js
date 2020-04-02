import React, { Component } from 'react';
// import M from 'materialize-css';
import '../App.css'



class Recipt extends Component {
  render() {
    console.log(this.props.location)
    return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
        <div style={styleBox.content}>
           {this.props.heading}
        </div>
        <div class="row">
            <div class="col offset-l2 l4 offset-m1 m10 offset-s1 s10">
            <table class="highlight " >
            <tbody>
              <tr>
                <td>CLIENT</td>
                <td>JOSEPH</td>
              </tr>
              <tr>
                <td>NIF</td>
                <td>RBS12C</td>
              </tr>
              <tr>
                <td>DATE</td>
                <td>06.01.2020</td>
              </tr>
              <tr>
                <td>CONCEPT </td>
                <td>IE MARCH(Training)</td>
              </tr>
            </tbody>
        </table>
        </div>
        <div class="col l4 offset-m1 m10 offset-s1 s10">
        <table>
        <tbody>
          <tr>
            <td>TAXABLE</td>
            <td>290.54</td>
          </tr>
          <tr>
            <td>IVA</td>
            <td>120.34</td>
          </tr>
          <tr>
            <td>IRPF</td>
            <td>20.00</td>
          </tr>
          <tr>
            <td>TOTAL</td>
            <td>150.24</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
      <div className='container'> <div class="divider"></div></div>
      
      <div className="container">
        <h5>NOTE</h5>    
        <p className='container'>
            {/* {this.props.note} */}
        </p>

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
  content: {
    background: "#e0e0e0",
    textAlign: "center",
    marginTop: 20,
    color: "grey",
    padding: 20,
    fontSize: 24,
    borderRadius: 10}
  }

export default Recipt;
