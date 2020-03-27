import React, { Component } from "react";

import { Chart } from "react-charts";
import ReactChart from "react-google-charts";

class Graphs extends Component {
  constructor(props) {
    super();
    const data = [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7]
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
      { primary: true, type: "linear", position: "bottom", show: false },
      { type: "linear", position: "left", show: false }
    ];

    this.state = {
      data: data,
      axes: axes,
      series: series,
      barChart: barChart
    };
  }
  render() {
    // var {isAuthenticated, userInfo} = this.props;

    return (
      <div>
        <div id="main">
          <div className="row">
            <div className="col s12">
              <div style={{ width: "90%", margin: "auto" }}>
                <div className="section">
                  <div className="row vertical-modern-dashboard">
                    <div className="col s12 m6 l6">
                      <div className="card" style={{ borderRadius: "20px" }}>
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
                                ANNUAL:
                              </h4>
                            </div>

                          </div>
                          <br />
                          <div
                            style={{
                              height: "200px"
                            }}
                          >
                            <Chart
                              data={this.state.data}
                              axes={this.state.axes}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m6 l6 animate fadeRight">
                      <div
                        className="card user-statistics-card animate fadeLeft"
                        style={{ borderRadius: "20px" }}
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
                                  className="select2 browser-default "
                                  style={{ width: "150px" }}
                                >
                                  <option> 1T 2020</option>
                                  <option> 2T 2020</option>
                                  <option> 3T 2020</option>
                                  <option> 4T 2020</option>
                                </select>
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              height: "220px"
                            }}
                          >
                            <ReactChart
                              chartType="ColumnChart"
                              width="100%"
                              height="220px"
                              data={this.state.barChart}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col s12 m6 l6">
                      <div className="card" style={{ borderRadius: "20px" }}>
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
                                ANNUAL:
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
                    <div className="col s12 m6 l6 animate fadeRight">
                      <div
                        className="card user-statistics-card animate fadeLeft"
                        style={{ borderRadius: "20px" }}
                      >
                        <div className="card-content">
                          <div className="col sm12 m12 12">
                            <h4
                              style={{
                                color: "#4aa4ef",
                                fontWeight: "700",
                                margin: "0"
                              }}
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
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      borderRadius: "250px",
                                      fontSize: "12.5px",
                                      paddingTop: "12.5px",
                                      color: "#fff",
                                      lineHeight: "12.5px",
                                      textAlign: "center",
                                      background: "#4aa4ef"
                                    }}
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
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      borderRadius: "250px",
                                      fontSize: "12.5px",
                                      paddingTop: "12.5px",
                                      color: "#fff",
                                      lineHeight: "12.5px",
                                      textAlign: "center",
                                      background: "#4aa4ef"
                                    }}
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
                                    290.00 &euro;
                                  </div>
                                  <div>15.01.20</div>
                                </td>
                              </tr>
                              <tr style={{ borderBottom: "0px" }}>
                                <td>
                                  <div
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      borderRadius: "250px",
                                      fontSize: "12.5px",
                                      paddingTop: "12.5px",
                                      color: "#fff",
                                      lineHeight: "12.5px",
                                      textAlign: "center",
                                      background: "#4aa4ef"
                                    }}
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

// const styleBox = {
//     main: {
//         // backgroundImage : `url(${bkground})`,
//         width: "100%",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "contain",
//         minHeight: 500,
//         // paddingTop: 130,
//     },
// }

export default Graphs;
