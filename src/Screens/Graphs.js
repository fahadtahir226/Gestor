import React, { Component } from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import "../css/style.css"

class Graphs extends Component {
  constructor(props) {
    super(props);
    let now = new Date().getMonth(), toShow;
    if(now < 3) toShow = 0
    else if(now < 6) toShow = 1
    else if(now < 9) toShow = 2
    else if(now < 12) toShow = 3
    this.state = { optionValue : toShow,taxesQtr: toShow };
  }

  calculateIRPF(incQtr,expQtr, irpfExp){
    let irpf = [], irpfExpense = this.sumOfArrayy(irpfExp);
    irpf[0] = Math.round((0.2 * (incQtr[0] - expQtr[0]) + irpfExpense[0]) + Number.EPSILON * 100) / 100;
    irpf[1] = Math.round((0.2 * (incQtr[1] - expQtr[1]) + irpfExpense[1]) + Number.EPSILON * 100) / 100;
    irpf[2] = Math.round((0.2 * (incQtr[2] - expQtr[2]) + irpfExpense[2]) + Number.EPSILON * 100) / 100;
    irpf[3] = Math.round((0.2 * (incQtr[3] - expQtr[3]) + irpfExpense[3]) + Number.EPSILON * 100) / 100;
    


    return irpf;
  }

  getSum(total, num) {
    return total + Math.round(num);
  }

