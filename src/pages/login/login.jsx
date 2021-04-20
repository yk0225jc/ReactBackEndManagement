import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./login.less";
import Logo from "./images/Logo.png";

//Login router component



class login extends Component {
    formRef = React.createRef();
    
    handleSubmit =(event)=>{
        event.perventDefault();

        event.validateFields()
        .then(values => {
          console.log("Submimt request", values);
        })



        console.log(event);
    }



    //Validate password
    validatorPw =(rule, value, callback)=>{
        if(!value){
            callback("Please enter a password")
        }else if(value.length <= 10){
            callback("Password length should be least 10 characters")
        }else if(value.length > 20){
            callback("Password length should not be more than 20 characters")
        }
    }

  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={Logo} alt="Logo" />
          <h1>Jiameng's Management System</h1>
        </header>
        <section className="login-content">
          <h2>User Login</h2>
          <Form
            onFinish={(values) => this.handleSubmit(values)} className="login-form"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace : true,
                  message: "Please input your Username",
                },
                {
                    min : 4, message: "Username need at least 4 charactesr",
                },
                {
                    max: 20, message: "Username maximum chracter is 20 characters",
                },
                {
                    Pattern: /^[a-zA-Z0-9_]+$/, message: "You only allow to enter upper/lower character and numbers",
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password",
                },
                {
                    validator : this.validatorPw
                }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default login;
