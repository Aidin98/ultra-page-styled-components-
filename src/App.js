import React from 'react'
import { Fotter, Navbar } from './components/Index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './GlobalStyles'
import Home from './pages/HomePage/Home'
import Servies from './pages/Services/Services'
import Products from './pages/Products/Products'
import Signup from './pages/SignUp/Signup'

function App() {
  return (
    <Router>
  <Navbar/>
    <GlobalStyle />
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/services'  component={Servies} />
    <Route path='/products'  component={Products} />
    <Route path='/signup'  component={Signup} />
  </Switch>
  <Fotter />
    </Router>
  );
}

export default App;
