import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu} from 'antd';
import React, { Component } from 'react';
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register"
const { Header, Content, } = Layout;

class App extends Component{
  render(){
    return (
      <Router>
        <Layout className="layout">
        <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <Link to="/">
                Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/register">Register</Link>
              </Menu.Item>
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

export default App;
