import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components

import Home from "../Screens/Home/Home"
import SignIn from "../Screens/Authentication/SignIn";
import SignUp from "../Screens/Authentication/SignUp";
import ForgetPassWord from "../Screens/Authentication/ForgetPass";
import NewPass from "../Screens/Authentication/NewPass";

import SpanishHome from "../Spanish/Home/Home"
import SpanishSignIn from "../Spanish/Authentication/SignIn";
import SpanishSignUp from "../Spanish/Authentication/SignUp";
// import ForgetPassWord from "../Spanish/Authentication/ForgetPass";
// import NewPass from "../Spanish/Authentication/NewPass";

import "../css/style.css"

const AppRouter = (props) => {
  var {isAuthenticated, userInfo, expData, expHis,updateExpHis, incData, incHis, updateIncHis, contacts, uploadDoc, doc, userData, models} = props;
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
          doc={doc}
          userData={userData}
          models={models}
           /> }  />
        <Route path="/signup"  render={() => <SignUp isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/resetpasword" render={() => <ForgetPassWord   isAuthenticated={isAuthenticated} /> } />
        <Route path="/newPass/" component={NewPass} isAuthenticated={isAuthenticated} />



        <Route path="/es"  render={() => <SpanishSignIn isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/es/home" render={() => <SpanishHome 
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
          doc={doc}
          userData={userData}
          models={models}
           /> }  />
        <Route path="/es/signup"  render={() => <SpanishSignUp isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/es/resetpasword" render={() => <ForgetPassWord   isAuthenticated={isAuthenticated} /> } />
        <Route path="/es/newPass/" component={NewPass} isAuthenticated={isAuthenticated} />


      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
