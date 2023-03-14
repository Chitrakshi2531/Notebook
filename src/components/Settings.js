
import React, { Component } from 'react';
import  {connect}  from 'react-redux';
import  {action}  from '../redux/action-creators/index';
import store from '../redux/store';
import { Radio, Switch } from 'antd';
import { WithRouter } from './Router';
import { Navigate } from "react-router-dom";

class Settings extends Component {
  handleThemeChange = (checked) =>{
    const theme = checked ? 'dark' : 'light';
    store.dispatch(action.changeTheme(theme));
  };
  handleColorChange = (event) =>{
    store.dispatch(action.changeColor(event.target.value));
  };
  render() {
    if (this.props.login === false) {
      return <Navigate to="/login" />;
    }
    return (
        <div>
          <h2>Settings</h2>
            <div>
              <h3>Theme -
                <Switch
                checked={this.props.theme === 'dark'}
                onChange={this.handleThemeChange}
                style={{margin: 10}}
                />
              Dark
              </h3>
            </div>
            <div>
            <Radio.Group defaultValue="blue" buttonStyle="solid">
              <Radio.Button name="color" value="blue" checked={this.props.theme==='blue'} onChange={this.handleColorChange} > 
                Blue 
              </Radio.Button>
              <Radio.Button name="color" value="red" checked={this.props.theme==='red'} onChange={this.handleColorChange} >
                Red 
              </Radio.Button>
              <Radio.Button name="color" value="orange" checked={this.props.theme==='orange'} onChange={this.handleColorChange} >
                Orange 
              </Radio.Button>
              <Radio.Button name="color" value="green" checked={this.props.theme==='green'} onChange={this.handleColorChange} >
                Green 
              </Radio.Button>
              <Radio.Button name="color" value="purple" checked={this.props.theme==='purple'} onChange={this.handleColorChange} >
                Purple
              </Radio.Button>
              </Radio.Group>
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) =>({
  theme: state.theme.theme,
  color: state.color.color,
  login: state.login.login,
});

export default connect(mapStateToProps)(WithRouter(Settings));