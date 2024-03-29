import React, { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

import Auth from './Auth';

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/auth" element={<Auth />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Router;