  sumOfArrayy(arry){
    let total = []
        total[0] = arry[0] + arry[1] + arry[2];
        total[1] = arry[3] + arry[4] + arry[5];
        total[2] = arry[6] + arry[7] + arry[8];
        total[3] = arry[9] + arry[10] + arry[11];
    return total;
  }
  render() {
    let {userData, models} = this.props;
    console.log(models);
    // let {ivaInc, irpfInc, retInc, ivaExp, irpfExp, retExp } = userData;

    let incQtr = [],expQtr = [];
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var data1 = [];
    if(userData == null){
      data1 = [];
    }else{
      incQtr = 
        [userData.inc[0] + userData.inc[1] + userData.inc[2] ,
        userData.inc[3] + userData.inc[4] + userData.inc[5] ,
        userData.inc[6] + userData.inc[7] + userData.inc[8] ,
        userData.inc[9] + userData.inc[10] + userData.inc[11]]
      expQtr =  [
        userData.exp[0] + userData.exp[1] + userData.exp[2] ,
        userData.exp[3] + userData.exp[4] + userData.exp[5] ,
        userData.exp[6] + userData.exp[7] + userData.exp[8] ,
        userData.exp[9] + userData.exp[10] + userData.exp[11]]
      months.map((eachMonth, index) => {
        data1.push({
          month: eachMonth,
          mode: "Income",
          temperature: userData.inc[index]
        })
        data1.push({
          month: eachMonth,
          mode: "Expense",
          temperature: userData.exp[index]
        })
      })
      var barchartdata = [
        {
          name: "Income",
          // vote: (this.state.optionValue != 0 ? incQtr[this.state.optionValue-1] : incQtr[0])
          vote: incQtr[this.state.optionValue]
        },
        {
          name: "Expense",
          // vote: (this.state.optionValue != 0 ? expQtr[this.state.optionValue-1] : expQtr[0])
          vote: expQtr[this.state.optionValue]
        }
      ];

    }
    const scale = {
      vote: {
        min: 0
      }
    };
    
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    let totalIva =  userData ? this.sumOfArrayy(this.props.userData.ivaInc)  : null, //- this.sumOfArrayy(this.props.userData.ivaExp)
    totalret =  userData ? this.sumOfArrayy(this.props.userData.irpfInc) : null,
    totalTaxes = userData ? this.sumOfArrayy(this.props.userData.inc)  : null, //- this.sumOfArrayy(this.props.userData.exp)
    totalIrpf = userData ? this.calculateIRPF(incQtr,expQtr, this.props.userData.irpfExp) : null;
    // console.log("Total retention:",totalret);
    // console.log("Total taxes:",totalTaxes);
    // console.log("Total irpf:",totalIrpf);
    // console.log("Total iva:",totalIva);

   
    return (
      <div>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div style={{ width: "90%", margin: "auto" }}>
                <div className="section">
                  <div className="row vertical-modern-dashboard">
                    {/* First Start */}
                    <div className="col s12 m12 l6">
                      <div className="card" style={styleBox.cardstyle}>
                        <div className="card-content">
                          <div className="row" style={{ marginBottom: "0px" }}>
                              <h4
                                style={{
                                  color: "#4aa4ef",
                                  fontWeight: "700",
                                  margin: "0"
                                }}
                              >
                                ANNUAL:
                              </h4>
                          </div>
                          <br />
                          <div
                            style={{
                              height: "200px"
                            }}
                          >
                            <Chart height={300} data={data1} scale={cols} forceFit>
                              <Axis name="month" />
                              <Axis
                                name=""
                                label={{
                                  formatter: val => `${val}$`
                                }}
                              />
                              <Tooltip
                                crosshairs={{
                                  type: "x"
                                }}
                              />
                              <Geom
                                type="line"
                                position="month*temperature"
                                size={2}
                                color={["mode",["#3DF6EA", "#FA1B13"]]}
                                shape={"smooth"}
                              />
                              <Geom
                                type="point"
                                position="month*temperature"
                                size={4}
                                shape={"circle"}
                                color={["mode",["#3DF6EA", "#FA1B13"]]}
                                style={{
                                  stroke: "#fff"
                                }}
                              />
                            </Chart>

                          </div>
                        </div>
                      </div>
                    </div>
                    {/* First End */}
                    {/* Second Start */}
                    <div className="col s12 m12 l6 animate fadeRight">
                      <div
                        className="card user-statistics-card animate fadeLeft"
                        style={styleBox.cardstyle}
                      >
                        <div className="card-content">
                        <div className="row" style={{ marginBottom: "0px" }}>
                            <div className="col sm6 m6 12">
                              <h4
                                style={{
                                  color: "#4aa4ef",
                                  fontWeight: "700",
                                  margin: "0"
                                }}
                              >
                                QUARTER:
                              </h4>
                            </div>
                            <div className="col sm6 m6 12 right">
                              <span className="input-field">
                                <select
                                  className="select2 browser-default form-control"
                                  style={{ width: "150px", color: "black" }} 
                                  defaultValue={this.state.optionValue}
                                  onChange={(event)=> this.setState({optionValue : event.target.value})  }
                                >
                                  <option value="0"> 1T 2020</option>
                                  <option value="1"> 2T 2020</option>
                                  <option value="2"> 3T 2020</option>
                                  <option value="3"> 4T 2020</option>
                                </select>
                              </span>
                            </div>
                          </div>
                          <div className="row" style={{ "position" : "relative" , "width": "100%", "height": "100%", "cursor": "pointer"}}>
                          <Chart
                            data={barchartdata}
                            padding={[20, 20, 20, 20]}
                            scale={scale}
                          >
                            <Geom
                              type="interval"
                              position="name*vote"
                              color={["name", ["#3DF6EA", "#FA1B13"]]}
                              size={120}
                            />
                            <Tooltip />
                          </Chart>

                          </div>
                          
                        </div>
                      </div>
                    </div>
                    {/* Second End */}
                  </div>

                  <div className="row">
                    {/* Third Start */}
                    <div className="col s12 m12 l6">
                      <div className="card" style={styleBox.bottomcardstyle}>
                        <div className="card-content">
                          <div className="row" style={{ marginBottom: "0px" }}>
                            <div className="col sm6 m6 12">
                              <h4
                                style={{
                                  color: "#4aa4ef",
                                  fontWeight: "700",
                                  margin: "0"
                                }}
                              >
                                TAXES:
                              </h4>
                            </div>
                            <div className="col sm6 m6 12 right">
                              <span className="input-field">
                                <select
                                  className="select2 browser-default form-control"
                                  style={{ width: "150px", color: "black" }}
                                  defaultValue={this.state.taxesQtr}
                                  onChange={(event)=> this.setState({taxesQtr : event.target.value})}
                                >
                                  <option value="0"> 1T 2020</option>
                                  <option value="1"> 2T 2020</option>
                                  <option value="2"> 3T 2020</option>
                                  <option value="3"> 4T 2020</option>
                                </select>
                              </span>
                            </div>
                          </div>
                          <br />
                          <div>
                            <table>
                              <tbody>
                                <tr style={{ borderBottom: "0px" }}>
                                  <td
                                    style={{
                                      color: "#4aa4ef",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    TOTAL TAXES
                                </td>
                                  <td
                                    className="right right-align"
                                    style={{
                                      backgroundColor: "hsl(0, 0%, 83%, 0.5)",
                                      width: "100%",
                                      margin: "8px",
                                      paddingRight: "10px"
                                    }}
                                  >
                                    {totalTaxes ? totalTaxes[this.state.taxesQtr] : null}
                                </td>
                                </tr>
                                <tr style={{ borderBottom: "0px" }}>
                                  <td
                                    style={{
                                      color: "#4aa4ef",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    IVA
                                </td>
                                  <td
                                    className="right right-align"
                                    style={{
                                      backgroundColor: "hsl(0, 0%, 83%, 0.5)",
                                      width: "100%",
                                      margin: "8px",
                                      paddingRight: "10px"
                                    }}
                                  >
                                  {totalIva ? totalIva[this.state.taxesQtr] : null}

                                </td>
                                </tr>
                                <tr style={{ borderBottom: "0px" }}>
                                  <td
                                    style={{
                                      color: "#4aa4ef",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    IRPF
                                </td>
                                  <td
                                    className="right right-align"
                                    style={{
                                      backgroundColor: "hsl(0, 0%, 83%, 0.5)",
                                      width: "100%",
                                      margin: "8px",
                                      paddingRight: "10px"
                                    }}
                                  >
                                  {totalIrpf ? totalIrpf[this.state.taxesQtr]: null}
                                </td>
                                </tr>
                                <tr style={{ borderBottom: "0px" }}>
                                  <td
                                    style={{
                                      color: "#4aa4ef",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    RETENTIONS
                                </td>
                                  <td
                                    className="right right-align"
                                    style={{
                                      backgroundColor: "hsl(0, 0%, 83%, 0.5)",
                                      width: "100%",
                                      margin: "8px",
                                      paddingRight: "10px"
                                    }}
                                  >
                                  {totalret ? totalret[this.state.taxesQtr] : null}

                                </td>
                                </tr>
                              </tbody>
                            </table>


                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Third End */}
                    {/* Fourth Start */}
                    <div className="col s12 m12 l6 animate fadeRight">
                      <div
                        className="card user-statistics-card animate fadeLeft"
                        style={styleBox.bottomcardstyle}
                      >
                        <div className="card-content">
                          <div className="col sm12 m12 12">
                            <h4
                              style={styleBox.mainheading}
                            >
                              NEXT FILING:
                            </h4>
                          </div>
                          <br />
                          <table><br />
                            <tbody>
                              {models.map(model => {
                                if(model.status === true)
                              return <tr>
                                <td>
                                  <div style={styleBox.box}>
                                    <div>{model.days}</div>
                                    <div>Days</div>
                                  </div>
                                </td>
                                <td>
                                  <div style={{ color: "#4aa4ef", fontWeight: "bold !important"}}>
                                    {model.qtr}
                                  </div>
                                  <div>Model {model.name}</div>
                                </td>
                                <td className="right right-align">
                                  <div style={{ color: "#4aa4ef", fontWeight: "bold !important" }}> {model.amount} &euro;</div>
                                  <div>15.01.20</div>
                                </td>
                              </tr>
                              })
                              }

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* Fourth End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styleBox = {
  main: {
    // backgroundImage : `url(${bkground})`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    minHeight: 500,
    // paddingTop: 130,
  },
  cardstyle: {
    minHeight: 330,
    maxHeight: 330,
    borderRadius: "20px"
  },

  bottomcardstyle: {
    minHeight: 390,
    maxHeight: 390,
    overflow: "auto",
    borderRadius: "20px"
  },
  box: {
    width: "50px",
    height: "50px",
    borderRadius: "250px",
    fontSize: "12.5px",
    paddingTop: "12.5px",
    color: "#fff",
    lineHeight: "12.5px",
    textAlign: "center",
    background: "#4aa4ef"
  },
  heading : {
    color: "#4aa4ef",
    fontWeight: "bold !important"
  },
  mainheading: {
    color: "#4aa4ef",
    fontWeight: "700",
    margin: "0"
  }
}


export default Graphs;
