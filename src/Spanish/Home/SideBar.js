import React from 'react';

import {Link} from 'react-router-dom';
import logo from "../../images/drawable/logo.png";

class SideBar extends React.Component {
    // var {isAuthenticated, userInfo} = props;
  render(){
    return (
      <ul className="collection" style={styleBox.Ul}>
          {/* Logo */}
        <li style={styleBox.Li} ><img alt="Logo" style={styleBox.logo} src={logo} /></li>

        {/* Top 3 */}
        <li style={styleBox.Li} className="collection-item wave-effect"><Link to="/es/home" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons ">home</i>Inicio</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/mygestor" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">person</i>My Gestor</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">account_balance</i>Cuenta bancaria</Link></li>

        {/* Mid Topics */}
        <li style={styleBox.LiHeadings} >Manage</li>

        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/expense" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">attach_money</i>Gastos</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/income" style={{color: "dimgray"}}> 
            <i style={styleBox.icon} className="material-icons">attach_money</i>Ingresos</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/clients" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">device_hub</i>Clientes</Link></li>

        {/* Bottom */}
        <li style={styleBox.LiHeadings} >Settings {"&"} help</li>

        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/subscription" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">local_atm</i>Suscripción</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/configure" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">settings</i>Configuraciones</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/doc" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">description</i>Documentos</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/faq" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">help_outline</i>Preguntas frecuentes</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/security" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">lock</i>Seguridad</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/help" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">live_help</i>Ayuda</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/es/home/termsAndCond" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">report</i>T Y C</Link></li>
      </ul>
    )
  }
}
const styleBox = {
    Ul: {
      margin: 0,
      border: "0px solid transparent",   
    },
    logo: {
      width:  150,
      display: "block",
      padding: 10,
      paddingTop: 20,
      margin: "0px auto",
    },
    LiHeadings :{
        padding: 10,
        paddingTop: 20,
        paddingLeft: 20,
        background: "white",
        border: "0px solid transparent",        
    },
    Li: {
      background: "white",
      border: "0px solid transparent",
      paddingTop: 4,
      paddingLeft: 25,

    },
    icon: {
        verticalAlign: "baseline",
        fontSize: 25,
        float: "left",
        marginRight: 10,
        color: "dimgray"
    }
}

export default SideBar;