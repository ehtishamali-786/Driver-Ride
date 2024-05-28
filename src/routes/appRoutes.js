// src/routes/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/home';
import AirportTransfer from '../pages/airportTransfer';
import CityToCity from '../pages/cityTocity';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="airport-transfers" element={<AirportTransfer />} />
        <Route path="city-to-city" element={<CityToCity />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
