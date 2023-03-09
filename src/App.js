import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Layout} from 'antd';
import React, { Component } from 'react';
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
const { Content } = Layout;

class App extends Component{
  render(){
    return (
      <Router>
        <Layout className="layout">
          <Navbar />
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/logout" element={<Logout />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Router>
    )
  }
}

export default App;
