import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';

import 'styles/global.scss';

// For React hot loader, root component must not be stateless
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <p>{__DEBUG__ && 'Debug Mode'}</p>
        <Footer />
      </div>
    );
  }
}
