// src/routes/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/home';
// import About from '../pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
