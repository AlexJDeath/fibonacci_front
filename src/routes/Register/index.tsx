import React from 'react';
import { Button, Card, Checkbox, Form, Input, Layout, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Footer, Content } = Layout;

export default function Register() {
  const onFinish = (values: object) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="layout-default ant-layout layout-sign-up">
      <Content className="p-0">
        <div className="sign-up-header">
          <div className="content">
            <Title>Sign Up</Title>
            <p className="text-lg">
              Use these awesome forms to login or create new account in our project.
            </p>
          </div>
        </div>

        <Card
          className="card-signup header-solid h-full ant-card pt-0"
          title={<h5>Register With</h5>}
          bordered={false}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="row-col"
          >
            <Form.Item
              name="Name"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input placeholder="Passwoed" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>
                I agree the&nbsp;
                <a href="#pablo" className="font-bold text-dark">
                  Terms and Conditions
                </a>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                SIGN UP
              </Button>
            </Form.Item>
          </Form>
          <p className="font-semibold text-muted text-center">
            Already have an account?&nbsp;
            <Link to="/login" className="font-bold text-dark">
              Sign In
            </Link>
          </p>
        </Card>
      </Content>
      <Footer>
        <Menu mode="horizontal">
          <Menu.Item>Company</Menu.Item>
          <Menu.Item>About Us</Menu.Item>
          <Menu.Item>Teams</Menu.Item>
          <Menu.Item>Products</Menu.Item>
          <Menu.Item>Blogs</Menu.Item>
          <Menu.Item>Pricing</Menu.Item>
        </Menu>

        <p className="copyright">
          &nbsp; Copyright © 2021 Muse by <a href="#pablo">Fibonacci Tim</a>.&nbsp;
        </p>
      </Footer>
    </div>
  );
}
