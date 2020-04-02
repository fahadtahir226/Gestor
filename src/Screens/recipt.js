import React, { Component } from 'react';
// import M from 'materialize-css';
import '../App.css'



class Recipt extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  onBack(whereTo){
    if(whereTo === 'INCOME'){
      window.location.replace('/home/income');
    }
    else{
      window.location.replace('/home/expense');
    }
  }
  render() {
    // console.log(this.props.location)
    return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
        <div style={styleBox.content}>
           {this.props.heading}
        </div>
        <div className="row">
            <div className="col offset-l2 l4 offset-m1 m10 offset-s1 s10">
            <table className="highlight " >
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
        <div className="col l4 offset-m1 m10 offset-s1 s10">
        <table className='highlight'>
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
      <div className='container'> <div className="divider"></div></div>
      
      <div className="container">
        <h5>NOTE</h5>    
        <p className='container-fluid'>
          Cupidatat occaecat occaecat labore deserunt tempor anim. Tempor dolor qui exercitation officia anim amet pariatur cillum. Proident occaecat reprehenderit id veniam dolor pariatur elit proident nulla nostrud nulla do. Est dolor et consectetur duis labore cupidatat tempor voluptate velit fugiat eu cupidatat.
            {/* {this.props.note} */}
        </p>

        </div>    
      <div className='container' style={{textAlign: 'center'}}>
        <a href="#!" onClick={(e)=>this.onBack(this.props.heading)} style={styleBox.savebtn} className="btn-flat">BACK</a>
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
    borderRadius: 10,
  },
  savebtn: {
    background: "linear-gradient(90deg, rgba(15,213,245,1) 0%, rgba(115,0,255,0.7321564749385534) 100%)",
    borderRadius : "25px",
    width:130,
    fontWeight:"bold",
    color: "white",
    margin: 10,
  }
}    

export default Recipt;
