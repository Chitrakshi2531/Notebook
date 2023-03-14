import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Menu,Layout} from 'antd';
import {HomeOutlined, UserOutlined, SettingOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
const {Header} = Layout;


const mapStateToProps = (state) =>({
    theme: state.theme.theme,
    login: state.login.login,
  });

class Navbar extends Component {
  render() {
    return (
      <Header className="header" style={{padding: 0}}>
      <div className="logo" />
        <Menu theme ={this.props.theme}  mode="horizontal" style={{display:'block',paddingRight: 30,paddingLeft: 30}}>
          {
            this.props.login ? 
            <>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<SettingOutlined />}>
                <Link to="/settings">Settings</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />} style={{float:"right"}}>
                <Link to="/logout">Logout</Link>
              </Menu.Item>
            </> : 
            <>
              <Menu.Item key="1" icon={<UserOutlined />} style={{float:"right"}}>
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}style={{float:"right"}}>
                <Link to="/register">Register</Link>
              </Menu.Item>
            </>
          }
        </Menu>
        </Header>
    );
  }
}
export default connect(mapStateToProps)(Navbar);