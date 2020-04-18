import React from 'react';

import {Link} from 'react-router-dom';
import logo from "../../images/drawable/logo.png";

// 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from '@material-ui/core/Typography';

// Icons 
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import EuroIcon from '@material-ui/icons/Euro';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LockIcon from '@material-ui/icons/Lock';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ReportIcon from '@material-ui/icons/Report';

class SideBar extends React.Component {
    // var {isAuthenticated, userInfo} = props;
    ListItemLink = (props) => {
        return <ListItem button component="a" {...props} />;
    }
  render(){
    return (
      <ul className="collection sidebar" style={styleBox.Ul}>
          {/* Logo */}
        <li style={styleBox.Li} ><img alt="Logo" style={styleBox.logo} src={logo} /></li>

        {/* Top 3 */}
        {/* Home */}
        <List>
            <ListItem  button component="a"  href="/home" style={styleBox.Li}>
                <ListItemIcon>
                    <HomeIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Home</Typography>
                </ListItemText>
            </ListItem>
            {/* My Gestor */}
            <ListItem  button component="a"  href="/home/mygestor" style={styleBox.Li}>
                <ListItemIcon>
                    <PersonIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>My Gestor</Typography>
                </ListItemText>
            </ListItem>
            {/* Bank Account */}
            <ListItem  button component="a"  href="/home/mygestor" style={styleBox.Li}>
                <ListItemIcon>
                    <AccountBalanceIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Bank Account</Typography>
                </ListItemText>
            </ListItem>
        </List>
        {/* Mid Topics */}
        <li style={styleBox.LiHeadings} >Manage</li>

        <List>
            <ListItem  button component="a"  href="/home/expense" style={styleBox.Li}>
                <ListItemIcon>
                    <AttachMoneyIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Expense</Typography>
                </ListItemText>
            </ListItem>
            {/* My Gestor */}
            <ListItem  button component="a"  href="/home/income" style={styleBox.Li}>
                <ListItemIcon>
                    <AttachMoneyIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Income</Typography>
                </ListItemText>
            </ListItem>
            {/* Bank Account */}
            <ListItem  button component="a"  href="/home/clients" style={styleBox.Li}>
                <ListItemIcon>
                    <DeviceHubIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Clients</Typography>
                </ListItemText>
            </ListItem>
        </List>
        {/* Bottom */}
        <li style={styleBox.LiHeadings} >Settings {"&"} help</li>

        <List>
            <ListItem  button component="a"  href="/home/subscription" style={styleBox.Li}>
                <ListItemIcon>
                    <LocalAtmIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Subscription</Typography>
                </ListItemText>
            </ListItem>
            {/* My Gestor */}
            <ListItem  button component="a"  href="/home/configure" style={styleBox.Li}>
                <ListItemIcon>
                    <SettingsIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Configurations</Typography>
                </ListItemText>
            </ListItem>
            {/* Bank Account */}
            <ListItem  button component="a"  href="/home/doc" style={styleBox.Li}>
                <ListItemIcon>
                    <DescriptionIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Documents</Typography>
                </ListItemText>
            </ListItem>
             {/* Bank Account */}
             <ListItem  button component="a"  href="/home/faq" style={styleBox.Li}>
                <ListItemIcon>
                    <HelpOutlineIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>FAQs</Typography>
                </ListItemText>
            </ListItem>
             {/* Bank Account */}
             <ListItem  button component="a"  href="/home/security" style={styleBox.Li}>
                <ListItemIcon>
                    <LockIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Security</Typography>
                </ListItemText>
            </ListItem>
             {/* Bank Account */}
             <ListItem  button component="a"  href="/home/help" style={styleBox.Li}>
                <ListItemIcon>
                    <LiveHelpIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>Help</Typography>
                </ListItemText>
            </ListItem>
             {/* Bank Account */}
             <ListItem  button component="a"  href="/home/termsAndCond" style={styleBox.Li}>
                <ListItemIcon>
                    <ReportIcon style={styleBox.icon} />
                </ListItemIcon>
                <ListItemText >
                    <Typography style={styleBox.navlinkstyle}>T{"&"}C</Typography>
                </ListItemText>
            </ListItem>
        </List>

      </ul>
    )
  }
}
const styleBox = {
    Ul: {
      margin: 0,
      background: "white",
      border: "1px solid grey",
      position : "fixed",
      height : "100%",
      overflow : "auto"
    },
    logo: {
      width:  150,
      display: "block",
      padding: 10,
      paddingTop: 20,
      margin: "0px auto",
    },
    LiHeadings :{
        paddingLeft: 20,
        background: "white",
        border: "0px solid transparent",     
        fontWeight: "regular",
        color :"dimgray",
        textTransform : "Capitalize"   
    },
    Li: {
      background: "white",
      border: "0px solid transparent",
      width : "100%",
      margin : "auto"

    },
    icon: {
        verticalAlign: "baseline",
        fontSize: 25,
        float: "left",
        marginRight: 10,
        color: "dimgray"
    },
    navlinkstyle:{
        fontSize : "18px",
        fontWeight: "regular",
        color :"dimgray",
        textTransform : "Capitalize"
    }
}

export default SideBar;