import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import signinbg from '../../assets/defaultimages/img-signin.png';

import { AuthCredentials, authUser } from '../../store/slices/auth.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import classes from './auth.module.scss';
import Spacer from '../../components/ui/Spacer';
import Preloader from '../../components/ui/Preloader/Preloader';
import { ERequestStatus } from '../../common/request';

interface AuthForm {
  email: string;
  password: string;
  remember: false;
}

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, fetching } = useAppSelector((state) => ({
    user: state.auth.user,
    fetching: state.auth.fetching,
  }));
  const [form, setForm] = useState<AuthForm>({ email: '', password: '', remember: false });
  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [navigate, user]);
  const setField = (field: string, value: unknown) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values: AuthCredentials = { login: form.email!, password: form.password! };
    dispatch(authUser(values));
  };

  return (
    <div className={cn({ [classes.layout]: true, 'max-w-[992px] m-auto': true })}>
      <Spacer />
      <Preloader activated={fetching === ERequestStatus.LOADING}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
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
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    onChange={() => setField('remember', !form.remember)}
                  />
                </Form.Group>
                <Form.Group>
                  <Button type="submit" className="btn-light w-100">
                    SIGN IN
                  </Button>
                </Form.Group>
              </Form>
            </div>
            <div className="sign-img d-none d-md-block col-6">
              <img src={signinbg} alt="" />
            </div>
          </div>
        </div>
      </Preloader>
      <Spacer />
      <footer className={classes.footer}>
        <div className="copyright">
          Copyright © 2024 <a href="http://fibonacci.com">Fibonacci Team</a>.{' '}
        </div>
      </footer>
    </div>
  );
};

export default Auth;
