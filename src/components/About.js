
import React, { Component } from 'react';
import  {connect}  from 'react-redux';
import  {action}  from '../redux/action-creators/index';
import store from '../redux/store';
import { Radio } from 'antd';


class About extends Component {
  handleThemeChange = (event) =>{
    store.dispatch(action.changeTheme(event.target.value));
  };
  handleColorChange = (event) =>{
    store.dispatch(action.changeColor(event.target.value));
  };
  render() {
    return (
        <div>
          <h2>About</h2>
            <div>
              <Radio name="theme" value="light" checked={this.props.theme==='light'} onChange={this.handleThemeChange} > 
                Light 
              </Radio>
              <Radio name="theme" value="dark" checked={this.props.theme==='dark'} onChange={this.handleThemeChange} >
                Dark 
              </Radio>
            </div>
            <div>
              <Radio name="color" value="blue" checked={this.props.theme==='blue'} onChange={this.handleColorChange} > 
                Blue 
              </Radio>
              <Radio name="color" value="red" checked={this.props.theme==='red'} onChange={this.handleColorChange} >
                Red 
              </Radio>
              <Radio name="color" value="orange" checked={this.props.theme==='orange'} onChange={this.handleColorChange} >
                Orange 
              </Radio>
              <Radio name="color" value="green" checked={this.props.theme==='green'} onChange={this.handleColorChange} >
                Green 
              </Radio>
              <Radio name="color" value="purple" checked={this.props.theme==='purple'} onChange={this.handleColorChange} >
                Purple
              </Radio>
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) =>({
  theme: state.theme.theme,
  color: state.color.color,
});

export default connect(mapStateToProps)(About);
