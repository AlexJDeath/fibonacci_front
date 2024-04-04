import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './routes/Auth';
import Home from './routes/Home';
import AuthLayout from './components/layouts/AuthLayout';
import './styles/vendors.scss';
import './assets/css/app.css';
import './assets/css/themes.scss';
import './assets/css/icons.css';
import './assets/css/pace.min.css';
import { User } from './store/slices/auth.slice';
import { RootState } from './store';

const App = ({ user }: { user: User | null }) => (
  <span data-bs-theme="fibonacci">
    <Routes>
      <Route element={<AuthLayout authenticated={user !== null} />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Auth />} />
    </Routes>
  </span>
);

export default connect((state: RootState) => ({ user: state.auth.user }), {})(App);
