import React, { Component } from 'react';
import AppRouter from './Router/routes';
import { auth } from './Auth/auth';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {isAuthenticated: false, userInfo: []};
  }
  render() {
    var {isAuthenticated, userInfo} = this.state;
    return (
      <div className='App' >
        <AppRouter isAuthenticated={isAuthenticated} userInfo={userInfo} />
      </div>
    );
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(user){
        console.log(user);
        this.setState({
          isAuthenticated: true,
          userInfo: user
        })
      }else {
        this.setState({
          isAuthenticated: false
        })
      }
    })
  }
}

export default App;
