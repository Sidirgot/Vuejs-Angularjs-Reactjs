import React, { Component } from 'react';
import './App.css'; // Put the CSS up here so it doesn't override the css rules on the Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

          <Route exact={true} path="/" component={Home} />
          <Route path="/faq" component={Faq} />

        <Footer />
      </div>
    );
  }
}

export default App;
