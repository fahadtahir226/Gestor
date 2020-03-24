import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components

import Home from "../Screens/Home/Home";
import SignIn from "../Screens/Authentication/SignIn";
import SignUp from "../Screens/Authentication/SignUp";
import ForgetPassWord from "../Screens/Authentication/ForgetPass";
import NewPass from "../Screens/Authentication/NewPass";

const AppRouter = props => {
  var { isAuthenticated, userInfo } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={() => (
            <SignIn isAuthenticated={isAuthenticated} userInfo={userInfo} />
          )}
          exact
        />
        <Route
          path="/Home"
          render={() => (
            <Home isAuthenticated={isAuthenticated} userInfo={userInfo} />
          )}
        />
        <Route
          path="/SignUp"
          render={() => (
            <SignUp isAuthenticated={isAuthenticated} userInfo={userInfo} />
          )}
          exact
        />
        <Route path="/passReset" render={() => <ForgetPassWord />} />
        <Route
          path="/newPass/:mode&:oobCode&:apiKey&:lang"
          component={NewPass}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
