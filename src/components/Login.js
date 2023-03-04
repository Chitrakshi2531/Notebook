import React, { Component } from 'react';
import {Form, Button,Input} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { WithRouter } from './Navigation';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }
  onInputChange = (event) => {
    event.preventDefault();
    this.setState(
      {[event.target.name]: event.target.value}
    )
  }
  onFinish = async (event) => {
    event.preventDefault();
    const res = await fetch("",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: [this.state.email],password: [this.state.password]})
    });
    const json = await res.json()
    console.log(json);
    if(json.success){
      this.props.navigate('/login')
    }
    else{
      alert("Invalid crendential");
    }
  }
  render() {
    return (
        <div className='formContainer'>
          <Form
            name="form"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="Email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                { 
                  required: true, 
                  message: 'Please input your Email!'
                }
              ]}
            >
              <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Email" 
                name='email'
                value = {this.state.email}
                onChange={this.onInputChange}
                />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { 
                  required: true, 
                  message: 'Please input your Password!' 
                }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                name='password'
                value = {this.state.password}
                onChange={this.onInputChange}
              />
              </Form.Item>
            <Form.Item>
              <Button name='submit' type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
    );
  }
}

export default WithRouter(Login);
