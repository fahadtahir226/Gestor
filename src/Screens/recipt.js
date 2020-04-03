import React, { Component } from 'react';
// import M from 'materialize-css';
import '../App.css'
import {calculateMonth} from './Popup/AddIncome' 

import Loader from 'react-loader-spinner'
import "../css/style.css"

class Recipt extends Component {
  constructor(props){
    super(props);

    this.url = window.location.toString().split('/');
    this.url = this.url[this.url.length - 1]
    this.state = {
      loading : true, 
      url : this.url[this.url.length - 1]
    }
  }
  filterData(data){
    console.log("Recipt -> filterData -> data", data)
    let recipt = {},months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTUBER','NOVEMBER','DECEMBER']
    for(let i in months){
        recipt = data[months[i]].filter(mon => {
          return mon.ticketNo === this.url;
        })
      if(recipt.length > 0) break;
    }
    // console.log("RECIPT: ",recipt);
    return recipt[0];
  }
  onBack(whereTo){
    if(whereTo === 'INCOME'){
      window.location.replace('/home/income');
    }
    else{
      window.location.replace('/home/expense');
    }
  }

  getdata = async (data) => {
    return await data; 
  }
  getprops  = async (data) =>{
    if (await this.getdata(data)){
      this.setState({loading: false})
    }
  }

  render() {
  var { userInfo , userData} = this.props;
  let data = {}
    if(this.state.loading == true){
      this.props.heading === 'INCOME' ? this.getprops(this.props.incData) : this.getprops(this.props.expData);
    } else{
      this.props.heading === 'INCOME' ? data = this.props.incData : data = this.props.expData;
      data = this.filterData(data);
      console.log(this.props.heading,"and Data is", data);
    }
    return (

      <div>
        
      {

      this.state.loading ? 

      <div className="completepage">
        <div className="loaderbox">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}

        />
        </div>
      </div>

      :    

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
                <td>{data.client}</td>
              </tr>
              <tr>
                <td>NIF</td>
                <td>{data.nif}</td>
              </tr>
              <tr>
                <td>DATE</td>
                <td>{calculateMonth(data.month) + 1}.{data.date}.{data.year}</td>
              </tr>
              <tr>
                <td>CONCEPT </td>
                <td>{data.concept}</td>
              </tr>
            </tbody>
        </table>
        </div>
        <div className="col l4 offset-m1 m10 offset-s1 s10">
        <table className='highlight'>
        <tbody>
          <tr>
            <td>TAXABLE</td>
            <td>{data.taxable}</td>
          </tr>
          <tr>
            <td>IVA</td>
            <td>{data.iva}</td>
          </tr>
          <tr>
            <td>IRPF</td>
            <td>-{data.irpf}</td>
          </tr>
          <tr> 
            <td>TOTAL</td>
            <td>{data.amount}</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
      <div className='container'> <div className="divider"></div></div>
      
      <div className="container">
        <h5>NOTE</h5>    
        <p className='container-fluid'>

            {data.note}
        </p>

        </div>    
      <div className='container' style={{textAlign: 'center'}}>
        <a href="#!" onClick={(e)=>this.onBack(this.props.heading)} style={styleBox.savebtn} className="btn-flat">BACK</a>
      </div>
    </div>



      }
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
