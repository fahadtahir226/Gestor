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
            El  uso de esta aplicación (en adelante, “App”) está sujeta a lo previsto en el presente aviso legal y condiciones del uso de la web (en adelante, las “Condiciones de Uso”), por lo que el usuario (en adelante, “el Usuario”) deberá leerlo detenidamente cada vez que acceda al mismo.
            </Typography>

            <Typography style={styleBox.heading}>
            El acceso a la App, descarga y/o el uso de los materiales contenidos en la misma implican que el Usuario ha leído, conoce y acepta, sin reserva alguna, las presentes Condiciones de Uso, debiendo acceder periódicamente a las mismas para su conocimiento, pues éstas podrán ser modificadas o actualizadas de manera unilateral por parte del titular de la App. El Usuario quedará sujeto a las modificaciones efectuadas, implicando que conoce y consciente dicha modificación tácitamente cuando haga uso de la App TheGestor.
            </Typography>

            <Typography style={styleBox.heading}>
            Las Condiciones de Uso regulan el uso de la App TheGestor, ya sea con su actual denominación o con cualquier otra con la que pueda figurar en el futuro, así como las responsabilidades derivadas de la utilización de la misma. En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, del 11 de julio, de servicios de la sociedad de la información y del comercio electrónico (en adelante, LSSI-CE) se facilita la información general de este Sitio Web.
            </Typography>

            <Typography style={styleBox.heading}>
            En cumplimiento con el deber de información previsto en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (en adelante, “LSSI-CE), se facilita la siguiente información general de esta App.
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