import React, { Component } from 'react';
import {Form, Button, Input, message} from 'antd';
import { WithRouter } from './Router';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      password: null,
      confirm_password: null,
    };
  }
  onInputChange = (event) => {
    this.setState(
      {[event.target.name]: event.target.value}
    )
  }
  onFinish = async (event) => {
    if(this.state.confirm_password !== this.state.password){
      alert('Password did not matched');
    }
    else{
      event.preventDefault();
      const geores = await fetch("https://ipapi.co/json/");
      const geojson = await geores.json();
      const res = await fetch("http://localhost:3001/auth/register",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": this.state.name,
          "email": this.state.email,
          "phone": this.state.phone,
          "password": this.state.password,
          "ip": geojson.ip,
          "city": geojson.city,
          "region": geojson.region,
          "country": geojson.country_name,
        })
      });
      const json = await res.json();
      if(json.success){
        
        message.success("Account created");
        this.props.navigate('/login');
      }
      else if(res.status === 400){
        json.errors.forEach(element => {
          message.error(element.msg);
        });
      }
      else if(res.status === 401)
      {
        message.error('Account already exist')
      }
      else{
        message.error("Internal server error");
      }
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
        autoComplete="off"
      >
        <Form.Item
          name="Name"
          label="Full Name"
          rules={[{ required: true, message: 'Please input your Full Name!' }]}
        >
          <Input 
            style={{ width: '100%' }}
            name='name'
            value = {this.state.name}
            onChange={this.onInputChange} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input 
            name='email'
            value = {this.state.email}
            onChange={this.onInputChange}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input 
            style={{ width: '100%' }} 
            name='phone'
              value = {this.state.phone}
              onChange={this.onInputChange}
        />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            name='password'
            value = {this.state.password}
            onChange={this.onInputChange}
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirm password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password 
          name='confirm_password'
          value = {this.state.confirm_password}
          onChange={this.onInputChange}/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={this.onFinish}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    );
  }
}

export default WithRouter(Register);
