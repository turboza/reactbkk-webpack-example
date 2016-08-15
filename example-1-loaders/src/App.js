import React from 'react';
import Footer from './Footer.js';

import image from './image.jpg';

import './style.css';
import './footer.scss';

export default function App() {
  return (
    <div>
      <h1>Title</h1>
      <div className="content">
        <div>Content</div>
        <img src={image} width="200" />
      </div>
      <Footer />
    </div>
  );
}
