import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>

          </Route>



        </Switch>
        <Footer></Footer>

      </Router>


    </div>
  );
}

export default App;
