import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Layout, Menu, Button} from 'antd';
import {HomeOutlined, UserOutlined, MenuOutlined} from '@ant-design/icons';
import React, { Component } from 'react';
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register"
import {connect} from 'react-redux';
const { Header, Content, } = Layout;

const mapStateToProps = (state) =>({
  theme: state.theme,
});

class App extends Component{
  render(){
    return (
      <Router>
        <Layout className="layout">
          <div className="logo">
            <image src="/logo.png" alt="logo" />
            </div>
        <Header>
            <Menu theme="dark" mode="horizontal" style={{display:'block'}}>
              {
                false ? 
                <>
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Button type="link" href="/">Home</Button>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<MenuOutlined />}>
                    <Button type="link" href="/about">About</Button>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UserOutlined />} style={{float:"right"}}>
                    <Button type="link" href="/login">Logout</Button>
                  </Menu.Item>
                </> : 
                <>
                  <Menu.Item key="1" icon={<UserOutlined />} style={{float:"right"}}>
                    <Button type="link" href="/login">Login</Button>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<UserOutlined />}style={{float:"right"}}>
                    <Button type="link" href="/register">Register</Button>
                  </Menu.Item>
                </>
              }
              
            </Menu>
          </Header>
          
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/register" element={<Register />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Router>
    )
  }
}

export default connect(mapStateToProps)(App);
