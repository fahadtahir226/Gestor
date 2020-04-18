import React, { Component } from 'react';
import  {data}  from "./TCdata";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class TermsAndCond extends Component {

render() {
  return (
    <div className="container-fluid card z-depth-1" style={styleBox.main}>
      <div className="row">
      <h4 className="col s12 m12 l12 " style={styleBox.mainHeading} >Term & Conditions</h4>
        
      </div>
      <div className="row">
        <div className="col s12 m12 l12" >
            <div>
            <Typography style={styleBox.heading}>
              The use of this application (hereinafter "App") is subject to the provisions of the this legal notice and conditions of use of the web (hereinafter, the "Conditions of Use"), so the user (hereinafter, "the User) must read it carefully every time you access it. Access to the App, download and / or use of the materials contained in the App imply that the User has read, knows and accepts, without reservation, these Conditions of Use, having to periodically access the same for your knowledge, as these may be modified or updated unilaterally by the owner of the App. The User will be subject to the modifications made, implying that you know and tacitly aware of such modification when using the App TheGestor. The Conditions of Use regulate the use of the App TheGestor, either with its current denomination or any other with which it may appear in the future, as well as the responsibilities derived from the use of the same. In compliance with the duty of information contained in article 10 of the Law 34/2002, of July 11, of services of the information society and the electronic commerce (hereinafter, LSSI-CE) general information is provided
              of this Website. In compliance with the duty of information provided in article 10 of the
              Law 34/2002, of July 11, on Services of the Information Society and the Electronic Commerce (hereinafter “LSSI-CE), the following is provided general information of this App.
            </Typography>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col l12 m12 s12">
        <Expandable heading="I" questions={data.ownership}/>
        <Expandable heading="II" questions={data.users}/>
        <Expandable heading="III" questions={data.generalconditions}/>
        <Expandable heading="IV" questions={data.information}/>
        <Expandable heading="V" questions={data.link}/>
        <Expandable heading="VI" questions={data.modification}/>
        <Expandable heading="VII" questions={data.protection}/>
        <Expandable heading="VIII" questions={data.property}/>
        <Expandable heading="IX" questions={data.laws}/>
        </div>
      </div>
    </div>
    )
}
}


const Expandable = (data) =>{
  return(
    <div>
      {data.questions.map((que,key)=>(
        <ExpansionPanel className="expandable" key={key} >
          <ExpansionPanelSummary
            className="MuiExpansionPanel-rounded expandable-heading"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={styleBox.heading}>{ data.heading + " - " + que[0]}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="expandable-description">
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
        background: "linear-gradient(90deg, rgba(15,213,245,1) 0%, rgba(115,0,255,0.7321564749385534) 100%)",
        borderRadius : "25px",
        color : "white",
        margin  :"10px"
    }
  }
export default TermsAndCond;