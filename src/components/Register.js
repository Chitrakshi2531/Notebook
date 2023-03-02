import React, { Component } from 'react';
import {Form, Button, Input, Select} from 'antd';
const { Option } = Select;
//import {useHistory} from 'react-router-dom';

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="91">+91</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);


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
    //let history = useHistory();
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
      //event.preventDefault();
      console.log({
        "name": this.state.name,
          "email": this.state.email,
          "phone": this.state.phone,
          "password": this.state.password,
      });
      const res = await fetch("http://localhost:3001/register",{
        method: "POST",
        headers: {
          'Content-Type': 'application.json'
        },
        body: JSON.stringify({
          "name": this.state.name,
          "email": this.state.email,
          "phone": this.state.phone,
          "password": this.state.password,
        })
      });
      const json = await Response.json()
      console.log(json);
      if(json.success){
       // history.push("/")
       console.log("added details to db");
      }
      else{
        alert("Invalid crendential");
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
            addonBefore={prefixSelector} 
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

export default Register;
