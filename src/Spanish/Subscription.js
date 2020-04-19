// rgb(76,177,233)
import React, { Component } from 'react';

import tickIcon from "../images/drawable/Path.png"
import sbmtbtn from "../images/text-background.png"


import CardActionArea  from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import DoneAllIcon from '@material-ui/icons/DoneAll';

class Subscription extends Component {

  render() {
    // var {isAuthenticated ,userInfo} = this.props;
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
        <h5 className="row" style={styleBox.mainHeading}>SUBSCRIPTION</h5>

      <div style={{ display: "flex", margin: 24 }}>
      <Grid  container
        direction="row"
        justify="space-around"
        alignItems="stretch"
        spacing={4}
        >

          <Grid item xs={12} xs={12} md={6} lg={6} style={{ flex: "1", width: "100%" }}>
            <CardActionArea style={{ background: "white", height: "100%", width: "100%" }} href="#">
                <Card style={styleBox.PlanBox}>
                  <Typography variant="h5" component="h2" style={styleBox.bluishHeading}>
                  Basic Plan (Free)
                  </Typography>
                  <CardContent  style={{ background: "white", height: "100%", width: "100%" }}>
                    <Container xs="12" sm="12" md="12" lg="12">
                      {basicPlan.map((plan, key)=><Plan key={key} discription={plan}></Plan>)}
                    </Container>
                  </CardContent>
                </Card>
            </CardActionArea>
          </Grid>


          <Grid item xs={12} xs={12} md={6} lg={6} style={{ flex: "1", width: "100%" }}>
            <CardActionArea style={{ background: "white", height: "100%", width: "100%" }}  href="https://dynamic-form-72bea.firebaseapp.com/" >
                <Card style={styleBox.PlanBox}>
                  <Typography variant="h5" component="h2" style={styleBox.bluishHeading}>
                  Monthly plan (39€/mo)
                  </Typography>
                  <CardContent  style={{ background: "white", height: "100%", width: "100%" }}>
                    <Container xs="12" sm="12" md="12" lg="12">
                    {premiumPlan.map((plan, key)=><Plan key={key} discription={plan}></Plan>)}
                    </Container>
                  </CardContent>
                </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs={12} xs={12} md={6} lg={6} style={{ flex: "1", width: "100%" }}>
            <CardActionArea style={{ background: "white", height: "100%", width: "100%" }}  href="https://dynamic-form-72bea.firebaseapp.com/" >
                <Card style={styleBox.PlanBox}>
                  <Typography variant="h5" component="h2" style={styleBox.bluishHeading}>
                  Yearly plan (390€/mo)
                  </Typography>
                  <CardContent  style={{ background: "white", height: "100%", width: "100%" }}>
                    <Container xs="12" sm="12" md="12" lg="12">
                    {premiumPlan.map((plan, key)=><Plan key={key} discription={plan}></Plan>)}
                    </Container>
                  </CardContent>
                </Card>
            </CardActionArea>
          </Grid>

        </Grid>

      </div>
      
    </div>
    );
  }
}

const Plan = (props) =>{
    return(
        <div style={styleBox.plan}>
            <DoneAllIcon style={{ color: "green", marginRight : 10 }}></DoneAllIcon>
            <Typography variant="h6" component="p" style={{ color : "dimgray" }}>
              {props.discription}
            </Typography>
            
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
      width: "inherit",
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
      paddingBottom: "45px !important",
      minHeight: 300,
      height : "100%",
      width : "100%"
    },
    plan: {
        display: "flex"
    },
    iconContainer: {
        width: 16,
        marginRight : 16 
    },  
    discContainer: {
        flex: 1
    },
    flexcolumn: {
      flex: "1"
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
