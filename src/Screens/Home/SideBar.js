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
        <li style={styleBox.Li} className="collection-item wave-effect"><Link to="/home" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons ">home</i>Home</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/mygestor" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">person</i>My Gestor</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">account_balance</i>Bank Account</Link></li>

        {/* Mid Topics */}
        <li style={styleBox.LiHeadings} >Manage</li>

        <li style={styleBox.Li} className="collection-item"><Link to="/home/expense" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">attach_money</i>Expense</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/income" style={{color: "dimgray"}}> 
            <i style={styleBox.icon} className="material-icons">attach_money</i>Income</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/contacts" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">device_hub</i>Contact Us</Link></li>

        {/* Bottom */}
        <li style={styleBox.LiHeadings} >Settings {"&"} help</li>

        <li style={styleBox.Li} className="collection-item"><Link to="/home/subscription" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">local_atm</i>Subscription</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/configure" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">settings</i>Configurations</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/doc" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">description</i>Documents</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/faq" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">help_outline</i>FAQs</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/security" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">lock</i>Security</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/help" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">live_help</i>Help</Link></li>
        <li style={styleBox.Li} className="collection-item"><Link to="/home/" style={{color: "dimgray"}}>
            <i style={styleBox.icon} className="material-icons">report</i>T{"&"}C</Link></li>
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