import React from 'react';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';

import 'styles/global.scss';

// For React hot loader, root component must not be stateless
export default class App extends React.Component {
  // Use counter to show that the state is not reloaded
  constructor() {
    super();
    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
    setInterval(this.increment, 500);
  }

  increment() {
    // Even changing + 1 to something else, the state will not lose
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <div style={{ fontSize: '28px' }}>
          {this.state.counter}
        </div>
        <Home />
        <Footer />
      </div>
    );
  }
}
