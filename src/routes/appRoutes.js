// src/routes/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/home';
import AirportTransfer from '../pages/airportTransfer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="airport-transfers" element={<AirportTransfer />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
