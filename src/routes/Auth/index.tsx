import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Button, Row, Col, Typography, Form, Input, Switch } from 'antd';

import signinbg from '../../assets/defaultimages/img-signin.png';

import { AuthCredentials, authUser } from '../../store/slices/auth.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function onChange(checked: any) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Footer, Content } = Layout;

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [navigate, user]);
  const onFinish = (values: object) => {
    dispatch(authUser(values as AuthCredentials));
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  console.log('user is...');
  console.log(user);

  return (
    <Layout className="layout-default layout-signin">
      <Content className="signin">
        <Row gutter={[24, 0]} justify="center">
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }} md={{ span: 6 }}>
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
                <Link to="/register" className="text-dark font-bold">
                  Sign Up
                </Link>
              </p>
            </Form>
          </Col>
          <Col
            className="sign-img"
            style={{ padding: 12 }}
            xs={{ span: 24 }}
            lg={{ span: 6 }}
            md={{ span: 6 }}
          >
            <img src={signinbg} alt="" />
          </Col>
        </Row>
      </Content>
      <Footer>
        <div className="copyright">
          Copyright © 2024 Muse by <a href="#pablo">Fibonacci Team</a>.{' '}
        </div>
      </Footer>
    </Layout>
  );
};

export default Auth;
