import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components

import Home from "../Screens/Home/Home"
import SignIn from "../Screens/Authentication/SignIn";
import SignUp from "../Screens/Authentication/SignUp";
import ForgetPassWord from "../Screens/Authentication/ForgetPass";
import NewPass from "../Screens/Authentication/NewPass";

const AppRouter = (props) => {
  var {isAuthenticated, userInfo, expData, expHis,updateExpHis , incData, incHis, updateIncHis, contacts, uploadDoc} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"  render={() => <SignIn isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/home" render={() => <Home 
          isAuthenticated={isAuthenticated} 
          userInfo={userInfo} 
          expData={expData}
          expHis={expHis} 
          updateExpHis={updateExpHis} 
          incData={incData} 
          incHis={incHis}
          updateIncHis={updateIncHis}
          contacts={contacts} 
          uploadDoc={uploadDoc}
           /> }  />
        <Route path="/signup"  render={() => <SignUp isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/resetpasword" render={() => <ForgetPassWord /> } />
        <Route path="/newPass/?:mode&:oobCode&:apiKey&:lang" component={NewPass} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
