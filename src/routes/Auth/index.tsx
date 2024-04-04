import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Form } from 'react-bootstrap';
import signinbg from '../../assets/defaultimages/img-signin.png';

import { AuthCredentials, authUser } from '../../store/slices/auth.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import classes from './auth.module.scss';
import Spacer from '../../components/ui/Spacer';

function onChange(checked: any) {
  console.log(`switch to ${checked}`);
}

interface AuthForm {
  email?: string;
  password?: string;
}
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [form, setForm] = useState<AuthForm>({});
  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [navigate, user]);
  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const onFinish = (e) => {
    e.preventDefault();
    const values: AuthCredentials = { login: form.email!, password: form.password! };
    dispatch(authUser(values));
  };

  return (
    <div className={classes.layout}>
      <Spacer />
      <div className="container max-w-2xl ">
        <div className="row">
          <div className="col-6 col-xs-12">
            <h3 className="mb-15">Sign In</h3>
            <div className="font-regular text-muted mb-3">
              Enter your email and password to sign in
            </div>
            <Form className="d-flex flex-column gap-3" onSubmit={onFinish}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => setField('email', e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setField('password', e.target.value)}
                  placeholder="Enter password"
                />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Remember me" onChange={onChange} />
              </Form.Group>
              <Form.Group>
                <Button type="submit" className="btn-light w-100">
                  SIGN IN
                </Button>
              </Form.Group>
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
