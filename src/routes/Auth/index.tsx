import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Switch } from 'antd';

import signinbg from '../../assets/defaultimages/img-signin.png';

import { AuthCredentials, authUser } from '../../store/slices/auth.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import classes from './auth.module.scss';
import Spacer from '../../components/ui/Spacer';

function onChange(checked: any) {
  console.log(`switch to ${checked}`);
}

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

  return (
    <div className={classes.layout}>
      <Spacer />
      <div className="container max-w-2xl ">
        <div className="row">
          <div className="col-6 col-xs-12">
            <h1 className="mb-15">Sign In</h1>
            <h3 className="font-regular text-muted">Enter your email and password to sign in</h3>
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
          </div>
          <div className="sign-img col-6 col-xs-12">
            <img src={signinbg} alt="" />
          </div>
        </div>
      </div>
      <Spacer />
      <footer className={classes.footer}>
        <div className="copyright">
          Copyright © 2024 Muse by <a href="#pablo">Fibonacci Team</a>.{' '}
        </div>
      </footer>
    </div>
  );
};

export default Auth;
