import React, { Component } from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Keranjang from "./components/Keranjang";
import Product from "./components/Product";

class App extends Component {
  render() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ⚗ Toko Nopian
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/keranjang">
                  Keranjang
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/keranjang">
            <Keranjang />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <footer className="page-footer font-small blue"></footer>
      </div>
    </Router>
  );
  }
}

export default App;
