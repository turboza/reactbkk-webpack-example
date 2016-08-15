import React from 'react';
import Footer from './Footer.js';

import logo from './logo.png';

import './style.css';
import './footer.scss';

export default function App() {
  return (
    <div>
      <h1>ReactJS Bangkok 1.0.0</h1>
      <div className="content">
        <img src={logo} className="logo" />
      </div>
      <Footer />
    </div>
  );
}
