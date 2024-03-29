import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Row, Col, Typography, Form, Input, Switch } from 'antd';

import signinbg from '../../assets/defaultimages/img-signin.jpg';

function onChange(checked: any) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Footer, Content } = Layout;

const Auth = () => {
  const onFinish = (values: string) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Layout className="layout-default layout-signin">
      <Content className="signin">
        <Row gutter={[24, 0]} justify="space-around">
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }} md={{ span: 12 }}>
            <Title className="mb-15">Sign In</Title>
            <Title className="font-regular text-muted" level={5}>
              Enter your email and password to sign in
            </Title>
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
              className="row-col"
            >
              <Form.Item
                className="username"
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                className="username"
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input placeholder="Password" />
              </Form.Item>

              <Form.Item name="remember" className="aligin-center" valuePropName="checked">
                <Switch defaultChecked onChange={onChange} />
                Remember me
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  SIGN IN
                </Button>
              </Form.Item>
              <p className="font-semibold text-muted">
                Don`t have an account?{' '}
                <Link to="/sign-up" className="text-dark font-bold">
                  Sign Up
                </Link>
              </p>
            </Form>
          </Col>
          <Col
            className="sign-img"
            style={{ padding: 12 }}
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
          >
            <img src={signinbg} alt="" />
          </Col>
        </Row>
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
          {' '}
          Copyright © 2021 Muse by <a href="#pablo">Creative Tim</a>.{' '}
        </p>
      </Footer>
    </Layout>
  );
};

export default Auth;
