
import Navbar from './COMPONENTS/header/Navbar';
import './App.css';
import Footer from './COMPONENTS/footer/Footer';
import Home from './COMPONENTS/home__page/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      </Router>
      <Router>
        <Home/>
      </Router>
      <Router>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
