import React, { Component } from 'react';
import  {data}  from "./FAQData";
// import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class FAQ extends Component {

render() {
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <h4 className="col s12 m12 l12 " style={styleBox.mainHeading} >FAQs</h4>
      <div className="row">
        <div className="col l12 m12 s12">
        <Expandable heading="The Gestor" questions={data.TheGestor}/>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m12 l6" >
          <Expandable heading="BASIC PLANS" questions={data.BasicPlan}/>
          <Expandable heading="TAXES" questions={data.Taxes} />
          <Expandable heading="Chaneg Plan" questions={data.ChangePlan} />
          <Expandable heading="START WITH THE MANAGER" questions={data.StartWithTheManager} />
        </div>
        <div className="col s12 m12 l6" >
          <Expandable heading="PRO PLANS" questions={data.ProPlan} />
          <Expandable heading="Security" questions={data.Security} />
          <Expandable heading="My profile" questions={data.MyProfile} />
          <Expandable heading="My Account" questions={data.MyAccount} />
        </div>
      </div>
    </div>
    )
}
}



const Expandable = (data) =>{
  return(
    <div>
      <h5 style={styleBox.FAQheading}>{data.heading}</h5>
      {data.questions.map((que,key)=>(
        <ExpansionPanel style={styleBox.expandable} key={key} >
          <ExpansionPanelSummary
          className="MuiExpansionPanel-rounded"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={styleBox.heading}>{que[0]}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={styleBox.content}>
            {que[1]}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel> 
      ))}
      </div>
  )
}



const styleBox = {
  main: {
    marginTop: "50px !important",
    margin: 30,
    borderRadius: 10,
    minHeight: 500,
    padding: 30,
    color: "#1e88e5",
    boxShadow:"0px 1px 2px 2px #ceeef2"
  },
  mainHeading: {
    marginBottom: 0,
    fontWeight: "bold"
  },
  listheader: {
    border: "1px solid transparent ",

  },
  listItem: {
      borderTop: "1px solid transparent ",
      borderRight: "1px solid transparent ",
      borderLeft: "1px solid transparent "
  },
  heading: {
    fontSize : "21px",
    fontWeight: "regular",
    color: "#1e88e5",
  },
  content : {
    fontSize : "18px",
    fontWeight: "regular",
    color: "#4f4e4e",
  },
  FAQheading : {
    fontWeight: "bold",
    color: "#1e88e5",
    textTransform : "uppercase"
  },
  expandable : {
    "&:hover": {
      background: "linear-gradient(90deg, rgba(15,213,245,1) 0%, rgba(115,0,255,0.7321564749385534) 100%)",
      borderRadius : "25px",
      color : "white",
      },
  }
}

export default FAQ;
