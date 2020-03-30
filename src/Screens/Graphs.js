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
import ReactChart from "react-google-charts";
import "../css/style.css"

class Graphs extends Component {
  constructor(props) {
    console.log("Graphs -> constructor -> props", props)
    super();
    const data = [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ]
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4]
        ]
      }
    ];
    const barChart = [
      ["", "", { role: "style" }],
      ["", 8, "red"], // RGB value
      ["", 10, "rgb(74, 164, 239)"] // English color name
    ];
    const series = {
      type: "bar"
    };

    const axes = [
      { primary: true, type: "linear", position: "bottom", show: true },
      { type: "linear", position: "left", show: true }
    ];

    this.state = {
      data: data,
      axes: axes,
      series: series,
      barChart: barChart
    };
  }
  getSum(total, num) {
    return total + Math.round(num);
  }
  render() {
    var {userInfo, userData} = this.props;
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var data1 = [];
    if(userData == null){
      data1 = [];
    }else{
      months.map((eachMonth, index) => {
        console.log("Graphs -> render -> eachMonth, index", eachMonth, index)
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
      var data = [
        {
          name: "Income",
          vote: userData.inc.reduce(this.getSum, 0)
        },
        {
          name: "Expense",
          vote: userData.exp.reduce(this.getSum, 0)
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
                                color={"mode"}
                                shape={"smooth"}
                              />
                              <Geom
                                type="point"
                                position="month*temperature"
                                size={4}
                                shape={"circle"}
                                color={"mode"}
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
                                >
                                  <option> 1T 2020</option>
                                  <option> 2T 2020</option>
                                  <option> 3T 2020</option>
                                  <option> 4T 2020</option>
                                </select>
                              </span>
                            </div>
                          </div>
                          <div className="row" style={{ "position" : "relative",  "top": "-60px" }}>
                          <Chart
                            data={data}
                            padding={[100, 20, 100, 20]}
                            scale={scale}
                            forceFit
                          >
                            <Axis
                              name="vote"
                              labels={null}
                              title={null}
                              line={null}
                              tickLine={null}
                            />
                            <Geom
                              type="interval"
                              position="name*vote"
                              color={["name", ["red", ""]]}
                            />
                            <Tooltip />
                            <Geom
                              type="point"
                              position="name*vote"
                              size={0}
                            />
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
                                >
                                  <option> 1T 2020</option>
                                  <option> 2T 2020</option>
                                  <option> 3T 2020</option>
                                  <option> 4T 2020</option>
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
                                    365 &euro;
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
                                    336
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
                                    29
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
                                    0
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
                          <table>
                            <br />
                            <tbody>
                              <tr>
                                <td>
                                  <div
                                    style={styleBox.box}
                                  >
                                    <div>27</div>
                                    <div>Days</div>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={{
                                      color: "#4aa4ef",
                                      fontWeight: "bold !important"
                                    }}
                                  >
                                    IRPF (IT 2020)
                                  </div>
                                  <div>Model 303</div>
                                </td>

                                <td className="right right-align">
                                  <div
                                    style={{
                                      color: "#4aa4ef",
                                      fontWeight: "bold !important"
                                    }}
                                  >
                                    130.00 &euro;
                                  </div>
                                  <div>15.01.20</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div
                                    style={styleBox.box}
                                  >
                                    <div>27</div>
                                    <div>Days</div>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={styleBox.heading}
                                  >
                                    IRPF (IT 2020)
                                  </div>
                                  <div>Model 303</div>
                                </td>

                                <td className="right right-align">
                                  <div
                                    style={styleBox.heading}
                                  >
                                    290.00 &euro;
                                  </div>
                                  <div>15.01.20</div>
                                </td>
                              </tr>
                              <tr style={{ borderBottom: "0px" }}>
                                <td>
                                  <div style={styleBox.box}>
                                    <div>27</div>
                                    <div>Days</div>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={styleBox.heading}
                                  >
                                    Annual IVA (2020)
                                  </div>
                                  <div>Model 390</div>
                                </td>
                                <td className="right right-align">
                                  <div
                                    style={{
                                      color: "#4aa4ef",
                                      fontWeight: "bold !important"
                                    }}
                                  >
                                    0.00 &euro;
                                  </div>
                                  <div>15.01.20</div>
                                </td>
                                
                              </tr>
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
