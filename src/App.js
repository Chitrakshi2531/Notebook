import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Layout, ConfigProvider } from 'antd';
import React, { Component } from 'react';
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import { connect } from 'react-redux';
const { Content } = Layout;

const mapStateToProps = (state) =>({
  color: state.color.color,
});

class App extends Component{
  render(){
    return (
      <Router>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: this.props.color,
            },
          }}
        >
        <Layout className="layout">
          <Navbar />
          <Content style={{ padding: '0 50px' }}>
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/logout" element={<Logout />} />
              </Routes>
          </Content>
        </Layout>
        </ConfigProvider>
      </Router>
    )
  }
}

export default connect(mapStateToProps)(App);
