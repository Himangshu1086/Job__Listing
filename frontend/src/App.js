
import './App.css';
import Footer from './COMPONENTS/footer/Footer';
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import Container__for_Card from './COMPONENTS/proffessions/card_for_profession/Container__for_Card';
import Home from './COMPONENTS/home__page/Home';
import Navbar from './COMPONENTS/header/Header__for__others/Navbar';
import Profession__details from './COMPONENTS/proffessions/profession__details/Profession__details';

function App() {

  return (
    
      <Router>
      <Switch>
          <Route path="/category/teacher/id">
            <Profession__details/>
          </Route>
          <Route path="/category/teacher">
              <Navbar/>
             <Container__for_Card/>
          </Route>
          <Route path="/" component={Home}/>
      </Switch>
        <Footer/>
      </Router>
    
  );
}

export default App;
