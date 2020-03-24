// rgb(76,177,233)
import React, { Component } from 'react';

import tickIcon from "../images/drawable/Path.png"
import sbmtbtn from "../images/text-background.png"

class Subscription extends Component {

  render() {
    // var {isAuthenticated ,userInfo} = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
        <h5 className="row" style={styleBox.mainHeading}>SUBSCRIPTION</h5>
      <div className="row">

        <div className="col s12 m12 l6">
            <div className="card" style={styleBox.PlanBox}>
              <div style={styleBox.bluishHeading} >
                Basic Plan (Free)
              </div>
              <div className="container" >
                  {basicPlan.map(plan=><Plan discription={plan}></Plan>)}
              </div>
            </div>
        </div>
        <div className="col s12 m12 l6 right" >
          <div className="card" style={styleBox.PlanBox}>
              <div style={styleBox.bluishHeading} >Premium plan (39€/mo)</div>
              <div className="container">
              {premiumPlan.map(plan=><Plan discription={plan}></Plan>)}
              </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const Plan = (props) =>{
    return(
        <div style={styleBox.plan}>
            <div style={styleBox.iconContainer}>
                <img alt="" src={tickIcon} 
                style={{width: 16,
                height: 16
                }}/>
            </div>
            <div style={styleBox.discContainer}>{props.discription}</div>
        </div>
)}


const styleBox = {
    main: {
      margin: 30,
      borderRadius: 10,
      minHeight: 500,
      padding: 40,
      color: "darkgrey",
      boxShadow:"0px 1px 2px 2px #ceeef2"
    },
    content: {
      padding: 20,
      textAlign: "center",
      color: "grey"
    },

    bluishHeading: {
        color: "white",
        padding: 7,
        paddingLeft: 15,
        background: `url(${sbmtbtn}) no-repeat center/cover`,
        width: 270,
        height: 35,
        display: "inline-block",
        marginLeft: -20,
        marginBottom: 10
    },
    mainHeading: {
      marginBottom: 0,
      fontWeight: "bold",
      color : "rgb(76,177,233)",
      paddingLeft: "15px"
    },
    PlanBox:{
      padding: 20,
      borderRadius: 5,
      border: "2px solid rgb(76,177,233)",
      paddingBottom: "45px !important"
    },
    plan: {
        display: "flex"
    },
    iconContainer: {
        width: 16
    },  
    discContainer: {
        flex: 1
    },

  }

  const basicPlan = [
      "Add contacts, invoices & expenses.",
      "Auto-digitalization of documents.",
      "Download or upload tax documents.",
      "Sync your bank account.",
      "Conigure your taxes Forecastss and deadlines for tax modules.",
      "Financial analysis chart of your buisness Invoice generator.",
      "Limited fiscal advice via chat.",
      "Storage upto 150mb."
  ],
  premiumPlan = [
      "All features of basic plan.",
      "Free fastrack autonomo registration.",
      "Free transfer from your old manager.",
      "Preparation and presentation of taxes (Models 111, 115, 123, 130, 180, 190, 193, 303, 347, 349, 390)",
      "Full-time fiscal advisor on chat, mail or call.",
      "Available on IOS / Android / Web.",
      "Unlimited storage."
  ]
export default Subscription;
