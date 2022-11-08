import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import Users from './components/Users';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}