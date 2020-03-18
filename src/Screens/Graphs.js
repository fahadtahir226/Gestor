import React, { Component } from 'react';

class Graphs extends Component {

render() {
    // var {isAuthenticated, userInfo} = this.props;
  return (
    <div>

      <div id="main">
        <div className="row">
            <div className="col s12">
                <div style={{ width:"90%", margin : "auto" }}>
                    <div className="section">
                        <div className="row vertical-modern-dashboard">
                            <div className="col s12 m6 l6">
                                <div className="card"  style={{ borderRadius: "20px" }}>
                                    <div className="card-content">

                                        <div className="row">
                                            <div className="col sm6 m6 12">
                                                <h4 style={{ color: "#4aa4ef", fontWeight:"900 !important" }}>ANNUAL:</h4>
                                            </div>
                                            <div className="col sm6 m6 12 right">
                                                <span className="input-field">
                                                  <select className="select2 browser-default form-control" style={{ width : "150px", color: "black" }}>
                                                    <option> 1T 2020</option>
                                                    <option> 2T 2020</option>
                                                    <option> 3T 2020</option>
                                                    <option> 4T 2020</option>
                                                  </select>
                                                </span>
                                            </div>

                                        </div>
                                        <br/>

                                        <div className="total-transaction-container">
                                            <div id="total-transaction-line-chart" className="total-transaction-shadow"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6 animate fadeRight">
                                <div className="card user-statistics-card animate fadeLeft"  style={{ borderRadius: "20px" }}>
                                    <div className="card-content">
                                        <div className="row">
                                            <div className="col sm6 m6 12">
                                                <h4 style={{ color: "#4aa4ef", fontWeight:"900 !important" }}>QUARTER:</h4>
                                            </div>
                                            <div className="col sm6 m6 12 right">
                                                <span className="input-field">
                                                  <select className="select2 browser-default " style={{ width : "150px" }}>
                                                    <option> 1T 2020</option>
                                                    <option> 2T 2020</option>
                                                    <option> 3T 2020</option>
                                                    <option> 4T 2020</option>
                                                  </select>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12 m6">
                                                <ul className="collection border-none mb-0">
                                                    <li className="collection-item avatar">
                                                        <i className="material-icons circle pink accent-2">trending_up</i>
                                                        <p className="medium-small">This year</p>
                                                        <h5 className="mt-0 mb-0">60%</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col s12 m6">
                                                <ul className="collection border-none mb-0">
                                                    <li className="collection-item avatar">
                                                        <i className="material-icons circle purple accent-4">trending_down</i>
                                                        <p className="medium-small">Last year</p>
                                                        <h5 className="mt-0 mb-0">40%</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <div className="user-statistics-container">
                                            <div id="user-statistics-bar-chart" className="user-statistics-shadow ct-golden-section"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 m6 l6">
                                <div className="card" style={{ borderRadius: "20px" }}>
                                    <div className="card-content">

                                        <h4 style={{ color: "#4aa4ef",fontWeight: "600" }}>TAXES:</h4>
                                        <table>
                                            <tbody>
                                                <tr style={{ borderBottom: "0px" }}>
                                                    <td style={{ color: "#4aa4ef", fontWeight:"bold" }}>TOTAL TAXES</td>
                                                    <td className="right right-align" style={{ backgroundColor:"hsl(0, 0%, 83%, 0.5)", width: "100%", margin: "8px", paddingRight: "10px" }}>365 &euro;</td>
                                                </tr>
                                                <tr style={{ borderBottom: "0px" }}>
                                                    <td style={{ color: "#4aa4ef", fontWeight:"bold" }}>IVA</td>
                                                    <td className="right right-align" style={{ backgroundColor:"hsl(0, 0%, 83%, 0.5)", width: "100%", margin: "8px", paddingRight: "10px" }}>336</td>
                                                </tr>
                                                <tr style={{ borderBottom: "0px" }}>
                                                    <td style={{ color: "#4aa4ef", fontWeight:"bold" }}>IRPF</td>
                                                    <td className="right right-align" style={{ backgroundColor:"hsl(0, 0%, 83%, 0.5)", width: "100%", margin: "8px", paddingRight: "10px" }}>29</td>
                                                </tr>
                                                <tr style={{ borderBottom: "0px" }}>
                                                    <td style={{ color: "#4aa4ef", fontWeight:"bold" }}>RETENTIONS</td>
                                                    <td className="right right-align" style={{ backgroundColor:"hsl(0, 0%, 83%, 0.5)", width: "100%", margin: "8px", paddingRight: "10px" }}>0</td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6 animate fadeRight">
                                <div className="card user-statistics-card animate fadeLeft"  style={{ borderRadius: "20px" }}>
                                    <div className="card-content">
                                        <h4 className="card-title ">
                                            <h4 style={{ color: "#4aa4ef", fontWeight:"900 !important" }}>NEXT FILING:</h4>
                                        </h4>
                                        <br/>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div style={{ width: "50px", height: "50px", borderRadius: "250px", fontSize: "12.5px", paddingTop: "12.5px", color: "#fff", lineHeight: "12.5px", textAlign: "center", background: "#4aa4ef" }} >
                                                            <div>27</div>
                                                            <div>Days</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style={{ color: "#4aa4ef", fontWeight:"bold !important" }}>IRPF (IT 2020)</div>
                                                        <div>Model 303</div>
                                                    </td>

                                                    <td className="right right-align">
                                                        <div style={{ color: "#4aa4ef", fontWeight:"bold !important" }}>130.00 &euro;</div>
                                                        <div>15.01.20</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div style={{ width: "50px", height: "50px", borderRadius: "250px", fontSize: "12.5px", paddingTop: "12.5px", color: "#fff", lineHeight: "12.5px", textAlign: "center", background: "#4aa4ef" }}>
                                                            <div>27</div>
                                                            <div>Days</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style={{ color: "#4aa4ef", fontWeight:"bold !important" }}>IRPF (IT 2020)</div>
                                                        <div>Model 303</div>
                                                    </td>

                                                    <td className="right right-align">
                                                        <div style={{ color: "#4aa4ef", fontWeight:"bold !important" }}>290.00 &euro;</div>
                                                        <div>15.01.20</div>
                                                    </td>
                                                </tr>
                                                <tr style={{ borderBottom: "0px" }}>
                                                    <td>
                                                        <div style={{ width: "50px", height: "50px", borderRadius: "250px", fontSize: "12.5px", paddingTop: "12.5px", color: "#fff", lineHeight: "12.5px", textAlign: "center", background: "#4aa4ef" }}>
                                                            <div>27</div>
                                                            <div>Days</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style={{ color: "#4aa4ef", fontWeight:"bold !important" }}>Annual IVA (2020)</div>
                                                        <div>Model 390</div>
                                                    </td>
                                                    <td className="right right-align">
                                                        <div style={{ color: "#4aa4ef", fontWeight:"bold !important" }}>0.00 &euro;</div>
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
