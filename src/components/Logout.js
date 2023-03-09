import React, { Component } from 'react';
import { WithRouter } from './Router';
import  {action}  from '../redux/action-creators/index';
import store from '../redux/store';

class Logout extends Component {
componentDidMount(){
    store.dispatch(action.logout());
    this.props.navigate('/login');
}
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
export default WithRouter(Logout);