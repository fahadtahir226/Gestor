import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

// Photos
import bkground from "../../images/maskgroup.png";

import ava from "../../images/avatar/avatar-10.png";

// side Bar Component
import SideBar from "./SideBar";
import Graphs from "../Graphs";
import Gestor from "../Gestor";

import Expense from "../Expense";
import Income from "../Income";
import Contacts from "../Contacts/Contacts";
import NewContact from "../Contacts/NewContact";

import Subscription from "../Subscription";
import Configuration from "../Configuration";
import Documents from "../Documents";
import FAQ from "../FAQ";
import Security from "../Security";
import Help from "../Help";

class Home extends Component {
  render() {
    var { isAuthenticated, userInfo } = this.props;
    return (
      <div style={styleBox.main}>
        <div className="container-fluid">
          <div className="row " style={{ marginBottom: 0 }}>
            <div
              className="col hide-on-small-only m3 l2"
              style={{
                boxShadow: "2px 0px 0px 0px #ceeef2",
                height: "auto",
                margin: 0,
                padding: 0
              }}
            >
              <SideBar isAuthenticated={isAuthenticated} userInfo={userInfo} />
            </div>
            <div className="col s12 m9 l10">
              <div className="container-fluid">
                <Header isAuthenticated={isAuthenticated} userInfo={userInfo} />
                <div className="row">
                  <div className="col s12 m12 l12">
                    <Switch>
                      <Route path="/Home/" exact>
                        <Graphs />{" "}
                      </Route>
                      <Route path="/Home/myGestor" exact>
                        <Gestor
                          isAuthenticated={isAuthenticated}
                          userInfo={userInfo}
                        />{" "}
                      </Route>

                      <Route path="/Home/expense" exact>
                        <Expense />
                      </Route>
                      <Route path="/Home/income" exact>
                        <Income />
                      </Route>
                      <Route path="/Home/contacts" exact>
                        <Contacts />
                      </Route>
                      <Route path="/Home/contacts/newContact" exact>
                        <NewContact />
                      </Route>

                      <Route path="/Home/subscr" exact>
                        <Subscription />
                      </Route>
                      <Route path="/Home/configure" exact>
                        <Configuration />
                      </Route>
                      <Route path="/Home/doc" exact>
                        <Documents
                          isAuthenticated={isAuthenticated}
                          userInfo={userInfo}
                        />
                      </Route>
                      <Route path="/Home/faq" exact>
                        <FAQ />{" "}
                      </Route>
                      <Route path="/Home/security" exact>
                        <Security />
                      </Route>
                      <Route path="/Home/help" exact>
                        <Help />{" "}
                      </Route>
                    </Switch>
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

const styleBox = {
  main: {
    backgroundImage: `url(${bkground})`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    minHeight: 500
    // paddingTop: 130,
  },

  //Header
  header: {
    color: "white",
    padding: 30,
    paddingBottom: 0,
    marginBottom: 0
  },
  profile: {
    width: 50,
    height: 50,
    border: "2px solid white",
    borderRadius: "100%"
  },
  name: {
    textAlign: "right",
    marginTop: 12
  }
};

const Header = data => {
  return (
    <div className="row" style={styleBox.header}>
      <div className="col s12 m8 l9"></div>
      <div className="col hide-on-small-only m2 l2" style={styleBox.name}>
        {data.userInfo.displayName}
      </div>
      {/* <img alt="" src={data.userInfo.photoURL} /> */}
      <div className="col hide-on-small-only m l1">
        <img style={styleBox.profile} alt="" src={ava} />
      </div>
    </div>
  );
};
export default Home;
