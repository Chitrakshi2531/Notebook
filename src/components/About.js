
import React, { Component } from 'react';
import  {connect}  from 'react-redux';
import  {action}  from '../redux/action-creators/index';
import store from '../redux/store';
import { Radio, Switch } from 'antd';
import { WithRouter } from './Router';

class About extends Component {
  handleThemeChange = (checked) =>{
    const theme = checked ? 'dark' : 'light';
    store.dispatch(action.changeTheme(theme));
  };
  handleColorChange = (event) =>{
    store.dispatch(action.changeColor(event.target.value));
  };
  getuserdetails = async () =>{
    try{
      const res = await fetch("http://localhost:3001/auth/getuser",{
        method: "GET",
        withCredentials: true,
        credentials: "same-origin",
        });
        const json = await res.json(); 
        if(! (res.status === 200)){
          const error = new Error(res.error);
          throw error;
        }   
    }catch(e){
      console.log(e);
      this.props.navigate("/login");
    }
  }
  async componentDidMount(){
    await this.getuserdetails();
  }
  render() {
    return (
        <div>
          <h2>About</h2>
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
});

export default connect(mapStateToProps)(WithRouter(About));